import { useMutation } from "@tanstack/react-query";
import { LoginFields } from "~/forms/Account/login";
import { api } from "~/services";
import { useSession } from "./context/Session/useSession";

interface ApiError {
  code: number;
  error: {
    code: string;
    message: string;
  };
}

export function useLoginMutation() {
  const { setAccessToken, setUser } = useSession();

  const mutation = useMutation({
    mutationFn: async ({ email, password }: LoginFields) => {
      const { data, error, response } = await api.POST("/users/login", {
        body: {
          email,
          password,
        },
      });

      if (data) return data;

      throw { error, code: response.status };
    },
    onSuccess: (data) => {
      setAccessToken(data.accessToken);
      setUser(data.user);
    },
    onError: (error: ApiError) => {
      console.log(error);
    },
  });

  return mutation;
}
