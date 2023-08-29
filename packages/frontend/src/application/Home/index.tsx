import React, { useEffect, useState } from "react";
import { HomeWrapper } from "./style";
import { File } from '../../types/home';
import FileApi from '../../apis/FileApi';
import FileItem from './components/FileItem';

const Document: React.FC<any> = () => {
  const [files, setFilles] = useState<File[]>([])

  const fetchFiles = async () => {
    try {
      const { items } = await FileApi.getFileList({})
      setFilles(items)
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    fetchFiles()
  }, [])

  return (
    <HomeWrapper>
      {
        files.map((file: File) => {
          return (
            <div key={file.id}>
              <FileItem file={file} />
            </div>
          )
        })
      }
    </HomeWrapper>
  );
};

export default Document;
