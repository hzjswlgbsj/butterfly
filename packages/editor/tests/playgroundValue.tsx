import { alignValue } from '../plugins/align/alignValue';
import { autoformatValue } from '../plugins/autoformat/autoformatValue';
import { basicElementsValue } from '../plugins/basic-elements/basicElementsValue';
import { basicMarksValue } from '../plugins/basic-marks/basicMarksValue';
import { mapNodeId } from '../plugins/common/mapNodeId';
import { excalidrawValue } from '../plugins/excalidraw/excalidrawValue';
import { exitBreakValue } from '../plugins/exit-break/exitBreakValue';
import { fontValue } from '../plugins/font/fontValue';
import { forcedLayoutValue } from '../plugins/forced-layout/forcedLayoutValue';
import { highlightValue } from '../plugins/highlight/highlightValue';
import { horizontalRuleValue } from '../plugins/horizontal-rule/horizontalRuleValue';
import { indentValue } from '../plugins/indent/indentValue';
import { kbdValue } from '../plugins/kbd/kbdValue';
import { lineHeightValue } from '../plugins/line-height/lineHeightValue';
import { linkValue } from '../plugins/link/linkValue';
import { listValue } from '../plugins/list/listValue';
import { mediaValue } from '../plugins/media/mediaValue';
import { mentionValue } from '../plugins/mention/mentionValue';
import { deserializeCsvValue } from '../plugins/serializing-csv/deserializeCsvValue';
import { deserializeDocxValue } from '../plugins/serializing-docx/deserializeDocxValue';
import { deserializeHtmlValue } from '../plugins/serializing-html/deserializeHtmlValue';
import { deserializeMdValue } from '../plugins/serializing-md/deserializeMdValue';
import { softBreakValue } from '../plugins/soft-break/softBreakValue';
import { tableValue } from '../plugins/table/tableValue';

export const playgroundValue: any = mapNodeId([
  ...forcedLayoutValue,
  ...basicMarksValue,
  ...kbdValue,
  ...fontValue,
  ...highlightValue,
  ...basicElementsValue,
  ...horizontalRuleValue,
  ...alignValue,
  ...lineHeightValue,
  ...indentValue,
  ...listValue,
  ...tableValue,
  ...linkValue,
  ...mentionValue,
  ...mediaValue,
  ...excalidrawValue,
  ...autoformatValue,
  ...softBreakValue,
  ...exitBreakValue,
  ...deserializeHtmlValue,
  ...deserializeDocxValue,
  ...deserializeMdValue,
  ...deserializeCsvValue,
]);
