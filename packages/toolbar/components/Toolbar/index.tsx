import React, { useEffect, useState } from "react";
import { ToolbarWrapper } from "./style";
import { CustomEditor } from "packages/frontend/src/types";
import { ActionElement } from "../../types";
import Command from "../../core/commands/Command";
import Action from "../../core/action";


interface ToolbarProps {
  editor: CustomEditor
}

const Toolbar: React.FC<ToolbarProps> = ({ editor }) => {
  let action: Action;
  const [actions, setActions] = useState<ActionElement[]>([]);

  const handleAction = (command: Command) => {
    command.execute()
  }

  useEffect(() => {
    action = new Action(editor);
    setActions(action.get());
  }, [editor])

  return (
    <ToolbarWrapper>
      {
        actions.map((item: ActionElement) =>
          <div key={item.type} onClick={() => handleAction(item.command)}>
            <item.icon />
          </div>
        )
      }
    </ToolbarWrapper>

  );
};

export default Toolbar;

