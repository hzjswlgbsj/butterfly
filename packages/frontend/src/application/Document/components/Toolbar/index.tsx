import React from "react";
import {
  useSlate,
} from "slate-react";
import { ToolbarWrapper } from "./style";
import { Icon, IconButton } from '../../../../baseUI/baseStyled';
import { isBlockActive, toggleBlock } from "../../plugins/block";
import { insertLink, isLinkActive, unwrapLink } from "../../plugins/link";
import { isMarkActive, toggleMark } from "../../plugins/mark";
import { CustomEditor } from '../../../../types';

interface ToolbarProps {
  editor: CustomEditor
}

interface OprationButton {
  editor: CustomEditor;
  format: string;
  icon: string;
}
interface LinkButtonProps {
  editor: CustomEditor;
}

const BlockButton: React.FC<OprationButton> = ({ format, icon, editor }) => {
  return (
    <IconButton
      active={isBlockActive(editor, format)}
      onMouseDown={(event: React.MouseEvent) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <Icon className="material-icons">{icon}</Icon>
    </IconButton>
  );
};

const MarkButton: React.FC<OprationButton> = ({ format, icon, editor }) => {
  return (
    <IconButton
      active={isMarkActive(editor, format)}
      onMouseDown={(event: React.MouseEvent) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon className="material-icons">{icon}</Icon>
    </IconButton>
  );
};

const LinkButton: React.FC<LinkButtonProps> = ({ editor }) => {
  const isActive = isLinkActive(editor);

  return (
    <IconButton
      active={isActive}
      onMouseDown={(event: React.MouseEvent) => {
        event.preventDefault();

        if (isActive) return unwrapLink(editor);

        const url = window.prompt("Enter the URL of the link:");

        url && insertLink(editor, url);
      }}
    >
      <Icon className="material-icons">link</Icon>
    </IconButton>
  );
};

const Toolbar: React.FC<ToolbarProps> = ({ editor }) => {
  return (
    <ToolbarWrapper>
      <MarkButton editor={editor} format="bold" icon="format_bold" />
      <MarkButton editor={editor} format="italic" icon="format_italic" />
      <MarkButton editor={editor} format="underline" icon="format_underlined" />
      <MarkButton editor={editor} format="code" icon="code" />

      <BlockButton editor={editor} format="heading-one" icon="looks_one" />
      <BlockButton editor={editor} format="heading-two" icon="looks_two" />
      <BlockButton editor={editor} format="block-quote" icon="format_quote" />

      <BlockButton editor={editor} format="numbered-list" icon="format_list_numbered" />
      <BlockButton editor={editor} format="bulleted-list" icon="format_list_bulleted" />

      <LinkButton editor={editor} />
    </ToolbarWrapper>

  );
};

export default Toolbar;

