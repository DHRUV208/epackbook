import Randexp from 'randexp';
export const generateRandomColors = () => {
  return `#${new Randexp(/^([a-f]){6}$/).gen()}`;
};
export const getAllUnique = (array) => {
  const uniqueObjects = new Set();
  const result = [];

  for (const item of array) {
    const objectString = JSON.stringify(item);

    if (!uniqueObjects.has(objectString)) {
      uniqueObjects.add(objectString);
      result.push(item);
    }
  }

  return result;
};

export const getCookie = (cname) => {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};
export const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
};
export const deleteCookie = (cname) => {
  const d = new Date();
  d.setTime(d.getTime() - 7);
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=;' + expires + ';path=/';
};
