// for i
const cartItemList = [
  { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
  { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
]

// export function calcCartTotal(cartItemList) {
//   if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0
//   let sum = 0
//   for (let i = 0; i < cartItemList.length; i++) {
//     const item = cartItemList[i]
//     const itemTotal = item.product.price * item.quantity
//     sum += itemTotal
//   }
//   return sum
// }

// console.log(calcCartTotal(cartItemList)) // 250000 = 50 x 1 + 100000 x 2

//using reduce
export function calcCartTotal(cartItemList) {
  if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0

  return cartItemList.reduce((sum, item) => {
    const itemTotal = item.product.price * item.quantity
    return sum + itemTotal
  }, 0) //gia tri khoi tao, let sum = 0
}
