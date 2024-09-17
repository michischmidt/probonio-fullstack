import { useQuery } from "@tanstack/react-query";
import httpClient from "../util/axios";

export const useGetUsers = (enabled: boolean) => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async (): Promise<any> => {
      const response = await httpClient.get("http://localhost:3001/users");
      return response.data;
    },
    enabled,
  });
};
