/***
 * @param {*} products
 * @returns {num}sum
 */
export const totalPrice = (products) =>{
    let sum = 0;
    products.forEach(product => sum += (product.quantity*product.price));
    return sum;
};