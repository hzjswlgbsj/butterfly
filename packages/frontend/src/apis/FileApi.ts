import { GetFileListReq, File } from "../types/home";
import { request } from "./request";

export default class {
  // 获取文件列表
  public getFileList(data: GetFileListReq): Promise<File[]> {
    return request<File[]>({
      url: "file/list",
      method: "post",
      data,
    });
  }
}
