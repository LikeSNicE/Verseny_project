import Api from "../api/api";

export default class FetchService {
  static async login(value) {
    return await Api.post("login", value);
  }
  static async logout(){
    return await Api.delete('logout')
  }
}
