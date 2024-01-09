//@ts-nocheck

import { queryKeys } from "@/components/Providers/querykey";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

async function postLogin(name, password) {
  const { data } = await axios.post("/api/login", {
    name,
    password,
  });
  return data;
}

export function usePostLogin(name, password) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => postLogin(name, password),
    onSuccess: (responseData) => {
      queryClient.invalidateQueries([queryKeys.user]);
      console.log(responseData, "resData in rquery");
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return mutate;
}
