import {fireEvent} from "@testing-library/react";
import {act} from "react-dom/test-utils";

import ToggleGroup from "../components/layout/ToggleGroup";
import {SORT_TYPES} from "../constants";
import {Colors} from "../styles/Theme";

import {render} from "./test-utils";

describe(" [SORT / ToggleGroup] ", () => {
  beforeAll(() => {
    global.window.matchMedia = jest.fn().mockReturnValue({
      matches: true,
      addListener: () => {},
      removeListener: () => {},
    });
  });
  describe("when button is clicked", () => {
    it("should call callback with the corresponding button index", async () => {
      const mockCallback = jest.fn();
      const sort = render(
        <ToggleGroup callback={mockCallback} gap="12px" labels={SORT_TYPES} padding="8px 24px" />,
      );

      const mostRecentButton = sort.getByRole("button", {name: /Most/i});
      const lowestButton = sort.getByRole("button", {name: /Lowest/i});
      const highestButton = sort.getByRole("button", {name: /Highest/i});

      expect(lowestButton).toHaveStyle(`background: ${Colors.Neutral[200]}`);

      await act(async () => {
        fireEvent.click(lowestButton);
      });
      expect(mockCallback).toHaveBeenCalledWith(1);
      expect(lowestButton).not.toHaveStyle(`background: ${Colors.Neutral[200]}`);
      expect(mostRecentButton).toHaveStyle(`background: ${Colors.Neutral[200]}`);

      await act(async () => {
        fireEvent.click(highestButton);
        fireEvent.click(mostRecentButton);
      });
      expect(mockCallback).toHaveBeenCalledTimes(3);
    });
  });
});
