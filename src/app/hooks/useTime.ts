"use client"
import { clockRealTime } from "@libs/helper";
import { useQuery } from "@tanstack/react-query";

export const useTime = () => {
  const data = useQuery({
    queryKey: ["clock"],
    queryFn: () => {
      return clockRealTime();
    },
    refetchInterval: 500,
  });

  return {
    loading: data.isLoading || data.isFetching,
    data: data.data,
  };
};
