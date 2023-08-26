import React, { useEffect, useState } from "react";
import { HomeWrapper } from "./style";
import { File } from '../../types/home';

const Document: React.FC<any> = () => {
  const [files, setFilles] = useState<File[]>([])

  useEffect(() => {

  }, [])

  return (
    <HomeWrapper>
      dddd
    </HomeWrapper>
  );
};

export default Document;
