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
export const FORMAT_TYPE_IMAGE = "image";
export const FORMAT_TYPE_TABLE = "table";
export const FORMAT_TYPE_LINK = "link";
export const FORMAT_TYPE_CODE = "code";
export const FORMAT_TYPE_COUNTDOWN = "countdown";
export const FORMAT_TYPE_WORKBENCH = "workbench";
export const FORMAT_TYPE_COMMENT = "comment";
export const FORMAT_TYPE_SPLIT_LINE = "split-line";
export const FORMAT_TYPE_BUTTERFLY_LINE = "butterfly-document";
export const FORMAT_TYPE_ATTACHMENT = "attachment";
export const FORMAT_TYPE_ADDONS = "addons";
export const FORMAT_TYPE_DIVIDER = "divider";

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

const imageIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M19 5a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h14zm-.3 1.3H5.3v11.4h13.4V6.3zM17 16l-3.333-6-2.785 4.734-1.66-2.724L7 16h10z" fill="#454D5A"></path></svg>
const tableIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M19.5 5a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5h15zM9 15.028H5.299L5.3 17.7H9v-2.672zm9.7 0h-8.45V17.7h8.45v-2.672zM9 10.75H5.299v3.028H9V10.75zm9.7 0h-8.45v3.028h8.45V10.75zM9 6.299L5.3 6.3l-.001 3.2H9V6.299zm9.7.001l-8.45-.001V9.5h8.45V6.3z" fill="#454D5A"></path></svg>
const linkIcon = <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'> <title>toolbar_add_link</title> <g id='控件' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'> <g id='编组' fill='#464D5A' fillRule='nonzero'> <g id='形状结合'> <path d='M12.9827282,9.67619386 C13.2460803,9.84342437 13.4961285,10.0426938 13.7267173,10.2732827 C15.4244276,11.9709929 15.4244276,14.723525 13.7267173,16.4212352 L11.4212352,18.7267173 C9.72352495,20.4244276 6.97099286,20.4244276 5.27328265,18.7267173 C3.57557245,17.0290071 3.57557245,14.276475 5.27328265,12.5787648 L7.09587091,10.7552556 C7.20873369,11.1904702 7.41684345,11.5873146 7.69662436,11.922213 L6.15716613,13.4626483 C4.94761129,14.6722032 4.94761129,16.633279 6.15716613,17.8428339 C7.32019963,19.0058674 9.17805657,19.0505994 10.394538,17.97703 L10.5373517,17.8428339 L12.8428339,15.5373517 C14.0058674,14.3743182 14.0505994,12.5164612 12.97703,11.2999798 L12.8428339,11.1571661 L12.7890474,11.1072562 C12.9251701,10.7646731 13,10.3910753 13,10 C13,9.89059808 12.994144,9.78256391 12.9827282,9.67619386 Z M18.7267173,5.27328265 C20.4244276,6.97099286 20.4244276,9.72352495 18.7267173,11.4212352 L17.1937153,12.9536176 C16.9039917,12.6431687 16.5491476,12.3942797 16.150947,12.2287143 L17.8428339,10.5373517 C19.0058674,9.37431818 19.0505994,7.51646124 17.97703,6.29997979 L17.8428339,6.15716613 C16.6798004,4.99413263 14.8219434,4.94940057 13.605462,6.02296996 L13.4626483,6.15716613 L11.1571661,8.46264832 C9.94761129,9.67220316 9.94761129,11.633279 11.1571661,12.8428339 C11.5056774,13.1913452 11.91658,13.4394393 12.35392,13.5871161 C12.1594788,13.9480465 12.0375095,14.3555659 12.0073481,14.7883822 C11.3736085,14.584716 10.7770134,14.2304481 10.2732827,13.7267173 C8.57557245,12.0290071 8.57557245,9.27647505 10.2732827,7.57876484 L12.5787648,5.27328265 C14.276475,3.57557245 17.0290071,3.57557245 18.7267173,5.27328265 Z'></path></g></g></g></svg>
const codeIcon = <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'> <title>toolbar_add_code_block</title> <g id='toolbar_add_code_block' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'> <path d='M12.7402379,6.5213324 L13.9798427,6.85348351 L11.1328332,17.4786676 L9.8932284,17.1465165 L12.7402379,6.5213324 Z M7.89820675,8.01598876 L8.79166667,8.9044503 L5.53628165,12.1403541 L8.79166667,15.3775272 L7.89820675,16.2659888 L3.75,12.1409888 L7.89820675,8.01598876 Z M16.1017932,8.01598876 L20.25,12.1409888 L16.1017932,16.2659888 L15.2083333,15.3775272 L18.4637184,12.1403541 L15.2083333,8.9044503 L16.1017932,8.01598876 Z' id='Shape' fill='#424D5C'></path> <rect id='矩形备份' fill='#E4E4E4' opacity='0' x='0' y='0' width='24' height='24'></rect></g></svg>
const countdownIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.75 4H8V5H15.75V4H17V5H19C19.5523 5 20 5.44772 20 6V18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18V6C4 5.44772 4.44772 5 5 5H6.75V4ZM5.3 6.3H18.7V17.7H5.3V6.3ZM9.87734 8.5C10.4797 8.50638 10.9639 8.71162 11.3233 9.11657C11.6644 9.50842 11.839 9.97354 11.8451 10.508C11.8451 10.7775 11.7994 11.0378 11.7058 11.2941C11.6179 11.5006 11.4762 11.6874 11.2821 11.8546L11.2516 11.878L11.2846 11.9031C11.3849 11.987 11.4731 12.0776 11.549 12.1749L11.6536 12.3258L11.7397 12.487C11.8589 12.7576 11.9186 13.0417 11.9186 13.3394C11.9125 13.9925 11.7182 14.5137 11.3367 14.8935C10.9612 15.283 10.4785 15.4812 9.89352 15.4875C9.4383 15.4875 9.03293 15.3321 8.68175 15.0229C8.37348 14.7515 8.16115 14.3756 8.04425 13.8985L8 13.6878L8.10875 13.5497H9.01194L9.11523 13.6246C9.18972 13.8294 9.2935 13.9929 9.42751 14.1176C9.55574 14.2398 9.72797 14.3017 9.94969 14.3017C10.1857 14.3017 10.3807 14.2181 10.5445 14.0454C10.7052 13.8893 10.7889 13.6645 10.7941 13.3677C10.7889 13.0599 10.7047 12.8284 10.5439 12.6668C10.4157 12.5402 10.2599 12.4643 10.0736 12.439L9.92809 12.4295H9.43717L9.44947 11.353H9.85894C10.1396 11.353 10.3505 11.274 10.4994 11.1169C10.6472 10.9663 10.7206 10.772 10.7207 10.5288C10.7155 10.2785 10.6387 10.078 10.4908 9.92198C10.3416 9.76997 10.1494 9.69129 9.9108 9.68585C9.74275 9.68585 9.59093 9.74229 9.44947 9.85888C9.33417 9.94903 9.24796 10.0806 9.19138 10.2564L9.1545 10.3966L9.04651 10.488H8.14332L8.03323 10.3598C8.08189 9.8402 8.2823 9.39974 8.63227 9.0435C8.93487 8.73285 9.29122 8.55467 9.69761 8.51065L9.87734 8.5ZM15 8.51246V15.5H13.8577L13.8574 9.88785L13.1278 10.4535L12.9489 10.358V9.23342L13.9701 8.51246H15Z" fill="#454D5A" /></svg>
const flowChartIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.7 19.3V4.7h9.55l3.05 3.072V19.3H5.7zM5.5 3.5h10.25l3.75 3.778V19.5a1 1 0 01-1 1h-13a1 1 0 01-1-1v-15a1 1 0 011-1zm10.549 6.914L14.62 9l-1.01 1h-3.33a1.75 1.75 0 100 3.5h3.562a.75.75 0 010 1.5H10.32v-.5H8.3v2h2.02V16h3.522a1.75 1.75 0 100-3.5H10.28a.75.75 0 110-1.5h3.502l.837.828 1.429-1.414z" fill="#454D5A"></path></svg>
const commentIcon = <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'> <title>toolbar_add_comment</title> <g id='toolbar_add_comment' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'> <g id='编组-2' transform='translate(4.000000, 5.000000)' fill='#444D5B' fillRule='nonzero'> <path d='M14.875,0.583333333 C15.1281305,0.583333333 15.3333333,0.788536156 15.3333333,1.04166667 L15.3333333,11.125 C15.3333333,11.3781305 15.1281305,11.5833333 14.875,11.5833333 L9.83926392,11.5833333 L8.01723226,14.3333333 L6.14513592,11.5833333 L1.125,11.5833333 C0.87186949,11.5833333 0.666666667,11.3781305 0.666666667,11.125 L0.666666667,1.04166667 C0.666666667,0.788536156 0.87186949,0.583333333 1.125,0.583333333 L14.875,0.583333333 Z M14.1416667,1.775 L1.85833333,1.775 L1.85833333,10.3916667 L6.77548448,10.3916667 L8.00366667,12.1956667 L9.19931665,10.3916667 L14.1416667,10.3916667 L14.1416667,1.775 Z M8.57577006,3.33185069 L8.57499528,5.50893402 L10.7493286,5.50973129 L10.7493286,6.65556463 L8.57499528,6.65476735 L8.57577006,8.83185069 L7.42993673,8.83185069 L7.42916195,6.65476735 L5.24932861,6.65556463 L5.24932861,5.50973129 L7.42916195,5.50893402 L7.42993673,3.33185069 L8.57577006,3.33185069 Z' id='Shape'></path> </g> <rect id='矩形备份' fill='#E4E4E4' opacity='0' x='0' y='0' width='24' height='24'></rect></g></svg>
const splitLineIcon = <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'> <title>toolbar_add_divide</title> <g id='toolbar_add_divide' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'> <g id='编组' transform='translate(5.000000, 6.000000)' fill='#464D5A'> <path d='M2.08928571,5.08333333 L2.08928571,6.45833333 L0.125,6.45833333 L0.125,5.08333333 L2.08928571,5.08333333 Z M5.03571429,5.08333333 L5.03571429,6.45833333 L3.07142857,6.45833333 L3.07142857,5.08333333 L5.03571429,5.08333333 Z M7.98214286,5.08333333 L7.98214286,6.45833333 L6.01785714,6.45833333 L6.01785714,5.08333333 L7.98214286,5.08333333 Z M10.9285714,5.08333333 L10.9285714,6.45833333 L8.96428571,6.45833333 L8.96428571,5.08333333 L10.9285714,5.08333333 Z M13.875,5.08333333 L13.875,6.45833333 L11.9107143,6.45833333 L11.9107143,5.08333333 L13.875,5.08333333 Z' id='合并形状'></path> <rect id='矩形-copy-32' x='0.125' y='0.5' width='13.75' height='1.375'></rect> <path d='M4.05357143,10.125 L4.05357143,11.5 L0.125,11.5 L0.125,10.125 L4.05357143,10.125 Z M8.96428571,10.125 L8.96428571,11.5 L5.03571429,11.5 L5.03571429,10.125 L8.96428571,10.125 Z M13.875,10.125 L13.875,11.5 L9.94642857,11.5 L9.94642857,10.125 L13.875,10.125 Z' id='合并形状'></path> </g> <rect id='矩形备份' fill='#E4E4E4' opacity='0' x='0' y='0' width='24' height='24'></rect> </g> </svg>
const butterflyIcon = <svg width="16" height="16" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15528"><path d="M704.192 16H160a96 96 0 0 0-96 96v768a96 96 0 0 0 96 96h704c52.992 0 96-43.008 96-96v-576l-255.808-288z m-0.032 48.992L917.312 304H768a64 64 0 0 1-64-64l0.16-175.008zM928 880a64 64 0 0 1-64 64H160a64 64 0 0 1-64-64v-768a64 64 0 0 1 64-64h512.16L672 240a96 96 0 0 0 96 96h160v544z m-703.84-544H512v32H224.16v-32z m0 192H832v32H224.16v-32z m0 192.032H832v31.968H224.16v-31.968z" p-id="15529" fill="#444D5B"></path></svg>
const attachmentIcon = <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'> <title>menu_uploadfile</title> <g id='PC' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'> <g id='_图标/工具栏/04_幻灯片/置底'> <rect id='Rectangle复制-30' fill='black' opacity='0' x='0' y='0' width='24' height='24'></rect> <g id='编组-25' transform='translate(5.000000, 6.000000)' fill='#464D5A' fillRule='nonzero'> <path d='M1.4,11.6 L13.6,11.6 L13.6,8 L15,8 L15,12 C15,12.5522847 14.5522847,13 14,13 L1,13 C0.44771525,13 0,12.5522847 0,12 L0,8 L1.4,8 L1.4,11.6 Z' id='形状结合'></path> <path d='M8.13,4 L8.13,10 L6.88,10 L6.88,4 L8.13,4 Z M7.5,-1.42108547e-14 L10,4 L5,4 L7.5,-1.42108547e-14 Z' id='形状结合'></path></g></g></g></svg>
const addonsIcon = <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><title>toolbar_add_tool</title><g id="toolbar_add_tool" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect id="矩形备份" fill="#E4E4E4" opacity="0" x="0" y="0" width="24" height="24"></rect><path d="M11,3 C12.3807119,3 13.5,4.11928813 13.5,5.5 L13.5,6 L17.5,6 C17.7761424,6 18,6.22385763 18,6.5 L18,10 L18.5,10 C19.8807119,10 21,11.1192881 21,12.5 C21,13.8807119 19.8807119,15 18.5,15 L18,15 L18,19.5 C18,19.7761424 17.7761424,20 17.5,20 L12.5,20 L12.5,18.25 C12.5,17.6027913 12.0081253,17.0704661 11.3778052,17.0064536 L11.25,17 C10.6027913,17 10.0704661,17.4918747 10.0064536,18.1221948 L10,18.25 L10,20 L4.5,20 C4.22385763,20 4,19.7761424 4,19.5 L4,14 L5.75,14 C6.39720869,14 6.9295339,13.5081253 6.99354639,12.8778052 L7,12.75 C7,12.1027913 6.50812534,11.5704661 5.87780524,11.5064536 L5.75,11.5 L4,11.5 L4,6.5 C4,6.22385763 4.22385763,6 4.5,6 L8.5,6 L8.5,5.5 C8.5,4.11928813 9.61928813,3 11,3 Z M11,4.3 C10.3786797,4.3 9.86764746,4.77219968 9.80619546,5.37730697 L9.8,5.5 L9.8,7.3 L5.3,7.3 L5.3,10.201 L5.81556082,10.2016542 L6.00915184,10.213106 C7.25194796,10.3393188 8.2166395,11.3490004 8.29341689,12.6449496 L8.29834579,12.8155608 L8.28689401,13.0091518 C8.16091978,14.2495986 7.15481375,15.2129913 5.91977257,15.2944197 L5.75,15.3 L5.3,15.3 L5.3,18.7 L8.701,18.7 L8.70165421,18.1844392 L8.71310599,17.9908482 C8.83931881,16.748052 9.84900042,15.7833605 11.1449496,15.7065831 L11.3155608,15.7016542 L11.5091518,15.713106 C12.7495986,15.8390802 13.7129913,16.8451863 13.7944197,18.0802274 L13.8,18.25 L13.8,18.7 L16.7,18.7 L16.7,13.7 L18.5,13.7 C19.1627417,13.7 19.7,13.1627417 19.7,12.5 C19.7,11.8786797 19.2278003,11.3676475 18.622693,11.3061955 L18.5,11.3 L16.7,11.3 L16.7,7.3 L12.2,7.3 L12.2,5.5 C12.2,4.8372583 11.6627417,4.3 11,4.3 Z" id="形状结合备份-2" fill="#464D5A" fillRule="nonzero"></path></g></svg>

