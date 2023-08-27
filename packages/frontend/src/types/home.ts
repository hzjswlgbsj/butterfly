export interface File {
  id: number;
  guid: string;
  name: string;
  content: string;
}

export interface GetFileListReq {
  id?: number;
}
export interface GetFileListRes {
  items: File[];
  total: number;
}
