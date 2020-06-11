export function isIE() {
  return typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('trident') !== -1;
}

export function isEdge() {
  return typeof navigator !== 'undefined' && /Edge\/\d./i.test(navigator.userAgent)
}

export function removeHtml() {
  const div = document.createElement("div");
  div.innerHTML = "<p>This week, we’re glad to be shedding some more light on the ever-changing world of eCommerce and business in Brazil, especially now that we have some really special news for our users living and trading there. The Special News First things first, we here at CardPay are proud to announce that we have successfully taken [&hellip;]</p>";
  return  div.textContent || div.innerText || "";
}
