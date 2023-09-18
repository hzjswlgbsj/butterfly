import React from "react";
import { Dropdown, DropdownItem } from '../../ui';
import ToolbarInsertLabel from "../ToolbarInsertLabel";

interface ToolbarInsertProps {

}



const ToolbarInsert: React.FC<ToolbarInsertProps> = () => {
  return (
    <Dropdown renderLabel={ToolbarInsertLabel()}>
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

  );
};

export default ToolbarInsert;

