import React from "react";
import { Dropdown, DropdownItem } from '../../ui';
import ToolbarInsertLabel from "../ToolbarInsertLabel";
import { FORMAT_TYPE_DIVIDER, ToolbarMenuItem } from "../../consts";
import { MenuItem } from "../../ui/DropdownItem";

interface ToolbarInsertProps {

}

const ToolbarInsert: React.FC<ToolbarInsertProps> = () => {
  return (
    <Dropdown renderLabel={ToolbarInsertLabel()} onClick={() => console.log("点击")}>
      {
        ToolbarMenuItem.map((item: MenuItem) => {
          if (item.value === FORMAT_TYPE_DIVIDER) {

          } else {
            return (
              <DropdownItem
                value={item.value}
                label={item.label}
                icon={item.icon}
                description={item.description}
              />
            )
          }

        })
      }
      {/* <DropdownItem description="这里是撤销的描述" label="Redo" />
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
      </Dropdown> */}
    </Dropdown>

  );
};

export default ToolbarInsert;

