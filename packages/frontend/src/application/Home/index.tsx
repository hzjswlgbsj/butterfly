import React, { useEffect, useState } from "react";
import { HomeWrapper } from "./style";
import { File } from '../../types/home';
import FileApi from '../../apis/FileApi';

const Document: React.FC<any> = () => {
  const [files, setFilles] = useState<File[]>([])

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const { items } = await FileApi.getFileList({})
        setFilles(items)
      } catch (error) {
        console.log(error)
      }
    }

    fetchFiles()
  }, [])

  return (
    <HomeWrapper>
      {
        files.map((file: File) => {
          return <div>{file.name}</div>
        })
      }
    </HomeWrapper>
  );
};

export default Document;
