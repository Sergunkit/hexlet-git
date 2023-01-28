const emails = [
  'info@gmail.com',
  'info@yandex.ru',
  'info@hotmail.com',
  'mk@host.com',
  'support@hexlet.io',
  'key@yandex.ru',
  'sergey@gmail.com',
  'vovan@gmail.com',
  'vovan@hotmail.com',
];


import _ from 'lodash';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];
const [, c] = 'vovan@hotmail.com'.split('@')
console.log(c)
//console.log(freeEmailDomains.includes(('vovan@hotmail.com'.split('@'))[1]))

const getFreeDomainsCount = (emails) => emails
  .map(email =>  (email.split('@'))[1])
  .filter((email) => freeEmailDomains.includes(email))
  .reduce((acc, email) => {
    acc[email] = (acc[email] ?? 0) + 1
    return acc
   }, {});


export default getFreeDomainsCount;
console.log(getFreeDomainsCount(emails));



