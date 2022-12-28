import styled from "styled-components";

export const Content = styled.div`
  /* @apply flex justify-center my-32 mx-10; */
`;
export const AuthorBefore = styled.span`
  @apply absolute top-0 bottom-0 w-0.5 left-[1px];
`;
export const Author = styled.span`
  @apply absolute text-xs text-white left-[1px] top-2 whitespace-nowrap rounded rounded-bl-none px-1 py-0.5 select-none;
`;
export const AuthorWrapper = styled.span`
  @apply relative;
`;
