'use strict';

export const photoToDataUrl = file => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.addEventListener('load', () => {
      resolve(reader.result);
    });

    reader.addEventListener('error', () => {
      reject(reader.error);
    });

    if (file) {
      return reader.readAsDataURL(file);
    }
    return reject(new Error('user error, file required'));
   });
}

//got from stackoverflow: https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
export const readCookie = (name) => {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

export const log = (...args) => 
  __DEBUG__ ? console.log('UTIL', ...args) : undefined;


export const logError = (...args) => 
  __DEBUG__ ? console.error('UTIL ERROR', ...args) : undefined;

export const renderIf = (test, component) => test ? component : undefined;

export const classToggler = (options) => 
  Object.keys(options).filter(keys => !!options[keys]).join(' ');
  //helps toggle between error and success classes. 

//stand alone functions
export const map = (list, ...args) => 
  Array.prototype.map.apply(list, args);

  export const filter = (list, ...args) => 
  Array.prototype.filter.apply(list, args);

export const reduce = (list, ...args) =>
  Array.prototype.reduce.apply(list, args);
