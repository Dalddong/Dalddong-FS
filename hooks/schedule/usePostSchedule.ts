//@ts-nocheck
import axiosInstance from "@/components/Axiosinstance";
import { queryKeys } from "@/components/Providers/querykey";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

async function postSchedule(
  nomineeDays,
  nomineePlayTime,
  scheduleName,
  schedulePlace
) {
  const { data } = await axiosInstance.post("/api/schedule", {
    scheduleName,
    schedulePlace,
    nomineeDays,
    nomineePlayTime,
  });
  return data;
}

export function usePostSchedule(
  nomineeDays,
  nomineePlayTime,
  scheduleName,
  schedulePlace
) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () =>
      postSchedule(nomineeDays, nomineePlayTime, scheduleName, schedulePlace),
    onSuccess: (responseData) => {
      queryClient.invalidateQueries([queryKeys.schedule]);
      router.push(`/schedule/${responseData._id}`);
    },
    onError: (err) => {
      console.log(err);
    },
    mutationKey: [queryKeys.schedule],
  });

  return mutate;
}