export const ToolbarMenuItem: MenuItem[] = [
  {
    value: FORMAT_TYPE_IMAGE,
    label: "图片",
    icon: imageIcon,
  },
  {
    value: FORMAT_TYPE_TABLE,
    label: "表格",
    icon: tableIcon,
  },
  {
    value: FORMAT_TYPE_LINK,
    label: "链接",
    icon: linkIcon,
    description: '⌘+K',
  },
  {
    value: FORMAT_TYPE_CODE,
    label: "代码块",
    icon: codeIcon,
    description: '```+空格',
  },
  {
    value: FORMAT_TYPE_COUNTDOWN,
    label: "倒计时",
    icon: countdownIcon,
  },
  {
    value: FORMAT_TYPE_WORKBENCH,
    label: "流程图",
    icon: flowChartIcon,
  },
  {
    value: FORMAT_TYPE_COMMENT,
    label: "批注",
    icon: commentIcon,
    description: '⌘+⌥+M',
  },
  {
    value: FORMAT_TYPE_SPLIT_LINE,
    label: "分割线",
    icon: splitLineIcon,
  },
  {
    value: FORMAT_TYPE_DIVIDER,
    label: "",
  },
  {
    value: FORMAT_TYPE_BUTTERFLY_LINE,
    label: "Butterfly文档",
    icon: butterflyIcon,
  },
  {
    value: FORMAT_TYPE_ATTACHMENT,
    label: "本地文件",
    icon: attachmentIcon,
  },
  {
    value: FORMAT_TYPE_ADDONS,
    label: "第三方内容",
    icon: addonsIcon,
  },
];
