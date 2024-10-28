import uz from "../lang/uz";
import ru from "../lang/ru";
import eng from "../lang/eng";

import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  locale: "ru",
  fallbackLocale: "ru",
  messages: {
    uz,
    ru,
    eng,
  },
});

export default i18n;
