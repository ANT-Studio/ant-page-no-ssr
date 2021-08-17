import Translation from "./locales/en.json";

export interface IRoute {
  label: TranslationKey;
  link: string;
  params?: Record<string, any>;
}

export interface IAction {
  icon: string;
  link: string;
}

export type ColorMode = "dark" | "light";

export type ColorModeTheme = () => {
  getTheme: () => Promise<ColorMode>;
  setTheme: (theme: ColorMode) => void;
  toggleTheme: () => void;
};

export type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `${TKey}`
  >;
}[keyof TObj & (string | number)];

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    RecursiveKeyOfAccess<TKey>
  >;
}[keyof TObj & (string | number)];

type RecursiveKeyOfHandleValue<
  TValue,
  Text extends string
> = TValue extends object
  ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
  : Text;

type RecursiveKeyOfAccess<TKey extends string | number> = `.${TKey}`;

export type TranslationKey = RecursiveKeyOf<typeof Translation>;
