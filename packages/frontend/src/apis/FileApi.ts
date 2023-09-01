import { GetFileListReq, File, GetFileListRes } from "../types/home";
import { request } from "./request";

class FileApi {
  /**
   * 获取文件列表
   * @param data GetFileListReq
   * @returns File[]
   */
  public getFileList(data: GetFileListReq): Promise<GetFileListRes> {
    return request<GetFileListRes>({
      url: "file/list",
      method: "post",
      data,
    });
  }

  /**
   * 根据guid获取文件的详情信息
   * @param guid 文件唯一标识
   * @returns File（目前需求简单，这里的详情跟列表页中的file信息一致，后面复杂了再增加DetailInfo）
   */
  public getFileDetailByGuid(guid: string): Promise<File> {
    return request<File>({
      url: "file/detail",
      method: "post",
      data: { guid },
    });
  }
}

export default new FileApi();
