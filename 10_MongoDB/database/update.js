import db from './connection.js'

db.shops.updateOne({ city: 'Glostrup'}, { $push: { shops:  'new shop' }})