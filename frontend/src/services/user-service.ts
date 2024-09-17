import { useQuery } from "@tanstack/react-query";
import httpClient from "../util/axios";
import { User } from "../users/user-types";

export const useGetUsers = (enabled: boolean) => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async (): Promise<User[]> => {
      const response = await httpClient.get("users");
      return response.data;
    },
    enabled,
  });
};
