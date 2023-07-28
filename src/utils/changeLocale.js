export function getLocaleFromUrl() {
  const pathSegments = window.location.pathname.split('/');
  const locale = pathSegments[1];
  return locale;
}