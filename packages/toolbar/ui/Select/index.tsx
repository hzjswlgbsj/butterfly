import { ReactNode } from "react";
import * as React from "react";
import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useListNavigation,
  useInteractions,
  FloatingFocusManager,
  useTypeahead,
  offset,
  flip,
  autoUpdate,
  FloatingPortal
} from "@floating-ui/react";
import Option from '../Option';
import { SelectItemContainerWrapper } from "./style";

interface SelectProps {
  optionElement: ReactNode;
}

const options = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Cyan",
  "Blue",
  "Purple",
  "Pink",
  "Maroon",
  "Black",
  "White"
];

const Select: React.FC<SelectProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [active, setActiveIndex] = React.useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({ padding: 10 }),
    ]
  });

  const listRef = React.useRef<Array<HTMLElement | null>>([]);
  const listContentRef = React.useRef(options);
  const isTypingRef = React.useRef(false);

  const click = useClick(context, { event: "mousedown" });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "listbox" });
  const listNav = useListNavigation(context, {
    listRef,
    active,
    selectedIndex,
    onNavigate: setActiveIndex,
    // This is a large list, allow looping.
    loop: true
  });
  const typeahead = useTypeahead(context, {
    listRef: listContentRef,
    active,
    selectedIndex,
    onMatch: isOpen ? setActiveIndex : setSelectedIndex,
    onTypingChange(isTyping) {
      isTypingRef.current = isTyping;
    }
  });

  const {
    getReferenceProps,
    getFloatingProps,
    getItemProps
  } = useInteractions([dismiss, role, listNav, typeahead, click]);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(false);
  };

  const selectedItemLabel =
    selectedIndex !== null ? options[selectedIndex] : undefined;
  return (
    <>
      <div
        tabIndex={0}
        ref={refs.setReference}
        aria-labelledby="select-label"
        aria-autocomplete="none"
        style={{ width: 150, lineHeight: 2, margin: "auto" }}
        {...getReferenceProps()}
      >
        {selectedItemLabel || "Select..."}
      </div>
      {isOpen && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <SelectItemContainerWrapper
              ref={refs.setFloating}
              style={{
                ...floatingStyles,
                overflowY: "auto",
                background: "#fff",
                minWidth: 100,
                borderRadius: 8,
                outline: 0
              }}
              {...getFloatingProps()}
            >
              {options.map((value, i) => (
                <div
                  key={value}
                  ref={(node) => {
                    listRef.current[i] = node;
                  }}
                  role="option"
                  tabIndex={i === active ? 0 : -1}
                  aria-selected={i === selectedIndex && i === active}
                  style={{
                    cursor: "default",
                    background: i === active ? "rgba(51, 77, 102, 0.06)" : ""
                  }}
                  {...getItemProps({
                    // Handle pointer select.
                    onClick() {
                      handleSelect(i);
                    },
                    // Handle keyboard select.
                    onKeyDown(event) {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        handleSelect(i);
                      }

                      if (event.key === " " && !isTypingRef.current) {
                        event.preventDefault();
                        handleSelect(i);
                      }
                    }
                  })}
                >
                  <Option selected={true} value={value} label={value} handleClick={(val) => {
                    console.log(3333333333, val)
                  }} />
                </div>
              ))}
            </SelectItemContainerWrapper>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  );
};

export default Select;
