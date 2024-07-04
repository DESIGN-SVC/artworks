import { useMutation } from "@tanstack/react-query";

import { useSession } from "./context/Session/useSession";

type Avatar = {
  avatar: FormData;
};

export function useAvatarMutation() {
  const { accessToken } = useSession();
  const uploadPhoto = (body: FormData) =>
    fetch(`${import.meta.env.PUBLIC_API_URL}/users/avatar`, {
      method: "PATCH",
      body,
      headers: {
        Authorization: `${accessToken}`,
      },
    });

  const mutation = useMutation({
    mutationFn: async ({ avatar }: Avatar) =>
      uploadPhoto(avatar).then((response) => response.json()),
  });

  return mutation;
}
