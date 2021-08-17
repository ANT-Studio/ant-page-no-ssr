import { TranslationKey } from "./interfaces";
import { useI18n } from "vue-i18n";

export const __ = (key: TranslationKey, replace?: Record<string, string>) => {
  const i18n = useI18n();

  return i18n.t(key);
};
