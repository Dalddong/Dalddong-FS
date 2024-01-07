import axiosInstance from "@/components/Axiosinstance";
import { queryKeys } from "@/components/Providers/querykey";
import { useQuery, useQueryClient } from "@tanstack/react-query";

// 스케쥴 상세조회
async function getSchedule() {
  const { data } = await axiosInstance.get("/schedule");
  return data;
}

export function useSchedule() {
  const fallback: any = [];
  // @ts-ignore
  const { data = fallback } = useQuery([queryKeys.schedule], getSchedule);
  return data;
}
