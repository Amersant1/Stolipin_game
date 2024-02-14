export function setCookie(cookieName, cookieValue, cookieExpiresDays=360, cookieSameSite="Strict") {
  const expiresDate = new Date();
  expiresDate.setTime(expiresDate.getTime() + (cookieExpiresDays * 24 * 60 * 60 * 1000))
  document.cookie = `${cookieName}=${cookieValue};expires=${expiresDate.toUTCString()};path=/;SameSite=${cookieSameSite}`;
}

export function getCookie(getCookieName) {
  const cookiesArr = decodeURIComponent(document.cookie).split(';');
  for(let cookie of cookiesArr) {
    let [cookieName, cookieValue] = cookie.split("=");

    if(cookieName.replace(/^\s+|\s+$/g, '') == getCookieName.replace(/^\s+|\s+$/g, '')) {
      return cookieValue;
    }
  }
  return undefined;
}
