import React from "react";
import { Dropdown, DropdownItem, Tooltip } from '../../ui';
import { IconContainer, IconActive } from "../ActionButton/style";

interface ToolbarInsertProps {

}
const Button: React.FC<{}> = ({ }) => {
  return (
    <IconContainer
      onMouseDown={(event: React.MouseEvent) => {
        event.preventDefault();
      }}
    >
      <IconActive active={false} disabled={false}>
        <div style={{ display: 'flex', alignItems: 'center', height: '24px', padding: '2px 8px' }}>
          <div id='toolbar-insert-icon'>
            插入
          </div>
        </div>

      </IconActive>
    </IconContainer>
  )
};

const renderLabel = () => {
  return <Tooltip floatingElement='图表/表格等' referenceElement={Button({})} placement='bottom' />;
};

const ToolbarInsert: React.FC<ToolbarInsertProps> = () => {
  return (
    <Dropdown renderLabel={renderLabel()}>
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

