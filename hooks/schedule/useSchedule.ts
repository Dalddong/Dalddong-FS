import axiosInstance from "@/components/Axiosinstance";
import { queryKeys } from "@/components/Providers/querykey";
import { useQuery, useQueryClient } from "@tanstack/react-query";

// 스케쥴 상세조회
async function getSchedule() {
  const { data } = await axiosInstance.get("/api/todos");
  return data;
}

export function useSchedule() {
  const fallback: any = [];

  const { data = fallback } = useQuery({
    queryKey: [queryKeys.schedule],
    queryFn: getSchedule,
  });

  return data;
}
