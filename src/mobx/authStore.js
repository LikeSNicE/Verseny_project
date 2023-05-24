import { makeAutoObservable } from "mobx";
import FetchAuthService from "../services/fetchService";

export default class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  // state
  isAuth = false;
  isLoading = false;
  isLoadingButton = false;
  severity = "error";
  messageAlert = "";

  user = {
    avatar: "",
    name: "",
    nickname: "",
    id: "",
    channel_id: "",
    gender: "",
    description: "",
    header: "",
    created_at: "",
    email: "",
  };

  //actions
  setUser(user) {
    this.user = user;
  }

  setAuth(isAuth) {
    this.isAuth = isAuth;
  }

  setMessageAlert(message) {
    this.messageAlert = message;
  }

  // action async

  async login(formData) {
    this.isLoading = true;
    try {
      const response = await FetchAuthService.login(formData);
      localStorage.setItem("token", response.data.data.access_token);
      this.setAuth(true);
      this.setUser(response.data.data.user);
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
    }
  }

  async logout() {
    this.isLoading = true;
    try {
      await FetchAuthService.logout();
      this.setUser({});
      this.isAuth = false;
      localStorage.removeItem("token");
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  async register(formData) {
    const response = await FetchAuthService.signIn(formData);
    localStorage.setItem("token", response.data.data.access_token);
    this.setAuth(true);
    this.setUser(response.data.data.user);
  }

  async refresh() {
    this.isLoading = true;
    try {
      const response = await FetchAuthService.refresh();
      localStorage.setItem("token", response.data.data.access_token);
      this.setAuth(true);
      this.setUser(response.data.data.user);
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
    }
  }

  async forgotPassword(email) {
    this.isLoadingButton = true;
    try {
      const response = await FetchAuthService.forgotPassword(email);
      this.messageAlert = response.data.message;
      this.severity = "success";
    } catch (error) {
      console.log(error);
      this.messageAlert = error.data.message;
      this.severity = "error";
    } finally {
      this.isLoadingButton = false;
    }
  }

  async recognizeUserToToken(token) {
    this.isLoading = true;
    try {
      const response = await FetchAuthService.recognizeUserToToken(token);
      return {
        success: true,
        ...response.data,
      };
    } catch (error) {
      return {
        success: false,
        ...error.response.data,
      };
    } finally {
      this.isLoading = false;
    }
  }

  async resetPassword(data) {
    await FetchAuthService.resetPassword(data);
  }

  // update photo

  async updatePhoto(formdata) {
    return await FetchAuthService.updatePhoto(this.user.id, formdata);
  }
}
