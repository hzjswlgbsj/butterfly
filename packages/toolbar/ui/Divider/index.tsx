import { DividerWrapper } from "./style";
import React from 'react';

interface DividerProps {
  type?: 'horizontal' | 'vertical';
}

const Divider: React.FC<DividerProps> = ({ type }) => {
  return (
    <DividerWrapper type={type}></DividerWrapper>
  );
};

export default Divider;
