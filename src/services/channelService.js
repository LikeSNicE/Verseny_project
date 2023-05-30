import Api from "../api/api";

export default class ChannelService{
  static async updateDataChannel(data,id){
     return await Api.put(`channels/${id}`, data);
  }
}