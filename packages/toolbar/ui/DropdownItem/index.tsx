import {
  useFloatingTree,
  useListItem,
  useMergeRefs,
} from "@floating-ui/react";
import * as React from "react";
import { CustomButton, DropdownItemBeforeIconWrapper, DropdownItemContainer, DropdownItemedAfterIconWrapper, DropdownLabelDescription, DropdownLabelWrapper, DropdownWrapper } from "./style";
import { useEffect } from "react";

const MenuContext = React.createContext<{
  getItemProps: (
    userProps?: React.HTMLProps<HTMLElement>
  ) => Record<string, unknown>;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setHasFocusInside: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}>({
  getItemProps: () => ({}),
  activeIndex: null,
  setActiveIndex: () => { },
  setHasFocusInside: () => { },
  isOpen: false
});

export interface MenuItem {
  value?: string | number;
  label?: string;
  handleClick?: (value: any) => void;
  handleKeydown?: (value: any) => void;
  disabled?: boolean;
  itemElement?: React.ReactNode;
  description?: string;
  icon?: any;
}

export const DropdownItem = React.forwardRef<
  HTMLButtonElement,
  MenuItem & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ value, label, disabled, icon, description, handleKeydown, itemElement, handleClick, children, ...props }, forwardedRef) => {
  const menu = React.useContext(MenuContext);
  const item = useListItem({ label: disabled ? null : label });
  const tree = useFloatingTree();
  const isActive = item.index === menu.activeIndex;

  useEffect(() => {
    if (!value) {
      value = label ? label : typeof children === 'string' ? children : ''
    }

    if (!label) {
      label = String(value)
    }
  }, [value])

  return (
    <CustomButton
      {...props}
      ref={useMergeRefs([item.ref, forwardedRef]) as any}
      tabIndex={isActive ? 0 : -1}
      {...menu.getItemProps({
        onClick(event: React.MouseEvent<HTMLButtonElement>) {
          props.onClick?.(event);
          tree?.events.emit("click");
        },
        onFocus(event: React.FocusEvent<HTMLButtonElement>) {
          props.onFocus?.(event);
          menu.setHasFocusInside(true);
        }
      })}
    >
      <DropdownWrapper disabled={!!disabled}>
        <DropdownItemContainer
          disabled={!!disabled}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              handleKeydown && handleKeydown(value);
            }
          }}
          onClick={() => handleClick && handleClick(value)}
        >
          {itemElement && itemElement}
          {
            !itemElement &&
            <>
              {
                !!icon &&
                <DropdownItemBeforeIconWrapper>
                  {icon}
                </DropdownItemBeforeIconWrapper>
              }


              <DropdownLabelWrapper data-value={value}>
                {label}
                <DropdownLabelDescription>
                  {description}
                </DropdownLabelDescription>
              </DropdownLabelWrapper>

              <DropdownItemedAfterIconWrapper>
                {
                  children && typeof children === 'object' &&
                  <svg xmlns='http://www.w3.org/2000/svg' width='4' height='6'>
                    <path d='M3.936 3.123L.374 5.95a.261.261 0 01-.31 0A.158.158 0 010 5.826V.174C0 .078.098 0 .22 0a.25.25 0 01.154.05l3.562 2.827a.15.15 0 010 .246z' opacity='.4'></path>
                  </svg>
                }
              </DropdownItemedAfterIconWrapper>
            </>
          }

        </DropdownItemContainer>
      </DropdownWrapper>
    </CustomButton>
  );
});

export default DropdownItem