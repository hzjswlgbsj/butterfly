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
      <Head>Room: {roomId}</Head>
      <div style={{ display: "flex", marginTop: 10, marginBottom: 10 }}>
        <Button type="button" onClick={() => toggleOnline(!isOnline)}>
          Go {isOnline ? "offline" : "online"}
        </Button>
      </div>
    </Title>
  );
};

export default Topbar;

