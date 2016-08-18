'use strict'

const util = require('util')

const {
  listing,
  customer,
  constructCarts
} = require('./lib.js')

const listings = [
  listing('detergent', 10),
  listing('hennessey', 100),
  listing('carlo rozzi', 20),
  listing('coffee', 5),
  listing('cookies', 6),
  listing('mountain dew', 2)
]

const customers = [
  customer('adam', {
    'carlo rozzi': 6
  }),
  customer('david', {
    detergent: 1,
    hennessey: 1,
    coffee: 1
  }),
  customer('michael', {
    coffee: 3,
    hennessey: 3
  }),
  customer('dillon', {
    cookies: 3,
    'mountain dew': 3
  })
]

const carts = constructCarts(listings)

carts(customers)
  .forEach(cart => console.log(`${cart.customer}, your cart contains\n ${util.inspect(cart.items)}`))
