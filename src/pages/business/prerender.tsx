import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import BusinessPage from '@/pages/business/BusinessPage';
import { businessConfig } from '@/config/business';
import type { BusinessPageKey } from '@/config/businessPages';

export async function renderBusinessPage(pageKey: BusinessPageKey) {
  await i18n.changeLanguage('es');
  return renderToString(<I18nextProvider i18n={i18n}><StaticRouter location={businessConfig.urls.services[pageKey]}><BusinessPage pageKey={pageKey} prerender /></StaticRouter></I18nextProvider>);
}
