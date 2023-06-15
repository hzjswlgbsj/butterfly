import React from "react";
import { Button, Head, Title } from "./style";

interface TopbarProps {
  name: string;
  roomId: string;
}

const Topbar: React.FC<TopbarProps> = ({ roomId, name }) => {
  return (
    <Title>
      <Head>文章唯一标识: {roomId}</Head>
      <div style={{ display: "flex", marginTop: 10, marginBottom: 10 }}>
        <div>{name}</div>
      </div>
    </Title>
  );
};

export default Topbar;

