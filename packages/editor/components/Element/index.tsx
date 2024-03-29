import { RenderElementProps } from 'slate-react';
import React from 'react';
import { Code, BlockquoteWrapper, Blockquote } from './style';

const Element = ({ element, attributes, children }: RenderElementProps) => {
  switch (element.type) {
    case 'heading-one':
      return (
        <h1 {...attributes} className="text-5xl my-5">
          {children}
        </h1>
      );
    case 'heading-two':
      return (
        <h2 {...attributes} className="text-3xl my-2">
          {children}
        </h2>
      );
    case 'inline-code':
      return (
        <Code {...attributes}>
          {children}
        </Code>
      );
    case 'block-quote':
      return (
        <BlockquoteWrapper {...attributes}>
          <Blockquote>{children}</Blockquote>
        </BlockquoteWrapper>
      );
    default:
      return (
        <p {...attributes} className="mb-2">
          {children}
        </p>
      );
  }
}

export default Element
