import { customAlphabet, nanoid } from 'nanoid';
import React, { useState } from "react";
import Client from "./components/Client";
import { DocumentWrapper } from "./style";
import { useParams } from 'react-router-dom';

interface User {
  roomId: string;
  name: string;
}

const Document: React.FC<any> = () => {
  const params = useParams()
  const createUser = (): User => ({
    roomId: params.roomId || '',
    name: customAlphabet('abcdefghijklmnopqrstuvwxyz', 6)(),
  });
  const user = createUser()

  return (
    <DocumentWrapper>
      <Client
        {...user}
        key={user.roomId}
      />
    </DocumentWrapper>
  );
};

export default Document;
