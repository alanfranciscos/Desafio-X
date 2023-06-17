import { render, screen } from "@testing-library/react";
import { Layout } from ".";

describe("Layout test", () => {
  it("should render the Layout correctly", () => {
    render(<Layout children={null} />);
    expect(screen.getByTestId("layout")).toBeInTheDocument();
  });

  it("should render the header component correctly", () => {
    render(<Layout children={null} />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("should render the content container correctly", () => {
    render(<Layout children={null} />);
    expect(screen.getByTestId("layout-content")).toBeInTheDocument();
  });

  it("should render the sidebar correctly", () => {
    render(<Layout children={null} />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  it("should render the layout content section correctly", () => {
    render(<Layout children={null} />);
    expect(screen.getByTestId("layout-content-content")).toBeInTheDocument();
  });
});
