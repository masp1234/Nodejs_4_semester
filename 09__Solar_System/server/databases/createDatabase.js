import db from "./connection.js"



const isDeleteMode = process.argv.findIndex(argument => argument === "delete_mode") === -1 ? false : true

if (isDeleteMode) {
    db.exec('DROP TABLE planets;')
    db.exec('DROP TABLE people;')
}


// this is DDL - Data Definition Language
// plural table names, like in REST endpoints, since it contains multiple entries - write in snake_case
db.exec(
    `CREATE TABLE IF NOT EXISTS planets(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        size FLOAT,
        is_habitable BOOLEAN NOT NULL
        );`
)

db.exec(`
CREATE TABLE IF NOT EXISTS people (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);
`)
// (Data Manipulation Language  DML
// Seeding - the idea of putting data into your database
if (isDeleteMode) {
    db.exec(`INSERT into planets(name, is_habitable) VALUES ('Mercury', False)`)
    db.exec(`INSERT into planets(name, is_habitable) VALUES ('Venus', False)`)
    db.exec(`INSERT into planets(name, is_habitable) VALUES ('Earth', True)`)
    db.exec(`INSERT into planets(name, is_habitable) VALUES ('Mars', False)`)
    db.exec(`INSERT into planets(name, is_habitable) VALUES ('Jupiter', False)`)
    db.exec(`INSERT into planets(name, is_habitable) VALUES ('Uranus', False)`)
    db.exec(`INSERT into planets(name, is_habitable) VALUES ('Saturn', False)`)
    db.exec(`INSERT into planets(name, is_habitable) VALUES ('Neptune', False)`)

}