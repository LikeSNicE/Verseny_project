import { makeAutoObservable } from "mobx";
import FetchService from "../services/fetchService";

export default class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  // state

  isAuth = false;
  isLoading = false;
  user = {};

  //actions
  setUser(user) {
    this.user = user;
  }

  setAuth(isAuth) {
    this.isAuth = isAuth;
  }

  async login(formData) {
    this.isLoading = true;
    try {
      const response = await FetchService.login(formData);
      localStorage.setItem("token", response.data.data.access_token);
      this.setAuth(true);
      this.setUser(response.data.data.user);
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
    }
  }

  async logout(){
    this.isLoading = true
    try{
      await FetchService.logout();
      this.setUser({})
    }catch(e){
      console.log(e)
    }finally{
      this.isLoading = false
    }
  }
}
