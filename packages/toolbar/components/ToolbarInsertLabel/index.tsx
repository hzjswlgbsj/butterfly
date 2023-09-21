import React from "react";
import { Tooltip } from '../../ui';
import { IconContainer, IconActive } from "../ActionButton/style";
import { InsertLabelWrapper, InsertRightIconWrapper, InsertLabel, InsertLeftIconWrapper } from "./style";
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
        <InsertLabelWrapper width={`${labelWidth}px`} >
          <InsertLeftIconWrapper>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="8.375" stroke="#454D5A" stroke-width="1.25"></circle>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3a9 9 0 110 18 9 9 0 010-18zm0 1.25a7.75 7.75 0 100 15.5 7.75 7.75 0 000-15.5zm.61 7.119V8h-1.25v3.369L8 11.37v1.25l3.36-.001V16h1.25v-3.381l3.39.001v-1.25l-3.39-.001z" fill="#454D5A"></path>
            </svg>
          </InsertLeftIconWrapper>
          <InsertLabel>{label}</InsertLabel>
          <InsertRightIconWrapper>
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2283" width="12" height="12"><path d="M232 392L512 672l280-280z" fill="#81868f" p-id="2284"></path></svg>
          </InsertRightIconWrapper>
        </InsertLabelWrapper>
      </IconActive>
    </IconContainer>

  )
};

const ToolbarInsertLabel = () => {
  return <Tooltip floatingElement='图表/表格等' referenceElement={Button({ label: '插入' })} placement='bottom' />;
};

export default ToolbarInsertLabel;

