import { render } from "@testing-library/react";
import React from "react";
import PlayerCard from "./PlayerCard";

describe("<PlayerCard />", () => {
  it("renders without crashing", () => {
    render(<PlayerCard />);
  });
});

describe("<PlayerCard />", () => {
  const container = render(<PlayerCard />);
  console.log(container);
  container.getByText(/country:/i);
  container.getByText(/search ranking:/i);
});