import { RenderElementProps } from 'slate-react';
import React from 'react';
import './style.css';

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
        <code {...attributes} style={{ color: 'red', backgroundColor: 'greenyellow', padding: '2px 4px' }}>
          {children}
        </code >
      );
    case 'block-quote':
      return (
        <blockquote {...attributes} style={{ color: 'red', backgroundColor: 'greenyellow', padding: '2px 4px' }}>
          <p className="my-1">{children}</p>
        </blockquote>
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
