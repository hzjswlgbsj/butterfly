export interface File {
  id: number;
  guid: string;
  name: string;
  content: string;
  created_at: string;
  deleted_at: string;
  type: string;
  updated_at: string;
}

export interface GetFileListReq {
  id?: number;
}
export interface GetFileListRes {
  items: File[];
  total: number;
}
