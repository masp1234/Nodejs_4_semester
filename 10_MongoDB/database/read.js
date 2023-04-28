import db from './connection.js'


const foundShops = await db.shops.find().toArray();
console.log(foundShops)