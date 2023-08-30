import { request } from "./request";

class RoomApi {
  // 获取文件列表
  public entry(guid: string): Promise<string> {
    return request<string>({
      url: "room/entry",
      method: "post",
      data: { roomId: guid },
    });
  }
}

export default new RoomApi();
