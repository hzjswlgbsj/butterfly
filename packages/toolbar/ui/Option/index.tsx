import { OptionItemContainer, OptionWrapper, OptionItemBeforeIconWrapper, SelectedLabelDescription, SelectedLabelWrapper, OptionItemedAfterIconWrapper } from "./style";
import React, { ReactNode, forwardRef } from 'react';
import { OptionItem } from '../../types';

interface OptionProps extends React.HTMLAttributes<HTMLLIElement> {
  value: string | number;
  label: string;
  handleClick: (value: number | string) => void;
  handleKeydown?: (value: number | string) => void;
  itemElement?: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  description?: string;
  options?: OptionItem[];
}
const Option: React.FC<OptionProps> = forwardRef<HTMLLIElement, OptionProps>(({ value, label, selected, disabled, handleClick, handleKeydown, itemElement, description, options }) => {
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
            <OptionItemBeforeIconWrapper>
              {
                !!selected &&
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'>
                  <path d='M12.5 3l1.5.944L5.671 13l-.885-.957L2 9l1.5-1 2.215 2.22z' fill='#1e6fff' fillRule='evenodd' />
                </svg>
              }
            </OptionItemBeforeIconWrapper>

            <SelectedLabelWrapper data-value={value}>
              {label}
              <SelectedLabelDescription>
                {description}
              </SelectedLabelDescription>
            </SelectedLabelWrapper>

            <OptionItemedAfterIconWrapper>
              {
                options && options.length > 0 &&
                <svg xmlns='http://www.w3.org/2000/svg' width='4' height='6'>
                  <path d='M3.936 3.123L.374 5.95a.261.261 0 01-.31 0A.158.158 0 010 5.826V.174C0 .078.098 0 .22 0a.25.25 0 01.154.05l3.562 2.827a.15.15 0 010 .246z' opacity='.4'></path>
                </svg>
              }
            </OptionItemedAfterIconWrapper>
          </>
        }

      </OptionItemContainer>
    </OptionWrapper>
  );
});

export default Option;
