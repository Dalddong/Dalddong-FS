"use client";
import Todos from "@/components/TestTodo/Todos";
import HomeContainer from "@/containers/home";

export default function Home() {
  return (
    <>
      <Todos />
      <HomeContainer />
    </>
  );
}
