import { memo } from 'react';
import { ActionButtonProps } from '../../types';
import { FORMAT_TYPE_UNDO, FORMAT_TYPE_REDO, FORMAT_TYPE_FORMAT_PAINT, FORMAT_TYPE_CLEAR_FORMAT, FORMAT_TYPE_FONT_SIZE_INCREASE, FORMAT_TYPE_FONT_SIZE_DECREASE, FORMAT_TYPE_BOLD, FORMAT_TYPE_ITALIC, FORMAT_TYPE_UNDERLINE, FORMAT_TYPE_STRIKE_THROUGH, FORMAT_TYPE_QUOTE, FORMAT_TYPE_SUB, FORMAT_TYPE_SUP, FORMAT_TYPE_LIGHT_BLOCK } from '../../consts';
import { IconActive, IconContainer, IconWrapper } from './style';
import Tooltip from '../../ui/Tooltip';


const undoIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 10.9a.2.2 0 01-.302.173L4.276 8.474a.2.2 0 01-.01-.339l4.423-2.93a.2.2 0 01.31.167v2.252l5 .001c3.149 0 5.626 2.306 5.626 5.375 0 3.033-2.4 5.505-5.404 5.62l-.221.005H7v-1.25h7A4.375 4.375 0 0018.375 13c0-2.289-1.788-4.02-4.158-4.12L14 8.875H9V10.9z" fill="#454D5A"></path></svg>
const redoIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 10.9a.2.2 0 00.302.173l4.422-2.599a.2.2 0 00.01-.339l-4.423-2.93a.2.2 0 00-.31.167v2.252l-5 .001c-3.149 0-5.626 2.306-5.626 5.375 0 3.033 2.4 5.505 5.404 5.62l.221.005h7v-1.25h-7A4.375 4.375 0 015.625 13c0-2.289 1.788-4.02 4.158-4.12L10 8.875h5V10.9z" fill="#454D5A"></path></svg>
const formatPaintIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.5 5h13a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-4.23l-1.52 1.489V14h.75v4.078L10.5 20v-6h1v-2h.008l-.001-.001 1.02-.999H5.5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5zm.75 1.25v3.5h11.5v-3.5H6.25z" fill="#454D5A"></path></svg>
const clearFormatIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 18.25h14v1.25H5v-1.25zM7.167 17l-2.92-2.92a.487.487 0 01.013-.688l8.405-8.405a.487.487 0 01.688-.013l5.4 5.4c.166.166.18.427.045.62l-.058.068L12.802 17h-1.689l2.93-2.93-4.387-4.388-4.028 4.028L8.918 17H7.167z" fill="#454D5A"></path><path fillRule="evenodd" clipRule="evenodd" d="M7 15.75h6L12 17H8l-1-1.25z" fill="#454D5A"></path></svg>
const fontSizeIncreaseIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.895 5h-1.789L5 19h1.493l1.459-4h6.098l1.459 4h1.493L11.895 5zm1.68 8.7l-2.574-7.06-2.575 7.06h5.15z" fill="#454D5A"></path><path d="M17.351 5.35h1.3v2.5h2.35v1.3h-2.35v2.2h-1.3v-2.2h-2.35v-1.3h2.35v-2.5z" fill="#454D5A"></path></svg>
const fontSizeDecreaseIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.895 5h-1.789L5 19h1.493l1.459-4h6.098l1.459 4h1.493L11.895 5zm1.68 8.7l-2.574-7.06-2.575 7.06h5.15z" fill="#454D5A"></path><path d="M21.001 7.85h-6v1.3h6v-1.3z" fill="#454D5A"></path></svg>
const boldIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.3 6.8h4.2a2.2 2.2 0 010 4.4H8.3V6.8zM7 5.5h5.5a3.5 3.5 0 012.34 6.103 3.75 3.75 0 01-1.59 7.147H7V5.5zm1.3 7.05h4.95a2.45 2.45 0 110 4.9H8.3v-4.9z" fill="#454D5A"></path></svg>
const italicIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10 6.375c0-.345.28-.625.625-.625h5.25a.625.625 0 110 1.25h-1.708l-3.334 10h2.042a.625.625 0 110 1.25h-5.75a.625.625 0 110-1.25h2.208l3.334-10h-2.042A.625.625 0 0110 6.375z" fill="#454D5A"></path></svg>
const underlineIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 18.3v1.3H5v-1.3h13zM8.4 5v7.5a3.1 3.1 0 002.924 3.095l.176.005a3.1 3.1 0 003.095-2.924l.005-.176V5H16v7.5a4.5 4.5 0 11-9 0V5h1.4z" fill="#454D5A"></path></svg>
const strikeThroughIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.434 10.657c.041.047.084.092.128.136h2.881l-.072-.032-.044-.02c-.463-.207-.822-.368-1.097-.548a2.473 2.473 0 01-.747-.682A1.709 1.709 0 019.16 8.48a1.885 1.885 0 01.707-1.528 2.855 2.855 0 011.848-.609 4.154 4.154 0 013.028 1.29l.808-.97A5.244 5.244 0 0011.715 5a4.598 4.598 0 00-2.02.454 3.591 3.591 0 00-1.504 1.25 3.316 3.316 0 00-.515 1.816 2.972 2.972 0 00.758 2.137zM13.088 13.25H5V12h14v1.25h-3.522c.373.577.555 1.264.517 1.96a3.58 3.58 0 01-.545 1.94 3.71 3.71 0 01-1.545 1.353 5.26 5.26 0 01-2.342.496 6.022 6.022 0 01-2.544-.537A6.245 6.245 0 017 16.986l.909-1.033c.472.53 1.042.962 1.675 1.27.631.307 1.321.466 2.02.465a3.289 3.289 0 002.13-.64 2.317 2.317 0 00.504-2.84 2.132 2.132 0 00-.726-.722c-.14-.081-.281-.16-.424-.236z" fill="#454D5A"></path></svg>
const quoteIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5 6h1.199v13H5V6zm5 11c1.956-.957 4.164-4.128 4.164-6.968 0-1.755-1.1-3.032-2.414-3.032-1.375 0-2.078 1.053-2.078 2.074 0 1.15.764 2.043 1.925 2.043.337 0 .642-.128.825-.255 0 1.404-1.444 4.255-3.094 5.117L10 17zm5.822 0c1.956-.957 4.165-4.128 4.165-6.968 0-1.755-1.1-3.032-2.414-3.032-1.375 0-2.078 1.053-2.078 2.074 0 1.15.764 2.043 1.925 2.043.336 0 .642-.128.825-.255 0 1.404-1.445 4.255-3.095 5.117L15.822 17z" fill="#454D5A"></path></svg>
const subIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.905 12l4.137 5.057-1.084.886L11 13.105l-3.958 4.838-1.083-.886L10.095 12 5.958 6.943l1.084-.886L11 10.895l3.959-4.838 1.083.886L11.905 12zM21 19v-1.025h-2.576c.135-.202.29-.379.467-.53.177-.151.358-.292.545-.424.187-.132.372-.265.556-.4.185-.134.35-.284.495-.449.145-.165.262-.354.35-.567.088-.213.132-.468.132-.765 0-.285-.05-.543-.152-.773a1.71 1.71 0 00-1.003-.941A2.022 2.022 0 0019.1 13c-.326 0-.616.06-.867.18-.252.121-.46.29-.627.505-.166.215-.29.468-.373.756-.083.289-.12.6-.11.937h1.06c0-.157.013-.315.042-.475.029-.16.076-.305.144-.437a.889.889 0 01.268-.319.675.675 0 01.409-.122c.239 0 .434.08.587.24.154.16.23.382.23.668 0 .179-.038.339-.113.479-.075.14-.168.266-.28.378a2.566 2.566 0 01-.37.306 23.838 23.838 0 00-1.047.786c-.21.168-.392.352-.548.55a2.416 2.416 0 00-.37.677A2.63 2.63 0 0017 19h4z" fill="#454D5A"></path></svg>
const supIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.905 12l4.137 5.057-1.084.886L11 13.105l-3.958 4.838-1.083-.886L10.095 12 5.958 6.943l1.084-.886L11 10.895l3.959-4.838 1.083.886L11.905 12zM21 12.057V11.03h-2.576a2.59 2.59 0 01.467-.529c.177-.151.358-.293.545-.424.187-.132.372-.265.556-.4.185-.134.35-.284.495-.45.145-.164.262-.353.35-.566.088-.213.132-.468.132-.765 0-.286-.05-.543-.152-.773a1.71 1.71 0 00-1.003-.941 2.024 2.024 0 00-.713-.126c-.326 0-.616.06-.867.18a1.71 1.71 0 00-.627.505c-.166.215-.29.467-.373.756-.083.288-.12.6-.11.937h1.06c0-.157.013-.315.042-.475.029-.16.076-.305.144-.437a.89.89 0 01.268-.32.675.675 0 01.409-.121c.239 0 .434.08.587.24.154.159.23.382.23.667 0 .18-.038.34-.113.48a1.62 1.62 0 01-.28.378 2.573 2.573 0 01-.37.306c-.134.093-.262.184-.38.273a24.05 24.05 0 00-.666.513c-.21.168-.393.351-.549.55a2.417 2.417 0 00-.37.677 2.63 2.63 0 00-.136.89h4z" fill="#454D5A"></path></svg>
const lightBlockIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.25 10.75v-4.5h13.5v4.5H5.25zM4 6a1 1 0 011-1h14a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V6zm0 8.4h16v1.25H4V14.4zm0 3.35h8V19H4v-1.25z" fill="#454D5A"></path></svg>
// const Icon = 


