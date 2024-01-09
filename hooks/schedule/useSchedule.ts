import axiosInstance from "@/components/Axiosinstance";
import { queryKeys } from "@/components/Providers/querykey";
import { useQuery, useQueryClient } from "@tanstack/react-query";

// 스케쥴 상세조회
async function getSchedule(id: string) {
  const { data } = await axiosInstance.get(`/api/schedule/${id}`);
  return data;
}

export function useSchedule(id: string) {
  const fallback: any = [];

  const { data = fallback, isLoading } = useQuery({
    queryKey: [queryKeys.schedule],
    queryFn: () => getSchedule(id),
  });

  return { data, isLoading };
}
