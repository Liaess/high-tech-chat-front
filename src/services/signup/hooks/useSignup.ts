import { signup } from "@/services/signup";
import { SignupDTO } from "@/types/signup";
import { useMutation } from "@tanstack/react-query";

export function useSignup() {
  const fetchSignup = async (data: SignupDTO) => {
    return await signup(data);
  };

  return useMutation(fetchSignup);
}
