export type IColor = {
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
};

export const colors = {
  white: {
    100: '#ffffff',
    200: '#f2f2f2',
    300: '#e6e6e6',
    400: '#d9d9d9',
    500: '#cccccc',
    600: '#b3b3b3',
    700: '#999999',
    800: '#808080',
    900: '#666666',
  },
  black: {
    100: '#000000',
    200: '#1a1a1a',
    300: '#333333',
    400: '#4d4d4d',
    500: '#666666',
    600: '#808080',
    700: '#999999',
    800: '#b3b3b3',
    900: '#cccccc',
  },
  grey: {
    100: '#f2f2f2',
    200: '#e6e6e6',
    300: '#d9d9d9',
    400: '#cccccc',
    500: '#bfbfbf',
    600: '#b3b3b3',
    700: '#a6a6a6',
    800: '#999999',
    900: '#8c8c8c',
  },
  red: {
    100: '#ffe8e8',
    200: '#ffc8c8',
    300: '#ffaaaa',
    400: '#ff8b8b',
    500: '#ff6c6c',
    600: '#ff4d4d',
    700: '#ff2e2e',
    800: '#ff0f0f',
    900: '#e60000',
  },
  lavender: {
    100: '#f3e8ff',
    200: '#dac0ff',
    300: '#c197ff',
    400: '#a66dff',
    500: '#8c42ff',
    600: '#7328ff',
    700: '#590eff',
    800: '#3f00ff',
    900: '#2400e6',
  },
  mint: {
    100: '#e8fff6',
    200: '#c0ffed',
    300: '#97ffe4',
    400: '#6dffda',
    500: '#42ffd1',
    600: '#28ffca',
    700: '#0effc0',
    800: '#00ffb7',
    900: '#00e6a0',
  },
  peach: {
    100: '#ffe8e3',
    200: '#ffd2c7',
    300: '#ffbbab',
    400: '#ffa58e',
    500: '#ff8f72',
    600: '#ff794e',
    700: '#ff633a',
    800: '#ff4d26',
    900: '#e63d16',
  },
  bg: {} as IColor,
  primary: {} as IColor,
  secondary: {} as IColor,
  trinary: {} as IColor,
  muted: {} as IColor,
};

colors.bg = colors.white;
colors.primary = colors.black;
colors.secondary = colors.lavender;
colors.trinary = colors.peach;
colors.muted = colors.grey;
