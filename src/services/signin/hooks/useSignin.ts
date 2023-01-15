import { signin } from "@/services/signin";
import { SigninDTO } from "@/types/signin";
import { useMutation } from "@tanstack/react-query";

export function useSignin() {
  const fetchSignin = async (data: SigninDTO) => {
    return await signin(data);
  };

  return useMutation(fetchSignin);
}
