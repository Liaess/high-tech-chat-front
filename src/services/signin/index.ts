import api from "@/libs/Axios";
import { SigninDTO } from "@/types/signin";

export function signin(data: SigninDTO) {
  return api.post("/signin", data);
}
