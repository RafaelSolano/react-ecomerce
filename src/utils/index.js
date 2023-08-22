/**
 *This function calculate total price  of a new order
 * @param {Array} products cart Product: Array of Object
 * @returns {number} Total Price
 */
export const totalPrice = (products) => {
  return products.reduce((sum, product)=> sum + product.price,0)
}
