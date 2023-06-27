import React from "react";
import action from '../../core/action';
import { ToolbarWrapper } from "./style";
import { CustomEditor } from "packages/frontend/src/types";
import { ActionElement } from "../../types";


interface ToolbarProps {
  editor: CustomEditor
}

const Toolbar: React.FC<ToolbarProps> = ({ editor }) => {
  const actions: ActionElement[] = action.get()

  return (
    <ToolbarWrapper>
      {actions.map((item: ActionElement) => (
        <div key={item.type}>
          {item.icon()}
        </div>
      ))}
    </ToolbarWrapper>

  );
};

export default Toolbar;

