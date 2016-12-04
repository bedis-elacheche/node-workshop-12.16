var coffeeShop = require('./coffeeshop');

Object.keys(coffeeShop).forEach(function(func) {
    global[func] = coffeeShop[func];
});