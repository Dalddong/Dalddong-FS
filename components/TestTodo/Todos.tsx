"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import "dotenv/config";

export interface Todo {
  todos: string;
}

export type todoString = string;

const Todos = () => {
  const fetchTodos = async () => {
    const { data } = await axios.get("/api/todos");
    console.log(data.data);
    return data.data as any;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["userTodos"],
    queryFn: fetchTodos,
  });

  if (isLoading) return <>loading.</>;
  if (isError) return <>에러 다시해줘.</>;

  return (
    <>
      <div className="flex flex-col gap-2">ㅇㅇ</div>
    </>
  );
};

export default Todos;
