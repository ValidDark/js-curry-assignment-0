'use strict'

const entries =
    obj =>
    Object.keys(obj)
    .map(key => [key, obj[key]])

const listing =
    (name, price) => ({
        name,
        price
    })

const customer =
    (name, shoppingList) => ({
        name,
        shoppingList
    })

const cart =
    (customer, ...items) => ({
        customer,
        items
    })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */
const itemRepeater =
    itemName =>
    count => {

        const nArr = []
        for (let i = 0; i < count; ++i) {
            nArr.push(itemName)
        }
        return nArr
    }


const listedPrice =
    listing =>
    name =>
    name === listing.name ?
    listing.price : 0

/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
const constructCarts =
    listings =>
    customers => {
        let test = customers
            .reduce((car, next) => [...car, cart(
                next.name,
                ...entries(next.shoppingList)
                .reduce((cArr, cst) => {
                    return [...cArr, ...itemRepeater(cst[0])(cst[1])]
                }, []).map((itemName) => {

                    let item = {
                        name: itemName,
                        price:
                            listings
                            .map(listedPrice) // map listings array to an array of functions
                            .reduce((price, priceOf) => price + priceOf(itemName), 0)
                    }
                    return item
                })
            )], [])
        return test
    }


module.exports = {
    listing,
    customer,
    constructCarts
}
