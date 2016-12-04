var Events = require('events');
var getOrderDelay = function() {
    return Math.floor(Math.random() * 2000 + 3000);
};
var request = function(items, cb) {
    setTimeout(function() {
        cb(items);
    }, getOrderDelay());
};
var requestSync = function(items) {
    var delay = getOrderDelay();
    var stop = new Date().getTime();
    while (new Date().getTime() < stop + delay) {}
    return items;
};
var requestEvent = function(items) {
    var order = new Events();
    setTimeout(function() {
        order.emit('processed', items);
    }, getOrderDelay());
    return order;
};
var serveOrder = function(order) {
    order = order || [];
    if (!order.length) {
        console.log('You ordered nothing!');
        return;
    }
    console.log('You ordered ' + order.join(', ') + '. Have a nice day!');
};
module.exports = {
    request: request,
    requestSync: requestSync,
    requestEvent: requestEvent,
    serveOrder: serveOrder
};

