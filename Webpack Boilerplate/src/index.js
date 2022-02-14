import {styleBody, addTitle, contact} from './dom';
import users, { getPremiumUsers } from './data';

console.log('index file');
addTitle('test');
styleBody();
console.log(contact);

const premiumUsers = getPremiumUsers(users);
console.log(users, premiumUsers);

console.log('test');