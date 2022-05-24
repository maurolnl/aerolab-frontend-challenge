import {act} from "react-dom/test-utils";
import {fireEvent} from "@testing-library/react";
import {mutate} from "swr";

import Products from "../components/Products/Products";
import {IProduct} from "../components/Products/types";
import {useUser} from "../components/User/context";
import {useFilters} from "../components/Products/context";
import {PROD_URL, SORT_TYPES} from "../constants";
import {Colors} from "../styles/Theme";
import api from "../components/Products/api";
import {SuccessToast, ErrorToast} from "../components/Toast/Toast";

import {render} from "./test-utils";

jest.mock("../components/Toast/Toast");
jest.mock("../components/Products/api");

jest.mock("swr");

jest.mock("../components/Products/context");

jest.mock("../components/User/context", () => ({
  useUser: () => {
    return {
      user: {
        id: "1",
        name: "John",
        points: 2000,
        redeemHistory: [],
        createDate: "",
      },
    };
  },
}));

describe(" [ Products ] ", () => {
  let products: IProduct[] = [];

  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  beforeEach(() => {
    products = [
      {
        _id: "8",
        name: "iPhone 8",
        category: "Phones",
        cost: 3000,
        createDate: "",
        img: {
          url: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
          hdUrl: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
        },
      },
    ];
    (useFilters as any).mockReturnValue({
      page: 1,
      limit: 10,
      sort: SORT_TYPES[0],
      filter: "All Products",
      handleTotalChange: jest.fn(),
      total: 1,
    });
  });
  describe("when there is not enough points for a product", () => {
    it("should be able to see the button grey", () => {
      const productComponent = render(<Products {...{products}} />);

      const productButton = productComponent.getByRole("button", {name: /You need/i});

      expect(productButton).toBeVisible();
      expect(productButton).toHaveStyle(`background: ${Colors.Neutral[200]};`);
    });
    it("should be able to see how many more points it is needed to claim it", async () => {
      const productComponent = render(<Products {...{products}} />);

      const {user} = useUser();
      const {points} = user;

      const neededPoints = products[0].cost - points;

      const productButton = productComponent.getByRole("button", {
        name: `You need ${neededPoints}`,
      });

      expect(productButton).toBeVisible();
    });
    it("shouldn't be able to redeem the product", async () => {
      const mutateMock = jest.fn();

      const productComponent = render(<Products {...{products}} />);

      const productButton = productComponent.getByRole("button", {name: /You need/i});

      await act(async () => {
        fireEvent.click(productButton);
        expect(api.redeemProduct).toHaveBeenCalledTimes(0);
        expect(mutateMock).toHaveBeenCalledTimes(0);
      });
    });
  });
  describe("when there is enough points for a product", () => {
    beforeEach(() => {
      products = [
        {
          _id: "8",
          name: "iPhone 8",
          category: "Phones",
          cost: 1000,
          createDate: "",
          img: {
            url: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
            hdUrl: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
          },
        },
      ];
    });
    it("should be able to redeem it and see a success notification", async () => {
      (mutate as any).mockImplementation(jest.fn());
      jest.spyOn(api, "redeemProduct").mockImplementation(() => Promise.resolve(true));

      const productComponent = render(<Products {...{products}} />);

      const productButton = productComponent.getByRole("button", {name: /Redeem/i});

      await act(async () => {
        fireEvent.click(productButton);
      });
      expect(api.redeemProduct).toHaveBeenCalledWith(products[0]._id);
      expect(mutate).toHaveBeenCalledWith(`${PROD_URL}user/me`);
      expect(SuccessToast).toHaveBeenCalledTimes(1);
    });
  });
  describe("when #redeemProduct fails", () => {
    beforeEach(() => {
      products = [
        {
          _id: "8",
          name: "iPhone 8",
          category: "Phones",
          cost: 1000,
          createDate: "",
          img: {
            url: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
            hdUrl: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
          },
        },
      ];
    });
    it("should return ErrorToast notification", async () => {
      jest.spyOn(api, "redeemProduct").mockImplementation(() => Promise.resolve(false));

      const productComponent = render(<Products {...{products}} />);

      const productButton = productComponent.getByRole("button", {name: /Redeem/i});

      await act(async () => {
        fireEvent.click(productButton);
      });

      expect(ErrorToast).toHaveBeenCalledTimes(1);
    });
  });
  describe("#Sort", () => {
    beforeEach(() => {
      products = [
        {
          _id: "7",
          name: "iPhone 7",
          category: "Phones",
          cost: 2,
          createDate: "",
          img: {
            url: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
            hdUrl: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
          },
        },
        {
          _id: "8",
          name: "iPhone 8",
          category: "Phones",
          cost: 3,
          createDate: "",
          img: {
            url: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
            hdUrl: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
          },
        },
        {
          _id: "6",
          name: "iPhone 6",
          category: "Phones",
          cost: 1,
          createDate: "",
          img: {
            url: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
            hdUrl: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
          },
        },
      ];
    });
    describe("when sort is equal to Lowest Price", () => {
      let expectedCostOrder = [
        {
          cost: 1,
        },
        {
          cost: 2,
        },
        {
          cost: 3,
        },
      ];

      it("should render products sorted by lowest price", () => {
        (useFilters as any).mockReturnValue({
          page: 1,
          limit: 10,
          sort: SORT_TYPES[1], //sorted by lowest price
          filter: "All Products",
          handleTotalChange: jest.fn(),
          total: 1,
        });
        const ProductsComponent = render(<Products {...{products}} />);

        const articles = ProductsComponent.getAllByText(/Redeem/i);

        const exptectedFirstText = `Redeem for ${expectedCostOrder[0].cost.toString()}`;
        const exptectedSecondText = `Redeem for ${expectedCostOrder[1].cost.toString()}`;
        const exptectedThirdText = `Redeem for ${expectedCostOrder[2].cost.toString()}`;

        expect(articles[0]).toHaveTextContent(exptectedFirstText);
        expect(articles[1]).toHaveTextContent(exptectedSecondText);
        expect(articles[2]).toHaveTextContent(exptectedThirdText);
      });
    });
    describe("when sort is equal to Highest Price", () => {
      let expectedCostOrder = [
        {
          cost: 3,
        },
        {
          cost: 2,
        },
        {
          cost: 1,
        },
      ];

      it("should render products sorted by highest price", () => {
        (useFilters as any).mockReturnValue({
          page: 1,
          limit: 10,
          sort: SORT_TYPES[2], //sorted by highest price
          filter: "All Products",
          handleTotalChange: jest.fn(),
          total: 1,
        });
        const ProductsComponent = render(<Products {...{products}} />);

        const articles = ProductsComponent.getAllByText(/Redeem/i);

        const exptectedFirstText = `Redeem for ${expectedCostOrder[0].cost.toString()}`;
        const exptectedSecondText = `Redeem for ${expectedCostOrder[1].cost.toString()}`;
        const exptectedThirdText = `Redeem for ${expectedCostOrder[2].cost.toString()}`;

        expect(articles[0]).toHaveTextContent(exptectedFirstText);
        expect(articles[1]).toHaveTextContent(exptectedSecondText);
        expect(articles[2]).toHaveTextContent(exptectedThirdText);
      });
    });
    describe("when sort is equal to Most Recent", () => {
      let expectedCostOrder = [
        {
          cost: 2,
        },
        {
          cost: 3,
        },
        {
          cost: 1,
        },
      ];

      it("should render products without sort", () => {
        (useFilters as any).mockReturnValue({
          page: 1,
          limit: 10,
          sort: SORT_TYPES[0], //sorted by highest price
          filter: "All Products",
          handleTotalChange: jest.fn(),
          total: 1,
        });
        const ProductsComponent = render(<Products {...{products}} />);

        const articles = ProductsComponent.getAllByText(/Redeem/i);

        const exptectedFirstText = `Redeem for ${expectedCostOrder[0].cost.toString()}`;
        const exptectedSecondText = `Redeem for ${expectedCostOrder[1].cost.toString()}`;
        const exptectedThirdText = `Redeem for ${expectedCostOrder[2].cost.toString()}`;

        expect(articles[0]).toHaveTextContent(exptectedFirstText);
        expect(articles[1]).toHaveTextContent(exptectedSecondText);
        expect(articles[2]).toHaveTextContent(exptectedThirdText);
      });
    });
  });
  describe("#Filter", () => {
    beforeEach(() => {
      products = [
        {
          _id: "1",
          name: "iPhone 7",
          category: "Phones",
          cost: 2,
          createDate: "",
          img: {
            url: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
            hdUrl: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
          },
        },
        {
          _id: "2",
          name: "iPhone 8",
          category: "Phones",
          cost: 3,
          createDate: "",
          img: {
            url: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
            hdUrl: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
          },
        },
        {
          _id: "3",
          name: "iPhone 6",
          category: "Gaming",
          cost: 1,
          createDate: "",
          img: {
            url: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
            hdUrl: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
          },
        },
        {
          _id: "4",
          name: "iPhone 7",
          category: "Gaming",
          cost: 2,
          createDate: "",
          img: {
            url: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
            hdUrl: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
          },
        },
        {
          _id: "5",
          name: "iPhone 8",
          category: "Audio",
          cost: 3,
          createDate: "",
          img: {
            url: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
            hdUrl: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
          },
        },
        {
          _id: "6",
          name: "iPhone 6",
          category: "Audio",
          cost: 1,
          createDate: "",
          img: {
            url: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
            hdUrl: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
          },
        },
      ];
    });
    describe("when filter is equal to All Products", () => {
      it("should render all products", () => {
        (useFilters as any).mockReturnValue({
          page: 1,
          limit: 10,
          sort: SORT_TYPES[0], //sorted by highest price
          filter: "All Products",
          handleTotalChange: jest.fn(),
          total: 1,
        });
        const ProductsComponent = render(<Products {...{products}} />);

        const articles = ProductsComponent.getAllByText(/Redeem/i);

        expect(articles.length).toBe(products.length);

        articles.forEach((article) => {
          expect(article).toBeVisible();
        });
      });
    });
    describe("when is filtering for some category", () => {
      it("should render products with the same category", () => {
        (useFilters as any).mockReturnValue({
          page: 1,
          limit: 10,
          sort: SORT_TYPES[0], //sorted by highest price
          filter: "Gaming",
          handleTotalChange: jest.fn(),
          total: 1,
        });
        const ProductsComponent = render(<Products {...{products}} />);

        const articles = ProductsComponent.getAllByText(/Gaming/i);
        const buttonArticles = ProductsComponent.getAllByRole("button"); //each button present in product

        expect(articles.length).toBe(buttonArticles.length); //all products being shown have "Gaming" category
        expect(articles.length).toBe(2);

        articles.forEach((article) => {
          expect(article).toBeVisible();
          expect(article).toHaveTextContent("Gaming");
        });
      });
    });
  });
});
