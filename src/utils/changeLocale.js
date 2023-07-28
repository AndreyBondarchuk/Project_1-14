export function getLocaleFromUrl() {
  const pathSegments = window.location.pathname.split('/');
  let locale = 'en';
  let locales = ['en', 'ua', 'fr'];
  for (const segment of pathSegments) {
    for (const localeIndex of locales) {
      if (segment === localeIndex) {
        return segment;
      }
    }
  }

  return locale;
}