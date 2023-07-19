import { ReactNode, useState } from "react";
import { useFloating, useHover, useInteractions } from "@floating-ui/react";
import { FloatingWrapper, ReferenceWrapper } from "./style";
interface TooltipProps {
  referenceElement: ReactNode;
  floatingElement: ReactNode;

}
const Tooltip: React.FC<TooltipProps> = ({ referenceElement, floatingElement }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen
  });

  const hover = useHover(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);
  return (
    <>
      <ReferenceWrapper ref={refs.setReference} {...getReferenceProps()}>
        {referenceElement}
      </ReferenceWrapper>
      {
        isOpen && (
          <FloatingWrapper
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            {floatingElement}
          </FloatingWrapper>
        )
      }
    </>
  );
};

export default Tooltip;
