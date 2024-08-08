import { useSession } from "~/context/Session";

import { useNavigate } from "react-router-dom";

export function useLoginMutation({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { setAccessToken } = useSession();
  const navigate = useNavigate();
  if (email === "zetflix@admin.com" && password === "zetflix@23") {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjpmYWxzZSwiaWF0IjoxNTE2MjM5MDIyfQ.3ASYbfgOEFCRmR9mcoIeg4XiUst2MWUcMtVGFaMBdlk"
    );
    setAccessToken(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjpmYWxzZSwiaWF0IjoxNTE2MjM5MDIyfQ.3ASYbfgOEFCRmR9mcoIeg4XiUst2MWUcMtVGFaMBdlk"
    );
    return navigate("/home");
  }
  return null;
}
