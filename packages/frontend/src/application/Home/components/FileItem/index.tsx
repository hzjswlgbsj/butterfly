import React, { useEffect } from 'react';
import { File } from '../../../../types/home';
import { Instance } from './style';

interface ClientProps {
  file: File;
}

const FileItem: React.FC<ClientProps> = ({ file }) => {
  useEffect(() => {

  }, []);


  return (
    <Instance>
      <div>{file.name}</div>
    </Instance>
  );
}

export default FileItem;