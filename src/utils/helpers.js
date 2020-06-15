export function isIE() {
  return typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('trident') !== -1;
}

export function isEdge() {
  return typeof navigator !== 'undefined' && /Edge\/\d./i.test(navigator.userAgent)
}

export function removeHtml(html) {
  return  html.replace(/<[^>]*>?/gm, '');
}

export function removeReactHelmetAttr(str) {
  return str.replace(/\ data-react-helmet="true"/gi, '');
}
