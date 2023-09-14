import React, { useEffect, useState } from "react";
import { ToolbarWrapper } from "./style";
import { Log } from "@butterfly/pupa";
import { Dropdown, DropdownItem } from '../../ui';

interface ToolbarInsertProps {

}

const ToolbarInsert: React.FC<ToolbarInsertProps> = () => {

  function renderLabel() {
    return <div>插入</div>;
  };

  return (
    <ToolbarWrapper>
      <Dropdown label="Edit" renderLabel={renderLabel()}>
        <DropdownItem label="Undo" onClick={() => console.log("Undo")} />
        <DropdownItem label="Redo" disabled />
        <DropdownItem label="Cut" >Cut</DropdownItem>
        <Dropdown label="Copy as">
          <DropdownItem label="Text" />
          <DropdownItem label="Video" />
          <Dropdown label="Image">
            <DropdownItem label=".png" />
            <DropdownItem label=".jpg" />
            <DropdownItem label=".svg" />
            <DropdownItem label=".gif" />
          </Dropdown>
          <DropdownItem label="Audio" />
        </Dropdown>
        <Dropdown label="Share">
          <DropdownItem label="Mail" />
          <DropdownItem label="Instagram" />
        </Dropdown>
      </Dropdown>
    </ToolbarWrapper>

  );
};

export default ToolbarInsert;

