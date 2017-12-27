const orderTotal = order => {
    const totalPrice = order.items
        .filter(x => !x.shipping)
        .reduce((pre, cur) => pre + cur.price * (cur.quantity || 1), 0);

    const shippingItem =
        order.items.find(x => !!x.shipping);

    const shipping =
        totalPrice > 100 ? 0 : (shippingItem ? shippingItem.price : 0);

    return totalPrice + shipping;
}

module.exports = orderTotal