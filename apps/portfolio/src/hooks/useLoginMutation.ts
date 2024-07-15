import { useMutation } from "@tanstack/react-query";

import { api } from "~/services";
import { useSession } from "./context/Session/useSession";
import { LoginFields } from "~/pages/Login/LoginForm";
import { useTheme } from "./context/Theme/useTheme";
import { encryptPassword } from "~/utils";

interface ApiError {
  code: number;
  error: {
    code: string;
    message: string;
  };
}

export function useLoginMutation() {
  const { setAccessToken, setUser } = useSession();
  const { setTheme } = useTheme();

  const mutation = useMutation({
    mutationFn: async ({ email, password }: LoginFields) => {
      const { data, error, response } = await api.POST("/users/login", {
        body: {
          email,
          password: encryptPassword(password),
        },
      });

      if (data) return data;

      throw { error, code: response.status };
    },
    onSuccess: (data) => {
      if (!data.accessToken || !data.user) return;
      setAccessToken(data.accessToken as string);
      setUser(data.user);
      setTheme(data.user.theme as "light" | "dark");
    },
    onError: (error: ApiError) => {
      console.error(error);
    },
  });

  return mutation;
}
