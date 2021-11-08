import { screen, render, fireEvent } from "@testing-library/react";
import App from "../App";

describe("Given the component form", () => {
  describe("When input is filled and form submited", () => {
    test("A new film appears with the text filled", () => {
      render(<App />);
      fireEvent.change(screen.getByLabelText("Name:"), {
        target: { value: "lion" },
      });
      fireEvent.change(screen.getByLabelText("Age:"), {
        target: { value: "2020" },
      });
      fireEvent.click(document.querySelector("button"));
      expect(screen.getByText("lion")).toBeInTheDocument();
      expect(screen.getByText("2020")).toBeInTheDocument();
    });
  });
});
