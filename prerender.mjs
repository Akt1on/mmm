/**
 * Prerender script — запускается после vite build
 * Рендерит все страницы в статический HTML для Яндекс-бота
 * Использует: node prerender.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, 'dist');

// All routes to prerender
const ROUTES = [
  '/',
  '/privacy',
  '/uslugi/asfaltirovaniye-dorog',
  '/uslugi/asfaltirovaniye-dvorov',
  '/uslugi/asfaltirovaniye-parkovok',
  '/uslugi/asfaltirovaniye-snt',
  '/uslugi/yamochnyy-remont',
  '/uslugi/trotuarnaya-plitka',
  '/asfaltirovanie/balashiha',
  '/asfaltirovanie/himki',
  '/asfaltirovanie/mytishchi',
  '/asfaltirovanie/korolev',
  '/asfaltirovanie/podolsk',
  '/asfaltirovanie/lyubertsy',
  '/asfaltirovanie/krasnogorsk',
  '/asfaltirovanie/odintsovo',
  '/asfaltirovanie/domodedovo',
  '/asfaltirovanie/istra',
];

// Route → SEO meta map (injected into <head> of each static HTML)
const ROUTE_META = {
  '/': {
    title: 'Асфальтирование в Москве и МО под ключ — МСК АСФАЛЬТ | Цена от 540 ₽/м²',
    description: 'Асфальтирование дорог, дворов, парковок и СНТ в Москве и МО. Цена от 540 ₽/м². Своя техника, ГОСТ, гарантия 5 лет. Выезд инженера и смета — бесплатно. ☎ +7 913 826-30-70',
  },
  '/privacy': {
    title: 'Политика конфиденциальности — МСК АСФАЛЬТ',
    description: 'Политика обработки персональных данных компании МСК АСФАЛЬТ в соответствии с 152-ФЗ.',
  },
  '/uslugi/asfaltirovaniye-dorog': {
    title: 'Асфальтирование дорог в Москве и МО — цена от 590 ₽/м² | МСК АСФАЛЬТ',
    description: 'Асфальтирование дорог под ключ в Москве и Московской области. Дороги под нагрузку до 40 т. Цена от 590 ₽/м². Выезд инженера бесплатно. ☎ +7 913 826-30-70',
  },
  '/uslugi/asfaltirovaniye-dvorov': {
    title: 'Асфальтирование дворов в Москве — цена от 620 ₽/м² | МСК АСФАЛЬТ',
    description: 'Асфальтирование дворов ЖК, ТСЖ и УК в Москве и МО. Быстро, аккуратно, с гарантией 5 лет. Цена от 620 ₽/м². ☎ +7 913 826-30-70',
  },
  '/uslugi/asfaltirovaniye-parkovok': {
    title: 'Асфальтирование парковок в Москве — от 660 ₽/м² | МСК АСФАЛЬТ',
    description: 'Асфальтирование парковок у ТЦ, БЦ и складов в Москве и МО. Разметка, водоотвод, бордюры. Цена от 660 ₽/м². ☎ +7 913 826-30-70',
  },
  '/uslugi/asfaltirovaniye-snt': {
    title: 'Асфальтирование СНТ и дачных дорог — от 540 ₽/м² | МСК АСФАЛЬТ',
    description: 'Асфальтирование дорог в СНТ, дачных посёлках и коттеджных комплексах Москвы и МО. Цена от 540 ₽/м². ☎ +7 913 826-30-70',
  },
  '/uslugi/yamochnyy-remont': {
    title: 'Ямочный ремонт асфальта в Москве — от 1 800 ₽/м² | МСК АСФАЛЬТ',
    description: 'Ямочный ремонт дорог и дворов в Москве и МО за 1 день. Горячий и холодный метод. Цена от 1 800 ₽/м². ☎ +7 913 826-30-70',
  },
  '/uslugi/trotuarnaya-plitka': {
    title: 'Укладка тротуарной плитки в Москве — от 1 350 ₽/м² | МСК АСФАЛЬТ',
    description: 'Укладка тротуарной плитки и брусчатки в Москве и МО. Подготовка основания, бордюры, дренаж. Цена от 1 350 ₽/м². ☎ +7 913 826-30-70',
  },
  '/asfaltirovanie/balashiha': { title: 'Асфальтирование в Балашихе — цена от 540 ₽/м² | МСК АСФАЛЬТ', description: 'Асфальтирование дорог, дворов, парковок и СНТ в Балашихе. Своя техника, гарантия 5 лет. Цена от 540 ₽/м². ☎ +7 913 826-30-70' },
  '/asfaltirovanie/himki': { title: 'Асфальтирование в Химках — цена от 540 ₽/м² | МСК АСФАЛЬТ', description: 'Асфальтирование дорог, дворов, парковок и СНТ в Химках. Цена от 540 ₽/м². ☎ +7 913 826-30-70' },
  '/asfaltirovanie/mytishchi': { title: 'Асфальтирование в Мытищах — цена от 540 ₽/м² | МСК АСФАЛЬТ', description: 'Асфальтирование дорог, дворов, парковок и СНТ в Мытищах. Цена от 540 ₽/м². ☎ +7 913 826-30-70' },
  '/asfaltirovanie/korolev': { title: 'Асфальтирование в Королёве — цена от 540 ₽/м² | МСК АСФАЛЬТ', description: 'Асфальтирование дорог, дворов и парковок в Королёве. Цена от 540 ₽/м². ☎ +7 913 826-30-70' },
  '/asfaltirovanie/podolsk': { title: 'Асфальтирование в Подольске — цена от 540 ₽/м² | МСК АСФАЛЬТ', description: 'Асфальтирование дорог, дворов и парковок в Подольске и Подольском районе. Цена от 540 ₽/м². ☎ +7 913 826-30-70' },
  '/asfaltirovanie/lyubertsy': { title: 'Асфальтирование в Люберцах — цена от 540 ₽/м² | МСК АСФАЛЬТ', description: 'Асфальтирование дорог, дворов и промзон в Люберцах. Цена от 540 ₽/м². ☎ +7 913 826-30-70' },
  '/asfaltirovanie/krasnogorsk': { title: 'Асфальтирование в Красногорске — цена от 540 ₽/м² | МСК АСФАЛЬТ', description: 'Асфальтирование дорог, дворов и парковок в Красногорске. Цена от 540 ₽/м². ☎ +7 913 826-30-70' },
  '/asfaltirovanie/odintsovo': { title: 'Асфальтирование в Одинцово — цена от 540 ₽/м² | МСК АСФАЛЬТ', description: 'Асфальтирование дорог и коттеджных посёлков в Одинцово. Цена от 540 ₽/м². ☎ +7 913 826-30-70' },
  '/asfaltirovanie/domodedovo': { title: 'Асфальтирование в Домодедово — цена от 540 ₽/м² | МСК АСФАЛЬТ', description: 'Асфальтирование логистических парков и СНТ в Домодедово. Цена от 540 ₽/м². ☎ +7 913 826-30-70' },
  '/asfaltirovanie/istra': { title: 'Асфальтирование в Истре — цена от 540 ₽/м² | МСК АСФАЛЬТ', description: 'Асфальтирование СНТ и коттеджных посёлков в Истре и Истринском районе. Цена от 540 ₽/м². ☎ +7 913 826-30-70' },
};

// Schema.org snippets for each route type
function buildSchema(route) {
  const meta = ROUTE_META[route] || {};
  const url = `https://mskasfalt.ru${route}/`;

  const base = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://mskasfalt.ru/#org',
    name: 'МСК АСФАЛЬТ',
    telephone: '+79138263070',
    url: 'https://mskasfalt.ru/',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'МКАД 41 км, БЦ «Технопарк»',
      addressLocality: 'Москва',
      addressCountry: 'RU',
    },
  };

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://mskasfalt.ru/' },
      ...(route !== '/' ? [{ '@type': 'ListItem', position: 2, name: meta.title?.split('—')[0].trim(), item: url }] : []),
    ],
  };

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': [base, breadcrumb] });
}

// Read base HTML template
const template = readFileSync(join(DIST, 'index.html'), 'utf-8');

let count = 0;
for (const route of ROUTES) {
  const meta = ROUTE_META[route] || {};
  const url = `https://mskasfalt.ru${route === '/' ? '' : route}/`;
  const schema = buildSchema(route);

  // Build injected head tags
  const headTags = `
    <title>${meta.title || 'МСК АСФАЛЬТ'}</title>
    <meta name="description" content="${meta.description || ''}">
    <link rel="canonical" href="${url}">
    <meta property="og:title" content="${meta.title || ''}">
    <meta property="og:description" content="${meta.description || ''}">
    <meta property="og:url" content="${url}">
    <meta property="og:type" content="website">
    <script type="application/ld+json">${schema}</script>`;

  // Inject into template — replace <head> marker
  let html = template.replace(
    '<!-- PRERENDER_HEAD -->',
    headTags
  );

  // Fallback: inject after <head>
  if (html === template) {
    html = template.replace('<head>', '<head>' + headTags);
  }

  // Write to dist
  if (route === '/') {
    writeFileSync(join(DIST, 'index.html'), html);
  } else {
    const dir = join(DIST, ...route.split('/').filter(Boolean));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html);
  }

  count++;
  console.log(`✓ ${route}`);
}

console.log(`\nPrerendered ${count} pages`);
