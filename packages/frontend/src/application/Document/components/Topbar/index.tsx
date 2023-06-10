import React from "react";
import { Button, Head, Instance, Title } from "./style";
import { Icon, IconButton } from '../../../../baseUI/baseStyled';
import { isBlockActive, toggleBlock } from "../../plugins/block";
import { insertLink, isLinkActive, unwrapLink } from "../../plugins/link";
import { isMarkActive, toggleMark } from "../../plugins/mark";
import { CustomEditor } from '../../../../types';

interface TopbarProps {
  isOnline: boolean;
  toggleOnline: (isOnline: boolean) => void;
  roomId: string;
}

const Topbar: React.FC<TopbarProps> = ({ isOnline, toggleOnline, roomId }) => {
  return (
    <Title>
      <Head>文章唯一标识: {roomId}</Head>
      <div style={{ display: "flex", marginTop: 10, marginBottom: 10 }}>
        <div style={{ display: "flex", marginTop: 10, marginBottom: 10, marginRight: 10 }}>{isOnline ? "在线中" : "下线中"}</div>
        <Button type="button" onClick={() => toggleOnline(!isOnline)}>
          {isOnline ? "下线" : "上线"}
        </Button>
      </div>
    </Title>
  );
};

export default Topbar;

