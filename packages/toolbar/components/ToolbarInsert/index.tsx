import React, { useEffect, useState } from "react";
import { ToolbarWrapper } from "./style";
import { Log } from "@butterfly/pupa";
import { Dropdown, MenuItem } from '../../ui';

interface ToolbarInsertProps {

}

const ToolbarInsert: React.FC<ToolbarInsertProps> = () => {

  function renderLabel() {
    return <div>插入</div>;
  };

  return (
    <ToolbarWrapper>
      <Dropdown label="Edit" renderLabel={renderLabel()}>
        <MenuItem label="Undo" onClick={() => console.log("Undo")} />
        <MenuItem label="Redo" disabled />
        <MenuItem label="Cut" />
        <Dropdown label="Copy as">
          <MenuItem label="Text" />
          <MenuItem label="Video" />
          <Dropdown label="Image">
            <MenuItem label=".png" />
            <MenuItem label=".jpg" />
            <MenuItem label=".svg" />
            <MenuItem label=".gif" />
          </Dropdown>
          <MenuItem label="Audio" />
        </Dropdown>
        <Dropdown label="Share">
          <MenuItem label="Mail" />
          <MenuItem label="Instagram" />
        </Dropdown>
      </Dropdown>
    </ToolbarWrapper>

  );
};

export default ToolbarInsert;

