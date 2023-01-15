import api from "@/libs/Axios";
import { SignupDTO } from "@/types/signup";

export function signup(data: SignupDTO) {
  return api.post("/signup", data);
}
