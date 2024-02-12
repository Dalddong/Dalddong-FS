//@ts-nocheck
import axiosInstance from "@/components/Axiosinstance/axiosInstance";
import axiosSessionInstance from "@/components/Axiosinstance/axiosSessionInstance";
import { queryKeys } from "@/components/Providers/querykey";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

// 스케쥴 상세조회
async function getSchedule(id: string) {
  const { data } = await axiosInstance.get(`/api/schedule/${id}`);
  return data;
}

export function useGetSchedule(id: string) {
  const fallback: [] = [];

  const { data = fallback, isLoading } = useQuery({
    queryKey: [queryKeys.schedule],
    queryFn: () => getSchedule(id),
    gcTime: 5 * 60 * 1000,
    staleTime: 1 * 60 * 1000,
    retry: 1,
  });

  return { data, isLoading };
}

async function postSchedule(
  nomineeDays,
  nomineePlayTime,
  scheduleName,
  schedulePlace,
  selectDays
) {
  const { data } = await axiosInstance.post("/api/schedule", {
    scheduleName,
    schedulePlace,
    nomineeDays,
    nomineePlayTime,
    selectDays,
  });
  return data;
}

export function usePostSchedule(
  nomineeDays,
  nomineePlayTime,
  scheduleName,
  schedulePlace,
  selectDays
) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      postSchedule(
        nomineeDays,
        nomineePlayTime,
        scheduleName,
        schedulePlace,
        selectDays
      ),
    onSuccess: (responseData) => {
      router.push(`/schedule/${responseData._id}`);
      queryClient.invalidateQueries([queryKeys.schedule]);
    },
    onError: (err) => {
      console.log(err);
    },
    mutationKey: [queryKeys.schedule],
  });

  return { mutate, isPending };
}

async function patchSchedule(selectDays, sid) {
  const { data } = await axiosSessionInstance.patch(`/api/schedule/${sid}`, {
    selectDays,
  });
  return data;
}

export function usePatchSchedule(selectDays, sid) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => patchSchedule(selectDays, sid),
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.schedule]);
      router.push(`/schedule/${sid}`);
    },
    onError: (err) => {
      console.log(err);
    },
    mutationKey: [queryKeys.schedule],
  });

  return mutate;
}
