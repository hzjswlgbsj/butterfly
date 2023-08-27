import React, { useEffect, useState } from "react";
import { HomeWrapper } from "./style";
import { File } from '../../types/home';
import FileApi from '../../apis/FileApi';

const Document: React.FC<any> = () => {
  const [files, setFilles] = useState<File[]>([])

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await FileApi.getFileList({})
        console.log(1111111111, res)
      } catch (error) {
        console.log(error)
      }
    }

    fetchFiles()
  }, [])

  return (
    <HomeWrapper>
      dddd
    </HomeWrapper>
  );
};

export default Document;
