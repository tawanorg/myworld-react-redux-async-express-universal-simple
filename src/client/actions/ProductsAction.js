export const PRODUCTS_PENDING = 'PRODUCTS_PENDING'
export const PRODUCTS_RECEIVED = 'PRODUCTS_RECEIVED'
export const PRODUCTS_REJECT = 'PRODUCTS_REJECT'

export const productPending = () => {
  return {
    type: PRODUCTS_PENDING
  }
}

export const productsReceived = (products) => {
  return {
    type: PRODUCTS_RECEIVED,
    data: products.data,
    receivedAt: Date.now()
  }
}


export const productsReject = (error) => {
  return {
    type: PRODUCTS_REJECT,
    data: error
  }
}