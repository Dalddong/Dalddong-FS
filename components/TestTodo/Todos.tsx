"use client";

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../Axiosinstance";
import axios from "axios";
import "dotenv/config";

export interface Todo {
  todos: string;
}

export type todoString = string;

const Todos = () => {
  const fetchTodos = async () => {
    console.log("actoken값", localStorage.getItem("acToken"));
    const { data } = await axiosInstance.get(
      "/api/user/6597a102d7a592ef40f9e415"
    );
    console.log(data.data);
    return data as any;
  };
  const {
    data: todoData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["userTodos"],
    queryFn: fetchTodos,
  });

  console.log(todoData, "쿼리데이터");
  if (isLoading) return <>loading.</>;
  if (isError) return <>에러 다시해줘.</>;

  return (
    <>
      <div className="flex flex-col gap-2">ㅇㅇ</div>
    </>
  );
};

export default Todos;
