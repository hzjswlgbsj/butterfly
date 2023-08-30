import React, { useEffect } from 'react';
import { File } from '../../../../types/home';
import { FileItemWrapper, FileItemCheckbox, FileItemTitle, FileItemUser, FileItemDate, FileItemDraggable, FileItemIconWrapper, FileItemIcon, FileItemName } from './style';

interface ClientProps {
  file: File;
}

const FileItem: React.FC<ClientProps> = ({ file }) => {
  useEffect(() => {

  }, []);


  return (
    <FileItemWrapper>
      <FileItemCheckbox />

      <FileItemTitle>
        <FileItemDraggable>
          <FileItemIconWrapper>
            <FileItemIcon type={file.type} />
          </FileItemIconWrapper>
          <FileItemName>{file.name}</FileItemName>
        </FileItemDraggable>
      </FileItemTitle>

      <FileItemUser>Sixty</FileItemUser>

      <FileItemDate>{file.updated_at}</FileItemDate>
    </FileItemWrapper>
  );
}

export default FileItem;