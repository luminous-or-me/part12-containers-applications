import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

describe("<Todo />", () => {
  test("renders task text", () => {
    const todo = {
      text: "Write unit tests for the frontend",
      done: false,
    };

    render(
      <Todo todo={todo} onClickComplete={() => {}} onClickDelete={() => {}} />
    );

    const element = screen.getByText("Write unit tests for the frontend");
    expect(element).toBeDefined();
  });

  test("shows appropriate buttons when todo not done", () => {
    const notDoneTodo = {
      text: "Write unit tests for the frontend",
      done: false,
    };

    render(
      <Todo
        todo={notDoneTodo}
        onClickComplete={() => {}}
        onClickDelete={() => {}}
      />
    );

    expect(screen.getByText("Set as done")).toBeDefined();
    expect(screen.getByText("Delete")).toBeDefined();
  });

  test("shows appropriate buttons when todo done", () => {
    const notDoneTodo = {
      text: "Write unit tests for the frontend",
      done: true,
    };

    render(
      <Todo
        todo={notDoneTodo}
        onClickComplete={() => {}}
        onClickDelete={() => {}}
      />
    );

    expect(screen.queryByText("Set as done")).toBeNull();
    expect(screen.getByText("Delete")).toBeDefined();
  });
});
