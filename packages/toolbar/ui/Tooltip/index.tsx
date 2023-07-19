import { ReactNode, useState } from "react";
import { useFloating, useHover, useInteractions, useDismiss, offset, shift, flip } from "@floating-ui/react";
import { FloatingWrapper, ReferenceWrapper } from "./style";
import { TooltipPlacement } from "packages/toolbar/types";
interface TooltipProps {
  referenceElement: ReactNode;
  floatingElement: ReactNode;
  placement: TooltipPlacement;

}
const Tooltip: React.FC<TooltipProps> = ({ referenceElement, floatingElement, placement }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(4),
      flip({ padding: 5 }),
      shift({ padding: 5 })
      // arrow({ element: arrowRef })
    ],
  });

  const hover = useHover(context, {
    restMs: 200,
  });
  const dismiss = useDismiss(context, {
    referencePress: true,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, dismiss]);
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
