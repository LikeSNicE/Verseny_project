import { makeAutoObservable } from "mobx";
import ConcursService from "../services/concursService";

export default class ContestStore {
  constructor() {
    makeAutoObservable(this);
  }

  // state

  categories = [];

  typesOfContest = []

  // action

  setCategories(category){
     this.categories = category;
  }

  setTypeContest(typesContest){
    this.typesOfContest = typesContest;
    console.log(this.typesOfContest)
  }

  //async action

  async GetCategoriesAndTypes(){
    const response = await ConcursService.GetCategoriesAndTypes();
    this.setCategories(response.data.categories);
    this.setTypeContest(response.data.types);
  }

  async AddContest(data) {
    
  }
}