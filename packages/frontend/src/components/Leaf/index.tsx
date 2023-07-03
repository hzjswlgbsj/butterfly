import React from 'react';
import { RenderLeafProps } from 'slate-react';

export function Leaf({ attributes, children, leaf }: RenderLeafProps) {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  if (leaf.strikethrough) {
    children = <del>{children}</del>;
  }

  return <span {...attributes}>{children}</span>;
}


// export const Leaf: React.FC<RenderLeafProps> = ({ attributes, children, leaf }) => {

//   if (leaf.bold) {
//     children = <strong>{children}</strong>;
//   }

//   if (leaf.code) {
//     children = <Code>{children}</Code>;
//   }

//   if (leaf.italic) {
//     children = <em>{children}</em>;
//   }

//   if (leaf.underline) {
//     children = <u>{children}</u>;
//   }

//   const data = leaf.data as any;

//   return (
//     <span
//       {...attributes}
//       style={
//         {
//           position: "relative",
//           backgroundColor: data?.alphaColor,
//         } as any
//       }
//     >
//       {leaf.isCaret ? <Caret {...(leaf as any)} /> : null}
//       {children}
//     </span>
//   );
// };
