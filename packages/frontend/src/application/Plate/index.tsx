import React, { useEffect } from 'react';
import { PlateEditor } from "@butterfly/plate";
import { PlateEditorWrapper } from './style';

const Plate: React.FC<any> = () => {
  return (
    <PlateEditorWrapper>
      <PlateEditor />
    </PlateEditorWrapper>
  );
};

export default Plate;