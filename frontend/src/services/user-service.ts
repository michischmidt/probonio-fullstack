import { useQuery } from "@tanstack/react-query";
import httpClient from "../util/axios";
import { User } from "../users/user-types";
import { toast } from "react-toastify";

export const useGetUsers = (enabled: boolean) => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async (): Promise<User[] | null> => {
      try {
        const response = await httpClient.get("users");
        return response.data;
      } catch (error: unknown) {
        console.error(error);
        toast.error("There was an error finding all users.");
        return null;
      }
    },
    enabled,
  });
};
