import React from "react";
import { Tooltip } from '../../ui';
import { IconContainer, IconActive } from "../ActionButton/style";
import { InsertLabelWrapper, SelectedIconWrapper, SelectedLabel, SelectedLabelWrapper } from "./style";
interface SelectProps {
  label?: string;
  labelWidth?: number;
}
const Button: React.FC<SelectProps> = ({ label, labelWidth }) => {
  return (
    <IconContainer
      onMouseDown={(event: React.MouseEvent) => {
        event.preventDefault();
      }}
    >
      <IconActive active={false} disabled={false}>
        <SelectedLabelWrapper width={`${labelWidth}px`} >
          <SelectedLabel>{label}</SelectedLabel>
          <SelectedIconWrapper>
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2283" width="12" height="12"><path d="M232 392L512 672l280-280z" fill="#464d5a" p-id="2284"></path></svg>
          </SelectedIconWrapper>
        </SelectedLabelWrapper>
      </IconActive>
    </IconContainer>

  )
};

const ToolbarInsertLabel = () => {
  return <Tooltip floatingElement='图表/表格等' referenceElement={Button({ label: '插入' })} placement='bottom' />;
};

export default ToolbarInsertLabel;

