require('./modules/coffeeshop-global');

console.log('Welcome to our awesome cofee shop!');

var orderForTable1 = requestEvent(['Coffee', 'Tea', 'Coke']);
orderForTable1.on('processed', serveOrder);

var orderForTable2 = requestEvent(['Pizza', 'Pasta']);
orderForTable2.on('processed', serveOrder);

var orderForTable3 = requestEvent();
orderForTable3.on('processed', serveOrder);

console.log('Good bye!');
