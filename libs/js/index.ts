import { find, keys, toString } from "lodash";

export const _listenEvent = {
  add(fnc: () => void) {
    window.addEventListener("wheel", fnc);
    window.addEventListener("resize", fnc);
    window.addEventListener("orientationchange", fnc);
    window.addEventListener("load", fnc);
    window.addEventListener("reload", fnc);
  },
  remove(fnc: () => void) {
    window.removeEventListener("wheel", fnc);
    window.removeEventListener("resize", fnc);
    window.removeEventListener("orientationchange", fnc);
    window.removeEventListener("load", fnc);
    window.removeEventListener("reload", fnc);
  },
};

export const _get = {
  Column({ column = 0, gap = "1rem" }) {
    if (!column) {
      return "auto";
    } else {
      return `calc(100% / ${column} - ${gap} * ((${column} - 1) / ${column}) `;
    }
  },
  Breakpoint({ breakpoint, listRect, defaults = 0 }: $Breakpoint) {
    const _keys = keys(breakpoint);
    if (listRect) {
      const fKey = find(
        _keys,
        (key) => Number(key) >= parseInt(toString(listRect?.width), 10),
      );
      if (fKey) {
        return breakpoint[fKey];
      }
    }
    return defaults;
  },
};

type $Breakpoint = {
  breakpoint: Record<string, number>;
  listRect?: DOMRect;
  defaults?: number;
};
