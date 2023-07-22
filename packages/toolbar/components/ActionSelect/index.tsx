import { memo } from 'react';
import { ActionSelectProps } from '../../types';
import { FONT_SIZE_OPTIONS } from '../../consts';
import { IconActive, IconContainer, SelectContainer } from './style';
import { Select, Tooltip } from '../../ui';

const ActionSelect: React.FC<ActionSelectProps> = ({ id, value, active, disabled, tooltip }) => {
  return (
    <IconContainer>
      <IconActive active={active} disabled={disabled}>
        <SelectContainer id={id}>
          <Tooltip
            floatingElement={tooltip}
            referenceElement={
              Select({
                options: FONT_SIZE_OPTIONS,
                value,
              })
            }
            placement='bottom'
          />
        </SelectContainer>
      </IconActive>
    </IconContainer>
  )
};

export default memo(ActionSelect);