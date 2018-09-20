'use strict';

export const log = (...args) => 
  __DEBUG__ ? console.log('UTIL', ...args) : undefined;


export const logError = (...args) => 
  __DEBUG__ ? console.error('UTIL ERROR', ...args) : undefined;

export const renderIf = (test, component) => test ? component : undefined;

export const classToggler = (options) => 
  Object.keys(options).filter(keys => !!options[keys]).join(' ');
  //helps toggle between error and success classes. 

