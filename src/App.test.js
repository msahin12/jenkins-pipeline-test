import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

it("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

it("adds 5 * 2 to equal 10", () => {
  expect(multiply(5, 2)).toBe(10);
});
