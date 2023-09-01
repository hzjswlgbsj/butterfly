import Log from "../log/Log";
import { CursorData } from "../types";

export function getRandomColor() {
  return (
    "#" + ("00000" + ((Math.random() * 0x1000000) << 0).toString(16)).substr(-6)
  );
}
export function decode(origin?: string) {
  if (!origin) {
    return "";
  }
  return decodeURIComponent(escape(atob(origin)));
}

export function encode(origin?: string) {
  if (!origin) {
    return "";
  }
  try {
    return btoa(unescape(encodeURIComponent(origin)));
  } catch (error) {
    Log.debug("encode error", origin);
    throw error;
  }
}

export function getUUID() {
  const s = [];
  const hexDigits = "0123456789abcdef";
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] && 0x3) || 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  const uuid = s.join("");
  return uuid;
}

export function randomCursorData(name?: string): CursorData {
  return {
    color: getRandomColor(),
    name: name ? name : getUUID(),
  };
}

// 给css3相关属性增加浏览器前缀，处理浏览器兼容性问题
let elementStyle = document.createElement("div").style;

let vendor = (() => {
  //首先通过transition属性判断是何种浏览器
  let transformNames: any = {
    webkit: "webkitTransform",
    Moz: "MozTransform",
    O: "OTransfrom",
    ms: "msTransform",
    standard: "Transform",
  };
  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key;
    }
  }
  return false;
})();

export function prefixStyle(style: string) {
  if (vendor === false) {
    return false;
  }
  if (vendor === "standard") {
    return style;
  }
  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}

export const generateRandomColor = () => {
  const letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
