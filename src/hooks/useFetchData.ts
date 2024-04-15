/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from "swr";

export default function useFetchData() {
  const {
    data,
    isLoading,
    error,
  }: { data: any; isLoading: unknown; error: unknown } = useSWR(
    "https://jsonplaceholder.typicode.com/comments",
  );

  return { data, isLoading, error };
}
