import {
  useFloatingTree,
  useListItem,
  useMergeRefs,
} from "@floating-ui/react";
import * as React from "react";
import { DropdownItemBeforeIconWrapper, DropdownItemContainer, DropdownItemedAfterIconWrapper, DropdownLabelDescription, DropdownLabelWrapper, DropdownWrapper } from "./style";
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

interface MenuItemProps {
  value?: string | number;
  label?: string;
  handleClick?: (value: number | string) => void;
  handleKeydown?: (value: number | string) => void;
  selected?: boolean;
  disabled?: boolean;
  itemElement?: React.ReactNode;
  description?: string;
}

export const DropdownItem = React.forwardRef<
  HTMLButtonElement,
  MenuItemProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ value, label, disabled, selected, description, handleKeydown, itemElement, handleClick, children, ...props }, forwardedRef) => {
  const menu = React.useContext(MenuContext);
  const item = useListItem({ label: disabled ? null : label });
  const tree = useFloatingTree();
  const isActive = item.index === menu.activeIndex;

  useEffect(() => {
    if (!value) {
      value = label ? label : typeof children === 'string' ? children : ''
    }

    if (!label) {
      label = value
    }
  }, [value])

  return (
    <div
      {...props}
      ref={useMergeRefs([item.ref, forwardedRef])}
      type="button"
      // role="menuitem"
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
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
              <DropdownItemBeforeIconWrapper>
                {
                  !!selected &&
                  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'>
                    <path d='M12.5 3l1.5.944L5.671 13l-.885-.957L2 9l1.5-1 2.215 2.22z' fill='#1e6fff' fillRule='evenodd' />
                  </svg>
                }
              </DropdownItemBeforeIconWrapper>

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
    </div>
  );
});

export default DropdownItem