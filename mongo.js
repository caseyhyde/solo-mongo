//1) Create a collection named orders.

  db.createCollection('orders')

//2) Insert at least 3 documents that represent an order. IMPORTANT: See section below for fields.

orders.insert([{
  orderDate: new Date(),
  orderTotal: 225,
  lineItems: [
      {
        unitPrice: 5,
        quantity: 10,
        productName: "kittens"
      },
      {
        unitPrice: 10,
        quantity: 10,
        productName: "puppies"
      },
      {
        unitPrice: 7.5,
        quantity: 10,
        productName: "snakes"
      }
  ]
},
{
  orderDate: new Date(),
  orderTotal: 375,
  lineItems: [
      {
        unitPrice: 25,
        quantity: 5,
        productName: "sex"
      },
      {
        unitPrice: 50,
        quantity: 3,
        productName: "drugs"
      },
      {
        unitPrice: 1,
        quantity: 100,
        productName: "RockNRoll"
      }
  ]
},
{
  orderDate: new Date(),
  orderTotal: 12555,
  lineItems: [
      {
        unitPrice: 0.10,
        quantity: 50,
        productName: "thumbtacks"
      },
      {
        unitPrice: 50,
        quantity: 1,
        productName: "chair"
      },
      {
        unitPrice: 12500,
        quantity: 1,
        productName: "Prime Instructor"
      }
  ]
}]);


//3) Find a single order document, any order document.

  orders.find({orderTotal: 12555});

//4) Find all orders and make them look pretty.

  orders.find().pretty();

//5) Find all orders with an orderDate that is prior to 1/1/2016.

  orders.find({orderDate: {$lt: new Date('2016--01-01')}});


//6) Find all orders with an orderDate that is after 1/1/2016.

  orders.find({orderDate: {$gt: new Date('2016--01-01')}});

//7) Find orders with lineItems that have a quantity that is less than 50, but
greater than 5. HINT: Look at $and and dot notation.

  orders.find({$and: [ {"lineItems.quantity": {$lt: 50}} , {"lineItems.quantity": {$gt: 5}} ] });

//8) Update one of your line items to 42.99. HINT: Look at dot notation

  orders.update( {orderTotal:  375} , { $set: {"lineItems.2.unitPrice": 42.99} } );

//9) Remove one of your orders.

  orders.remove( {orderTotal: 225} );

// -- order fields --
// - orderDate -- see https://docs.mongodb.org/manual/reference/method/Date/
// - orderTotal
// - lineItems -- an array of line item objects with fields
// - unitPrice
// - quantity
// - productName
