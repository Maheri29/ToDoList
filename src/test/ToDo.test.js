import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ToDoList from "./ToDoList";


describe("ToDoList component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<ToDoList />);
    expect(asFragment()).toMatchSnapshot();
  });
});

