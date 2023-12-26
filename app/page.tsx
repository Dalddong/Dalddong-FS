"use client";
import Todos from "@/components/TestTodo/Todos";
import HomeContainer from "@/containers/home";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function Home() {
  return (
    <>
      <Button width="250px" height="60px">
        dfa
      </Button>
      <Button width="250px" height="60px">
        안녕
      </Button>
      <Input width="250px" height="60px"></Input>
      <Button width="250px" height="60px">
        안녕
      </Button>
      <h1 className="text-dd-green">dd</h1>

      <div className="animate-wiggle">돌아</div>
      <div className="animate-fadesin">dd?</div>
      <HomeContainer />
      <Todos />
    </>
  );
}
