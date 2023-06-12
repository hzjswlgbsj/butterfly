import React, { CSSProperties, useMemo, useRef } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
  AutoformatPlugin,
  CodeBlockElement,
  createAlignPlugin,
  createAutoformatPlugin,
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createComboboxPlugin,
  createCommentsPlugin,
  createDeserializeCsvPlugin,
  createDeserializeDocxPlugin,
  createDeserializeMdPlugin,
  createEmojiPlugin,
  createExitBreakPlugin,
  createFontBackgroundColorPlugin,
  createFontColorPlugin,
  createFontSizePlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createHorizontalRulePlugin,
  createImagePlugin,
  createIndentPlugin,
  createItalicPlugin,
  createKbdPlugin,
  createLinkPlugin,
  createListPlugin,
  createMediaEmbedPlugin,
  createMentionPlugin,
  createNodeIdPlugin,
  createNormalizeTypesPlugin,
  createParagraphPlugin,
  createPlateUI,
  createResetNodePlugin,
  createSelectOnBackspacePlugin,
  createSoftBreakPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createTablePlugin,
  createTodoListPlugin,
  createTrailingBlockPlugin,
  createUnderlinePlugin,
  ELEMENT_CODE_BLOCK,
  MentionCombobox,
  Plate,
  PlateFloatingComments,
  PlateProvider,
} from '@udecode/plate';
// @ts-ignore
import { createDndPlugin } from '@udecode/plate-dnd';
// @ts-ignore
import { createJuicePlugin } from '@udecode/plate-juice';
// @ts-ignore
import { createBlockSelectionPlugin } from '@udecode/plate-selection';
import {
  createExcalidrawPlugin,
  ELEMENT_EXCALIDRAW,
  ExcalidrawElement,
  // @ts-ignore
} from '@udecode/plate-ui-excalidraw';
import { alignPlugin } from '../../plugins/align/alignPlugin';
import { autoformatPlugin } from '../../plugins/autoformat/autoformatPlugin';
import { CommentBalloonToolbar } from '../../plugins/comments/CommentBalloonToolbar';
import { MyCommentsProvider } from '../../plugins/comments/MyCommentsProvider';
import { editableProps } from '../../plugins/common/editableProps';
import { CursorOverlayContainer } from '../../plugins/cursor-overlay/CursorOverlayContainer';
import { dragOverCursorPlugin } from '../../plugins/cursor-overlay/dragOverCursorPlugin';
import { withStyledDraggables } from '../../plugins/dnd/withStyledDraggables';
import { emojiPlugin } from '../../plugins/emoji/emojiPlugin';
import { exitBreakPlugin } from '../../plugins/exit-break/exitBreakPlugin';
import { forcedLayoutPlugin } from '../../plugins/forced-layout/forcedLayoutPlugin';
import { indentPlugin } from '../../plugins/indent/indentPlugin';
import { linkPlugin } from '../../plugins/link/linkPlugin';
import { MENTIONABLES } from '../../plugins/mention/mentionables';
import { withStyledPlaceHolders } from '../../plugins/placeholder/withStyledPlaceHolders';
import { resetBlockTypePlugin } from '../../plugins/reset-node/resetBlockTypePlugin';
import { selectOnBackspacePlugin } from '../../plugins/select-on-backspace/selectOnBackspacePlugin';
import { softBreakPlugin } from '../../plugins/soft-break/softBreakPlugin';
import { Toolbar } from '../toolbar/Toolbar';
import { trailingBlockPlugin } from '../../plugins/trailing-block/trailingBlockPlugin';
import {
  createMyPlugins,
  MyEditor,
  MyPlatePlugin,
  MyValue,
} from '../../types/plateTypes';
import { playgroundValue } from '../../tests/playgroundValue';
import { ToolbarButtons } from '../toolbar/ToolbarButtons';

let components = createPlateUI({
  [ELEMENT_CODE_BLOCK]: CodeBlockElement,
  [ELEMENT_EXCALIDRAW]: ExcalidrawElement,
  // customize your components by plugin key
});
components = withStyledPlaceHolders(components);

const styles: Record<string, CSSProperties> = {
  container: { position: 'relative' },
};

const App = () => {
  const containerRef = useRef(null);

  const plugins = useMemo(
    () =>
      createMyPlugins(
        [
          createParagraphPlugin(),
          createBlockquotePlugin(),
          createTodoListPlugin(),
          createHeadingPlugin(),
          createImagePlugin(),
          createHorizontalRulePlugin(),
          createLinkPlugin(linkPlugin),
          createListPlugin(),
          createTablePlugin(),
          createMediaEmbedPlugin(),
          createExcalidrawPlugin() as MyPlatePlugin,
          createCodeBlockPlugin(),
          createAlignPlugin(alignPlugin),
          createBoldPlugin(),
          createCodePlugin(),
          createItalicPlugin(),
          createHighlightPlugin(),
          createUnderlinePlugin(),
          createStrikethroughPlugin(),
          createSubscriptPlugin(),
          createSuperscriptPlugin(),
          createFontColorPlugin(),
          createFontBackgroundColorPlugin(),
          createFontSizePlugin(),
          createKbdPlugin(),
          createNodeIdPlugin(),
          createBlockSelectionPlugin(),
          createDndPlugin({ options: { enableScroller: true } }),
          dragOverCursorPlugin,
          createIndentPlugin(indentPlugin),
          createAutoformatPlugin<
            AutoformatPlugin<MyValue, MyEditor>,
            MyValue,
            MyEditor
          >(autoformatPlugin),
          createResetNodePlugin(resetBlockTypePlugin),
          createSoftBreakPlugin(softBreakPlugin),
          createExitBreakPlugin(exitBreakPlugin),
          createNormalizeTypesPlugin(forcedLayoutPlugin),
          createTrailingBlockPlugin(trailingBlockPlugin),
          createSelectOnBackspacePlugin(selectOnBackspacePlugin),
          createComboboxPlugin(),
          createMentionPlugin(),
          createCommentsPlugin(),
          createDeserializeMdPlugin(),
          createDeserializeCsvPlugin(),
          createDeserializeDocxPlugin(),
          createJuicePlugin() as MyPlatePlugin,
          createEmojiPlugin(emojiPlugin),
        ],
        {
          components: withStyledDraggables(components),
        }
      ),
    []
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <PlateProvider<MyValue> initialValue={playgroundValue} plugins={plugins}>
        <Toolbar>
          <ToolbarButtons />
        </Toolbar>

        <MyCommentsProvider>
          <div ref={containerRef} style={styles.container}>
            <Plate editableProps={editableProps}>
              <CommentBalloonToolbar />

              <MentionCombobox items={MENTIONABLES} />

              <CursorOverlayContainer containerRef={containerRef} />
            </Plate>
          </div>

          <PlateFloatingComments />
        </MyCommentsProvider>
      </PlateProvider>
    </DndProvider>
  );
};

export default App;
