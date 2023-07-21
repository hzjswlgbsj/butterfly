import { OptionItemContainer, OptionWrapper, SelectedIconWrapper, SelectedLabelWrapper } from "./style";
import React, { ReactNode, forwardRef } from 'react';

interface OptionProps extends React.HTMLAttributes<HTMLLIElement> {
  value: string;
  label: string;
  handleClick: (value: string) => void;
  handleKeydown?: (value: string) => void;
  itemElement?: ReactNode;
  selected?: boolean;
  disabled?: boolean;
}
const Option: React.FC<OptionProps> = forwardRef<HTMLLIElement, OptionProps>(({ value, label, selected, disabled, handleClick, handleKeydown, itemElement }) => {
  return (
    <OptionWrapper disabled={!!disabled} selected={!!selected}>
      <OptionItemContainer
        disabled={!!disabled}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            handleKeydown && handleKeydown(value);
          }
        }}
        onClick={() => handleClick(value)}
      >
        {itemElement && itemElement}
        {
          !itemElement &&
          <>
            <SelectedIconWrapper>
              {
                !!selected &&
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'>
                  <path d='M12.5 3l1.5.944L5.671 13l-.885-.957L2 9l1.5-1 2.215 2.22z' fill='#1e6fff' fillRule='evenodd' />
                </svg>
              }
            </SelectedIconWrapper>
            <SelectedLabelWrapper data-value={value}>{label}</SelectedLabelWrapper>
          </>
        }

      </OptionItemContainer>
    </OptionWrapper>
  );
});

export default Option;
