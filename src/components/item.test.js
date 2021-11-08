import { fireEvent, render, screen } from "@testing-library/react";
import List from "./list";

describe("Given the component item", () => {
  describe("When list item is deleted", () => {
    test("It should disappear", async () => {
      render(<List />);

      fireEvent.click(screen.getByTestId("delete1"));

      expect(screen.queryByText("La vida de Bryan")).not.toBeInTheDocument();
    });
  });
});
