import sqlite3 from 'sqlite3'
import { open } from 'sqlite'


// connection open close - one connection is fine because of database locking / file locking

const connection = await open({
    filename: './solar_system.db',
    driver: sqlite3.Database
})

export default connection