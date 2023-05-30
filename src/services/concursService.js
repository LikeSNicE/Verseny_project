import Api from "../api/api";

export default class ConcursService{
  static async AddContest(data){
    return await Api.post('contests',data)
  }
  
  static async GetCategoriesAndTypes(){
    return await Api.get('category')
  }
}