import api from "../libs/axios";

export default class User {
  static signUp(fetchData: any) {
    //todo: type this
    return api.post("/users", fetchData);
  }

  static signIn(fetchData: any) {
    //todo: type this
    return api.post("/users/login", fetchData);
  }
}
