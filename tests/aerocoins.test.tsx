import AeroCoins from "../components/AeroPay/AeroCoins";
import {useUser} from "../components/User/context";
import {formatCurrency} from "../components/utils";

import {render} from "./test-utils";

jest.mock("../components/User/context");

describe(" [AeroCoins] ", () => {
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
  describe("when the user points are > than 0", () => {
    beforeEach(() => {
      (useUser as any).mockReturnValue({
        user: {
          id: "1",
          name: "John",
          points: 1000,
          redeemHistory: [],
          createDate: "1",
        },
        error: undefined,
      });
    });
    it("should render the points formatted", () => {
      const AeroCoinsComponent = render(<AeroCoins />);

      const {user} = useUser();
      const formattedCoins = formatCurrency(user.points);

      const CoinsText = AeroCoinsComponent.getByText(`${formattedCoins}`);

      expect(CoinsText).toBeVisible();
    });
  });
  describe("when user context is loading", () => {
    beforeEach(() => {
      (useUser as any).mockReturnValue({
        user: undefined,
        error: undefined,
      });
    });
    it("should return 0", () => {
      const AeroCoinsComponent = render(<AeroCoins />);

      const CoinsText = AeroCoinsComponent.getByText("0");

      expect(CoinsText).toBeVisible();
    });
  });
  describe("when user context returns error", () => {
    beforeEach(() => {
      (useUser as any).mockReturnValue({
        user: undefined,
        error: {
          code: "1",
          message: "A problem has occurred",
        },
      });
    });
    it("should return 0", () => {
      const AeroCoinsComponent = render(<AeroCoins />);

      const CoinsText = AeroCoinsComponent.getByText("0");

      expect(CoinsText).toBeVisible();
    });
  });
});
