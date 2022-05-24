import "@testing-library/jest-dom";
import {waitFor} from "@testing-library/react";

import Home from "../pages/index";
import {IProduct} from "../components/Products/types";

import {render} from "./test-utils";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));
describe("[ Home / index.tsx ] ", () => {
  let products = [] as IProduct[];

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
        name: "iPhone 8",
        cost: 1000,
        category: "Phones",
        _id: "1",
        createDate: "10 de Marzo",
        img: {
          url: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
          hdUrl: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
        },
      },
      {
        name: "Instax Mini 8",
        cost: 2000,
        category: "Cameras",
        _id: "2",
        createDate: "11 de Marzo",
        img: {
          url: "https://coding-challenge-api.aerolab.co/images/InstaxMini-x2.png",
          hdUrl: "https://coding-challenge-api.aerolab.co/images/InstaxMini-x2.png",
        },
      },
    ] as IProduct[];
  });

  describe("when first load", () => {
    it("should render landingPage", async () => {
      const home = render(<Home {...{products}} />);

      await waitFor(() => {
        const LandingSectionImage = home.getByAltText("hero-illustration");
        const LandingSectionHero1 = home.getAllByRole("heading", {name: /Tech/i});
        const LandingSectionHero2 = home.getByRole("heading", {name: /Zone/i});

        setTimeout(() => {
          const LandingSectionButton = home.getByRole("button", {name: /View all products/i});

          expect(LandingSectionButton).toBeVisible();
        }, 1500);
        expect(LandingSectionImage).toBeVisible();
        expect(LandingSectionHero1[0]).toBeVisible();
        expect(LandingSectionHero2).toBeVisible();
      });
    });

    it("should render WalkThrough", async () => {
      const home = render(<Home {...{products}} />);

      await waitFor(() => {
        const BrowseCard = home.getByText(/1—browse/i);
        const ChooseCard = home.getByText(/Choose/i);
        const EnjoyCard = home.getByText(/Enjoy/i);

        const BrowseCardImage = home.getByAltText(/walkthrough-1/i);
        const ChooseCardImage = home.getByAltText(/walkthrough-2/i);
        const EnjoyCardImage = home.getByAltText(/walkthrough-3/i);

        expect(BrowseCard).toBeVisible();
        expect(ChooseCard).toBeVisible();
        expect(EnjoyCard).toBeVisible();
        expect(BrowseCardImage).toBeVisible();
        expect(ChooseCardImage).toBeVisible();
        expect(EnjoyCardImage).toBeVisible();
      });
    });

    it("should render ProductSection", async () => {
      const home = render(<Home {...{products}} />);

      await waitFor(() => {
        const Title1 = home.getAllByRole("heading", {name: /Tech/i});
        const Title2 = home.getByRole("heading", {name: /Products/i});

        const Filter = home.getByText("All Products");
        const Sort = home.getByText(/Sort by/i);
        const Page = home.getAllByText("Page");

        expect(Title1[1]).toHaveStyle("font-size: 48px");
        expect(Title2).toBeVisible();

        expect(Filter).toBeVisible();
        expect(Sort).toBeInTheDocument();
        expect(Page.length).toBe(2);
      });
    });
  });
  describe("when products length is greater than 0", () => {
    it("should render the same amount of products that has been pass to it", async () => {
      const home = render(<Home {...{products}} />);

      await waitFor(() => {
        const articles = home.getAllByAltText("product image");

        expect(articles.length).toBe(products.length);
      });
    });
  });
  describe("when products length is 0", () => {
    it("should render no products left text", async () => {
      const home = render(<Home {...{products: []}} />);
      const noProductsLeftText = "There are no products available. Please, return later.";

      await waitFor(() => {
        const text = home.getByText(noProductsLeftText);

        expect(text).toBeVisible();
      });
    });
  });
});
