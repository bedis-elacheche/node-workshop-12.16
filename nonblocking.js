require('./modules/coffeeshop-global');

console.log('Welcome to our awesome cofee shop!');

request(['Coffee', 'Tea', 'Coke'], serveOrder);

request(['Pizza', 'Pasta'], serveOrder);

request(null, serveOrder);

console.log('Good bye!');

