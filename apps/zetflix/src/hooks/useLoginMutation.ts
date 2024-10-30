import { useSession } from "~/context/Session";
import { useNavigate } from "react-router-dom";

interface AuthFields {
  email: string;
  password: string;
}

export function useLoginMutation() {
  const { setAccessToken } = useSession();
  const navigate = useNavigate();
  let isLoading = false;

  const mutate = ({ email, password }: AuthFields) => {
    if (email === "zetflix@admin.com" && password === "zetflix@23") {
      localStorage.setItem(
        "token",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjpmYWxzZSwiaWF0IjoxNTE2MjM5MDIyfQ.3ASYbfgOEFCRmR9mcoIeg4XiUst2MWUcMtVGFaMBdlk"
      );
      setAccessToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjpmYWxzZSwiaWF0IjoxNTE2MjM5MDIyfQ.3ASYbfgOEFCRmR9mcoIeg4XiUst2MWUcMtVGFaMBdlk"
      );
      navigate("/");
      return true;
    } else {
      return null;
    }
  };
  return { mutate, isLoading };
}
