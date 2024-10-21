import { createI18n } from "vue-i18n";
import en from "./en";
import zhTW from "./zhTW";

const messages = {
  en,
  zhTW,
};

const i18n = createI18n({
  locale: "zhTW", // 預設語言
  fallbackLocale: "zhTW",
  messages,
});

export default i18n;
