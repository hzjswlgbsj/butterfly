import { memo } from 'react';
import { ActionSelectProps } from '../../types';
import { FONT_SIZE_OPTIONS } from '../../consts';
import { IconActive, IconContainer, IconWrapper } from './style';
import { Select, Tooltip } from '../../ui';

const ActionSelect: React.FC<ActionSelectProps> = ({ id, active, disabled, tooltip }) => {
  return (
    <IconContainer>
      <IconActive active={active} disabled={disabled}>
        <IconWrapper id={id}>
          <Tooltip floatingElement={tooltip} referenceElement={Select({ options: FONT_SIZE_OPTIONS })} placement='bottom' />
        </IconWrapper>
      </IconActive>
    </IconContainer>
  )
};

export default memo(ActionSelect);