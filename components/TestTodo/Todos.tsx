"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Todo {
  todos: string;
}

export type todoString = string;

const Todos = () => {
  const fetchTodos = async () => {
    const { data } = await axios.get("/api/todos/fetch");
    console.log(data.data.todos);
    return data.data.todos as todoString;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["userTodos"],
    queryFn: fetchTodos,
  });

  if (isLoading) return <>loading.</>;
  if (isError) return <>에러 다시해줘.</>;

  return (
    <>
      <div className="flex flex-col gap-2">{data}</div>
    </>
  );
};

export default Todos;
