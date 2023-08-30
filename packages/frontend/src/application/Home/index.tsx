import React, { useEffect, useState } from "react";
import { FileItemWrapper, HomeWrapper } from "./style";
import { File } from '../../types/home';
import FileApi from '../../apis/FileApi';
import FileItem from './components/FileItem';
import { useNavigate } from "react-router-dom";

const Document: React.FC<any> = () => {
  const [files, setFilles] = useState<File[]>([])
  const navigate = useNavigate()

  const fetchFiles = async () => {
    try {
      const { items } = await FileApi.getFileList({})
      setFilles(items)
    } catch (error) {
      console.log(error)
    }
  }
  const jumpFileDetail = (guid: string) => {
    navigate(`doc/${guid}`)
  }

  useEffect(() => {
    fetchFiles()
  }, [])

  return (
    <HomeWrapper>
      <FileItemWrapper>
        <ul>
          {
            files.map((file: File) => {
              return (
                <div key={file.id} onClick={() => jumpFileDetail(file.guid)}>
                  <FileItem file={file} />
                </div>
              )
            })
          }
        </ul>
      </FileItemWrapper>

    </HomeWrapper>
  );
};

export default Document;
