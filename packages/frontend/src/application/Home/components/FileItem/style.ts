import styled, { css } from "styled-components";
import { baseFlexCenterStyle, ellipsis } from "../../../../baseUI/baseStyled";

export const FileItemWrapper = styled.li`
  align-items: center;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  border-bottom: 1px solid var(--border-weak, rgba(0, 0, 0, 0.04));
  border-image-slice: 1;
  border-image-source: linear-gradient(
    90deg,
    transparent 40px,
    rgba(0, 0, 0, 0.04) 0
  );
  border-image-source: linear-gradient(
    90deg,
    transparent 40px,
    var(--border-weak, rgba(0, 0, 0, 0.04)) 40px
  );
  box-sizing: content-box;
  cursor: default;
  display: flex;
  height: 56px;
  overflow: hidden;

  &:hover {
    background-color: #f8fafb;
  }
`;
export const DesktopListColumn = css`
  align-items: center;
  cursor: default;
  display: flex;
  font-size: 14px;
  height: 100%;
  line-height: 20px;
  overflow: hidden;
  padding: 0 12px 0 8px;
`;

export const FileItemCheckbox = styled.div`
  flex: none;
  overflow: visible;
  padding: 0;
  width: 32px;
  ${DesktopListColumn}
`;

export const FileItemTitle = styled.div`
  flex: 58 1;
  ${DesktopListColumn}
`;

export const FileItemDraggable = styled.div`
  ${baseFlexCenterStyle};
  overflow: hidden;
`;
export const FileItemIconWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  flex: 0 0 auto;
  height: 24px;
  width: 24px;
`;

export const FileItemIcon = styled.div<{ type: string }>`
  background: ${(props) => {
    if (props.type === "doc") {
      return "background-image: url('./doc_icon.png')";
    }
  }};
  background-size: cover;
  height: 100%;
  width: 100%;
`;

export const FileItemName = styled.div`
  cursor: pointer;
  ${ellipsis}
`;

export const FileItemUser = styled.div`
  color: rgba(0, 0, 0, 0.64);
  font-size: 12px;
  line-height: 16px;
  flex: 27 1;
  ${DesktopListColumn}
`;

export const FileItemDate = styled.div`
  color: rgba(0, 0, 0, 0.64);
  font-size: 12px;
  line-height: 16px;
  flex: 18 1;
  ${DesktopListColumn}
`;
