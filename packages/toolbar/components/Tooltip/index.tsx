import "./styles.css";
import { useState } from "react";
import { useFloating, useHover, useInteractions } from "@floating-ui/react";
interface TooltipProps {

}
const Tooltip: React.FC<TooltipProps> = () => {
  console.log(4444444)
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen
  });

  const hover = useHover(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);
  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        Reference element
      </div>
      {isOpen && (
        <div
          className="floating"
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          Floating element
        </div>
      )}
    </>
  );

  return (
    <div>fffff</div>
  );
};
export default Tooltip;

// import "./styles.css";
// import { useState } from "react";
// import { useFloating, useHover, useInteractions } from "@floating-ui/react";

// interface TooltipProps {

// }

// const Tooltip: React.FC<TooltipProps> = () => {
//   return <div>dddd</div>

//   console.log(4444444)
//   const [isOpen, setIsOpen] = useState(false);

//   const { refs, floatingStyles, context } = useFloating({
//     open: isOpen,
//     onOpenChange: setIsOpen
//   });

//   const hover = useHover(context);

//   const { getReferenceProps, getFloatingProps } = useInteractions([hover]);
//   return (
//     <>
//       <div ref={refs.setReference} {...getReferenceProps()}>
//         Reference element
//       </div>
//       {isOpen && (
//         <div
//           className="floating"
//           ref={refs.setFloating}
//           style={floatingStyles}
//           {...getFloatingProps()}
//         >
//           Floating element
//         </div>
//       )}
//     </>
//   );
// }

// export default Tooltip