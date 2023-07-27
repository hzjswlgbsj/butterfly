import React, { ComponentProps } from 'react';
import { Editable, useSlate } from 'slate-react';
import { Spinner } from '../Spinner';
import { Element, Leaf } from '@butterfly/editor';

interface CustomProps {
  loading: string
}
type CustomEditableProps = Omit<
  ComponentProps<typeof Editable>,
  'renderElement' | 'renderLeaf'
> &
  Partial<
    Pick<ComponentProps<typeof Editable>, 'renderElement' | 'renderLeaf'>
  > &
  CustomProps
  ;

export function CustomEditable({
  renderElement = Element,
  renderLeaf = Leaf,
  ...props
}: CustomEditableProps) {
  if (props.loading === 'true') {
    return <Spinner />;
  }

  return (
    <Editable
      placeholder="Write something ..."
      {...props}
      renderElement={renderElement}
      renderLeaf={renderLeaf}
    />
  );
}
