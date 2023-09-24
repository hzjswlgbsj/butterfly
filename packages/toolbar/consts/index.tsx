import { OptionItem } from "../types";
import { MenuItem } from "../ui/DropdownItem";

export const FORMAT_TYPE_UNDO = "undo";
export const FORMAT_TYPE_REDO = "redo";
export const FORMAT_TYPE_FORMAT_PAINT = "format-paint";
export const FORMAT_TYPE_CLEAR_FORMAT = "clear-format";
export const FORMAT_TYPE_FONT_SIZE = "font-size";
export const FORMAT_TYPE_FONT_SIZE_INCREASE = "font-size-increase";
export const FORMAT_TYPE_FONT_SIZE_DECREASE = "font-size-decrease";
export const FORMAT_TYPE_BOLD = "bold";
export const FORMAT_TYPE_ITALIC = "italic";
export const FORMAT_TYPE_UNDERLINE = "underline";
export const FORMAT_TYPE_STRIKE_THROUGH = "strikethrough";
export const FORMAT_TYPE_SUB = "sub";
export const FORMAT_TYPE_SUP = "sup";
export const FORMAT_TYPE_DIVIDE = "divider";
export const FORMAT_TYPE_QUOTE = "quote";
export const FORMAT_TYPE_LIGHT_BLOCK = "light-block";

export const ACTION_TYPE_DIVIDER = "divider";
export const ACTION_TYPE_BUTTON = "button";
export const ACTION_TYPE_SELECT = "select";
export const ACTION_TYPE_FORMAT_DROPDOWN = "format-dropdown";
export const ACTION_TYPE_FORMAT_NORMAL = "normal-dropdown";

export const LIST_TYPES = ["numbered-list", "bulleted-list"];

export const FONT_SIZE_OPTIONS: OptionItem[] = [
  {
    value: "9",
    label: "9",
  },
  {
    value: "10",
    label: "10",
  },
  {
    value: "11",
    label: "11",
  },
  {
    value: "12",
    label: "12",
  },
  {
    value: "14",
    label: "14",
  },
  {
    value: "16",
    label: "16",
  },
  {
    value: "18",
    label: "18",
  },
  {
    value: "20",
    label: "20",
  },
  {
    value: "22",
    label: "22",
  },
  {
    value: "24",
    label: "24",
  },
  {
    value: "26",
    label: "26",
  },
  {
    value: "28",
    label: "28",
  },
  {
    value: "36",
    label: "36",
  },
  {
    value: "42",
    label: "42",
  },
  {
    value: "48",
    label: "48",
  },
  {
    value: "72",
    label: "72",
  },
];

const imageIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 5a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h14zm-.3 1.3H5.3v11.4h13.4V6.3zM17 16l-3.333-6-2.785 4.734-1.66-2.724L7 16h10z" fill="#454D5A"></path></svg>
const tableIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 5a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5h15zM9 15.028H5.299L5.3 17.7H9v-2.672zm9.7 0h-8.45V17.7h8.45v-2.672zM9 10.75H5.299v3.028H9V10.75zm9.7 0h-8.45v3.028h8.45V10.75zM9 6.299L5.3 6.3l-.001 3.2H9V6.299zm9.7.001l-8.45-.001V9.5h8.45V6.3z" fill="#454D5A"></path></svg>
const linkIcon = <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'> <title>toolbar_add_link</title> <g id='控件' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='编组' fill='#464D5A' fill-rule='nonzero'> <g id='形状结合'> <path d='M12.9827282,9.67619386 C13.2460803,9.84342437 13.4961285,10.0426938 13.7267173,10.2732827 C15.4244276,11.9709929 15.4244276,14.723525 13.7267173,16.4212352 L11.4212352,18.7267173 C9.72352495,20.4244276 6.97099286,20.4244276 5.27328265,18.7267173 C3.57557245,17.0290071 3.57557245,14.276475 5.27328265,12.5787648 L7.09587091,10.7552556 C7.20873369,11.1904702 7.41684345,11.5873146 7.69662436,11.922213 L6.15716613,13.4626483 C4.94761129,14.6722032 4.94761129,16.633279 6.15716613,17.8428339 C7.32019963,19.0058674 9.17805657,19.0505994 10.394538,17.97703 L10.5373517,17.8428339 L12.8428339,15.5373517 C14.0058674,14.3743182 14.0505994,12.5164612 12.97703,11.2999798 L12.8428339,11.1571661 L12.7890474,11.1072562 C12.9251701,10.7646731 13,10.3910753 13,10 C13,9.89059808 12.994144,9.78256391 12.9827282,9.67619386 Z M18.7267173,5.27328265 C20.4244276,6.97099286 20.4244276,9.72352495 18.7267173,11.4212352 L17.1937153,12.9536176 C16.9039917,12.6431687 16.5491476,12.3942797 16.150947,12.2287143 L17.8428339,10.5373517 C19.0058674,9.37431818 19.0505994,7.51646124 17.97703,6.29997979 L17.8428339,6.15716613 C16.6798004,4.99413263 14.8219434,4.94940057 13.605462,6.02296996 L13.4626483,6.15716613 L11.1571661,8.46264832 C9.94761129,9.67220316 9.94761129,11.633279 11.1571661,12.8428339 C11.5056774,13.1913452 11.91658,13.4394393 12.35392,13.5871161 C12.1594788,13.9480465 12.0375095,14.3555659 12.0073481,14.7883822 C11.3736085,14.584716 10.7770134,14.2304481 10.2732827,13.7267173 C8.57557245,12.0290071 8.57557245,9.27647505 10.2732827,7.57876484 L12.5787648,5.27328265 C14.276475,3.57557245 17.0290071,3.57557245 18.7267173,5.27328265 Z'></path></g></g></g></svg>
const codeIcon = <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'> <title>toolbar_add_code_block</title> <g id='toolbar_add_code_block' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <path d='M12.7402379,6.5213324 L13.9798427,6.85348351 L11.1328332,17.4786676 L9.8932284,17.1465165 L12.7402379,6.5213324 Z M7.89820675,8.01598876 L8.79166667,8.9044503 L5.53628165,12.1403541 L8.79166667,15.3775272 L7.89820675,16.2659888 L3.75,12.1409888 L7.89820675,8.01598876 Z M16.1017932,8.01598876 L20.25,12.1409888 L16.1017932,16.2659888 L15.2083333,15.3775272 L18.4637184,12.1403541 L15.2083333,8.9044503 L16.1017932,8.01598876 Z' id='Shape' fill='#424D5C'></path> <rect id='矩形备份' fill='#E4E4E4' opacity='0' x='0' y='0' width='24' height='24'></rect></g></svg>
const countdownIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 4H8V5H15.75V4H17V5H19C19.5523 5 20 5.44772 20 6V18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18V6C4 5.44772 4.44772 5 5 5H6.75V4ZM5.3 6.3H18.7V17.7H5.3V6.3ZM9.87734 8.5C10.4797 8.50638 10.9639 8.71162 11.3233 9.11657C11.6644 9.50842 11.839 9.97354 11.8451 10.508C11.8451 10.7775 11.7994 11.0378 11.7058 11.2941C11.6179 11.5006 11.4762 11.6874 11.2821 11.8546L11.2516 11.878L11.2846 11.9031C11.3849 11.987 11.4731 12.0776 11.549 12.1749L11.6536 12.3258L11.7397 12.487C11.8589 12.7576 11.9186 13.0417 11.9186 13.3394C11.9125 13.9925 11.7182 14.5137 11.3367 14.8935C10.9612 15.283 10.4785 15.4812 9.89352 15.4875C9.4383 15.4875 9.03293 15.3321 8.68175 15.0229C8.37348 14.7515 8.16115 14.3756 8.04425 13.8985L8 13.6878L8.10875 13.5497H9.01194L9.11523 13.6246C9.18972 13.8294 9.2935 13.9929 9.42751 14.1176C9.55574 14.2398 9.72797 14.3017 9.94969 14.3017C10.1857 14.3017 10.3807 14.2181 10.5445 14.0454C10.7052 13.8893 10.7889 13.6645 10.7941 13.3677C10.7889 13.0599 10.7047 12.8284 10.5439 12.6668C10.4157 12.5402 10.2599 12.4643 10.0736 12.439L9.92809 12.4295H9.43717L9.44947 11.353H9.85894C10.1396 11.353 10.3505 11.274 10.4994 11.1169C10.6472 10.9663 10.7206 10.772 10.7207 10.5288C10.7155 10.2785 10.6387 10.078 10.4908 9.92198C10.3416 9.76997 10.1494 9.69129 9.9108 9.68585C9.74275 9.68585 9.59093 9.74229 9.44947 9.85888C9.33417 9.94903 9.24796 10.0806 9.19138 10.2564L9.1545 10.3966L9.04651 10.488H8.14332L8.03323 10.3598C8.08189 9.8402 8.2823 9.39974 8.63227 9.0435C8.93487 8.73285 9.29122 8.55467 9.69761 8.51065L9.87734 8.5ZM15 8.51246V15.5H13.8577L13.8574 9.88785L13.1278 10.4535L12.9489 10.358V9.23342L13.9701 8.51246H15Z" fill="#454D5A" /></svg>


export const ToolbarMenuItem: MenuItem[] = [
  {
    value: "image",
    label: "图片",
    icon: imageIcon,
  },
  {
    value: "table",
    label: "表格",
    icon: tableIcon,
  },
  {
    value: "link",
    label: "链接",
    icon: linkIcon,
    description: '⌘+K',
  },
  {
    value: "code",
    label: "代码块",
    icon: codeIcon,
    description: '```+空格',
  },
  {
    value: "countdown",
    label: "倒计时",
    icon: countdownIcon,
  },
];
