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
import { SelectItemContainerWrapper, SelectedLabelWrapper } from "./style";

interface SelectProps {
  optionElement: ReactNode;
  placeholder?: string
  labelWidth?: number
}
interface OptionItem {
  value: string;
  label: string;
}

const options: OptionItem[] = [
  {
    value: 'red',
    label: 'Red',
  },
  {
    value: 'orange',
    label: 'Orange',
  },
  {
    value: 'yellow',
    label: 'Yellow',
  },
  {
    value: 'green',
    label: 'Green',
  },
  {
    value: 'cyan',
    label: 'Cyan',
  },
  {
    value: 'blue',
    label: 'Blue',
  },
  {
    value: 'purple',
    label: 'Purple',
  },
  {
    value: 'pink',
    label: 'Pink',
  },
  {
    value: 'maroon',
    label: 'Maroon',
  },
  {
    value: 'white',
    label: 'White',
  },
];

const Select: React.FC<SelectProps> = ({ placeholder, labelWidth }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  const [selectedValue, setSelectedValue] = React.useState<string | null>('orange');
  const [selectedItemLabel, setSelectedItemLabel] = React.useState<string>(placeholder ? placeholder : '请选择');

  const { refs, floatingStyles, context } = useFloating({
    placement: "bottom-start",
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({ padding: 10 }),
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

  const handleSelect = (value: string, index: number) => {
    setSelectedIndex(index);
    setSelectedValue(value);
    setIsOpen(false);

  };

  useEffect(() => {
    const seletedItem = options.find(item => item.value === selectedValue)
    setSelectedItemLabel(seletedItem!.label)
  }, [selectedValue]);

  return (
    <>
      <SelectedLabelWrapper ref={refs.setReference} width={labelWidth} {...getReferenceProps()}>
        {selectedItemLabel}
      </SelectedLabelWrapper>
      {
        isOpen && (
          <FloatingPortal>
            <FloatingFocusManager context={context} modal={false}>
              <SelectItemContainerWrapper
                ref={refs.setFloating}
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
                        handleClick={(value: string) => handleSelect(value, i)}
                        handleKeydown={(value: string) => handleSelect(value, i)}
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
