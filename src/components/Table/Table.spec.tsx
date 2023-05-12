import { render, screen } from "@testing-library/react";
import { Table } from ".";

describe("Table - button test", () => {
  const data = [
    {
      nome: "nomeA",
      sobrenome: "sobrenomeA",
      propTeste: "propTesteA",
    },
    {
      nome: "nomeB",
      sobrenome: "sobrenomeB",
      propTeste: "propTesteB",
    },
  ];

  const dataKeys = ["nome", "sobrenome", "propTeste"];

  const title = "Clientes cadastrados";

  it("should dont render the component", () => {
    render(<Table data={[]} dataKeys={[]} />);

    expect(screen.queryByTestId("table")).not.toBeInTheDocument();
  });

  it("should render component correctly", () => {
    render(<Table data={data} dataKeys={dataKeys} />);

    expect(screen.getByTestId("table")).toBeInTheDocument();
  });

  it("should render title table", () => {
    render(<Table data={data} dataKeys={dataKeys} />);

    expect(screen.getByTestId("table")).toBeInTheDocument();

    screen.logTestingPlaygroundURL();
  });
});
