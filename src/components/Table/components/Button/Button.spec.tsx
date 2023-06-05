import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Table - button test", () => {
  it("should render the Button Table correctly", () => {
    render(<Button>test</Button>);

    expect(screen.getByTestId("table-button")).toBeInTheDocument();
  });
});
