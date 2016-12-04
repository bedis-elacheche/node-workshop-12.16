require('./modules/coffeeshop-global');

console.log('Welcome to our awesome cofee shop!');

var orderForTable1 = requestSync(['Coffee', 'Tea', 'Coke']);
serveOrder(orderForTable1);

var orderForTable2 = requestSync(['Pizza', 'Pasta']);
serveOrder(orderForTable2);

var orderForTable3 = requestSync();
serveOrder(orderForTable3);

console.log('Good bye!');

