import React from "react";
import { Head, Title } from "./style";
import { File } from '../../../../types/home';

interface TopbarProps {
  detail: File | undefined;
}

const Topbar: React.FC<TopbarProps> = ({ detail }) => {
  if (!detail) {
    return <div></div>
  }

  return (
    <Title>
      <Head>{detail.name}-{detail.guid}</Head>
      <div style={{ display: "flex", marginTop: 10, marginBottom: 10 }}>
        <div>{detail.author}</div>
      </div>
    </Title>
  );
};

export default Topbar;

