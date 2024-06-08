import { boot } from 'quasar/wrappers';
import { createPinia, Pinia } from 'pinia';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $pinia: Pinia;
  }
}

export default boot(({ app }) => {
  const pinia = createPinia();
  app.use(pinia);
});
