
const orderTotal = require('./order-total');

it('Quantity', () => {
    expect(orderTotal({
        items: [{ name: 'Dragon Food', price: 20, quantity: 8 }]
    })).toBe(160)
})

it('No Quantity', () => {
    expect(orderTotal({
        items: [{ name: 'Dragon Food', price: 2 }]
    })).toBe(2)
})

it('No shipping cost', () => {
    expect(orderTotal({
        items: [
            { name: 'Dragon Food', price: 20, quantity: 8 },
            { name: 'Dragon Food (Nuts)', price: 25, quantity: 8 },
            { name: 'Shipping', price: 10, shipping: true },
        ]
    })).toBe(360)
})

it('Shipping cost', () => {
    expect(orderTotal({
        items: [
            { name: 'Dragon Food', price: 20, quantity: 1 },
            { name: 'Dragon Food (Nuts)', price: 25, quantity: 2 },
            { name: 'Shipping', price: 10, shipping: true },
        ]
    })).toBe(80)
})

