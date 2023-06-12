import {
  EmojiCombobox,
  EmojiPlugin,
  RenderAfterEditable,
} from "@udecode/plate";
import { MyPlatePlugin, MyValue } from "../../types/plateTypes";

export const emojiPlugin: Partial<MyPlatePlugin<EmojiPlugin>> = {
  renderAfterEditable: EmojiCombobox as RenderAfterEditable<MyValue>,
};
