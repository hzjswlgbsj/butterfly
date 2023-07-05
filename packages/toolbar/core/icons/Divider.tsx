import { memo } from 'react';
import styled from "styled-components";

export const DividerWrapper = styled.div`
  margin-left: 4px;
  margin-right: 4px;
  height: 16px;
  width: 1px;
  opacity: 0.12;
  background-color: rgba(0, 0, 0, 0.88);
  margin-top: 4px;
  margin-bottom: 4px;
  vertical-align: top;
  display: inline-block;
  flex-shrink: 0;
`;


const Divider = memo(() => {
  return (
    <div id='toolbar-button-divider'>
      <DividerWrapper />
    </div>
  )
})

export default Divider