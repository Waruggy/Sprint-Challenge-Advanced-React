import { render } from "@testing-library/react";
import React from "react";
import Players from "./Players";

describe("<Players />", () => {
  it("renders without crashing", () => {
    render(<Players />);
  });
});