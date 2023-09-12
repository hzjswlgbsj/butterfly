import { ReactNode, useEffect } from "react";
import * as React from "react";
import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useListNavigation,
  useInteractions,
  FloatingFocusManager,
  offset,
  flip,
  autoUpdate,
  FloatingPortal
} from "@floating-ui/react";
import Option from '../Option';
import { SelectItemContainerWrapper, SelectedIconWrapper, SelectedLabel, SelectedLabelWrapper } from "./style";
import { OptionItem } from '../../types';

interface SelectProps {
  value: any;
  options: OptionItem[];
  optionElement?: ReactNode;
  placeholder?: string;
  labelWidth?: number;
  onChange?: (value: any) => void;
}

const Select: React.FC<SelectProps> = ({ options, placeholder, labelWidth = 46, value, onChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  const [selectedValue, setSelectedValue] = React.useState<number | string | null>(value ? value : '');
  const [selectedItemLabel, setSelectedItemLabel] = React.useState<string>(placeholder ? placeholder : 'select');

  const { refs, floatingStyles, context } = useFloating({
    placement: "bottom-start",
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({ padding: 5 }),
    ]
  });

  const listRef = React.useRef<Array<HTMLElement | null>>([]);
  const click = useClick(context, { event: "mousedown" });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "listbox" });
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
    loop: true
  });

  const {
    getReferenceProps,
    getFloatingProps,
    getItemProps
  } = useInteractions([dismiss, role, listNav, click]);

  const handleSelect = (value: number | string, index: number) => {
    setSelectedIndex(index);
    setSelectedValue(value);
    setIsOpen(false);
    onChange && onChange(value)
  };

  useEffect(() => {
    const seletedItem = options.find(item => item.value === selectedValue)
    if (seletedItem) {
      setSelectedItemLabel(seletedItem!.label)
    }
  }, [selectedValue]);

  return (
    <>
      <SelectedLabelWrapper ref={refs.setReference} width={`${labelWidth}px`} {...getReferenceProps()}>
        <SelectedLabel>{selectedItemLabel}</SelectedLabel>
        <SelectedIconWrapper>
          <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2283" width="12" height="12"><path d="M232 392L512 672l280-280z" fill="#464d5a" p-id="2284"></path></svg>
        </SelectedIconWrapper>
      </SelectedLabelWrapper>
      {
        isOpen && (
          <FloatingPortal>
            <FloatingFocusManager context={context} modal={false}>
              <SelectItemContainerWrapper
                ref={refs.setFloating}
                transfer={true}
                style={floatingStyles}
                {...getFloatingProps()}
              >
                {
                  options.map((item, i) => (
                    <div
                      key={item.value}
                      ref={(node) => listRef.current[i] = node}
                      {...getItemProps()}
                    >
                      <Option
                        selected={item.value === selectedValue}
                        value={item.value}
                        label={item.label}
                        description={item.description}
                        options={item.options}
                        handleClick={(value: number | string) => handleSelect(value, i)}
                        handleKeydown={(value: number | string) => handleSelect(value, i)}
                      />
                    </div>
                  ))
                }
              </SelectItemContainerWrapper>
            </FloatingFocusManager>
          </FloatingPortal >
        )
      }
    </>
  );
};

export default Select;