export const ICON_MAP: { [type: string]: JSX.Element } = {
  [FORMAT_TYPE_UNDO]: undoIcon,
  [FORMAT_TYPE_REDO]: redoIcon,
  [FORMAT_TYPE_FORMAT_PAINT]: formatPaintIcon,
  [FORMAT_TYPE_CLEAR_FORMAT]: clearFormatIcon,
  [FORMAT_TYPE_FONT_SIZE_INCREASE]: fontSizeIncreaseIcon,
  [FORMAT_TYPE_FONT_SIZE_DECREASE]: fontSizeDecreaseIcon,
  [FORMAT_TYPE_BOLD]: boldIcon,
  [FORMAT_TYPE_ITALIC]: italicIcon,
  [FORMAT_TYPE_UNDERLINE]: underlineIcon,
  [FORMAT_TYPE_STRIKE_THROUGH]: strikeThroughIcon,
  [FORMAT_TYPE_QUOTE]: quoteIcon,
  [FORMAT_TYPE_SUB]: subIcon,
  [FORMAT_TYPE_SUP]: supIcon,
  [FORMAT_TYPE_LIGHT_BLOCK]: lightBlockIcon,
}



const Button: React.FC<ActionButtonProps> = ({ id, type, active, disabled, onClick }) => {
  const icon = ICON_MAP[type]
  return (
    <IconContainer
      onMouseDown={(event: React.MouseEvent) => {
        event.preventDefault();
        onClick && onClick();
      }}
    >
      <IconActive active={active} disabled={disabled}>
        <IconWrapper id={id}>
          {icon}
        </IconWrapper>
      </IconActive>
    </IconContainer>
  )

};

const ActionButton: React.FC<ActionButtonProps> = (props: ActionButtonProps) => {
  return (
    <Tooltip floatingElement={props.tooltip} referenceElement={Button(props)} placement='bottom' />
  )
};



export default memo(ActionButton);