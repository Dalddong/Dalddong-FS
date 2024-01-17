//@ts-nocheck
import axiosInstance from "@/components/Axiosinstance/axiosInstance";
import { queryKeys } from "@/components/Providers/querykey";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

async function postTodo() {
  const { data } = await axiosInstance.post("/api/todos", {
    title: "리테스트",
    description: "꾸에엑",
  });
  return data;
}

export function usePostTodo() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: postTodo,
    onSuccess: (responseData) => {
      queryClient.invalidateQueries([queryKeys.Todo]);
      router.push(`/Todo/${responseData.title}`);
    },
  });

  return mutate;
}
