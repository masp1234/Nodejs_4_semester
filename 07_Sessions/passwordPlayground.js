// never save passwords in plain text
// if you add encryption - its not 100% secure but better than not doing it
// don't send passwords to the frontend
// blowfish cipher ???
// hashing function - takes some input and turns it into output - can't go back to the input from the output

// save the hashed password in a database
import bcrypt from "bcrypt";

const passwordPlainText = "hunter42";

const passwordPlaintext2 = "notHunter";

const hashedPassword = "$2b$12$3rJ8dpK9pQjTu/3gcZIzYee0EC0hzcsEYv/GbXxZpZ4eU8kRUNmya";

const encryptedPassword = await bcrypt.hash(passwordPlainText, 12);

console.log(encryptedPassword);

const isSame = await bcrypt.compare(passwordPlainText, hashedPassword);
console.log(isSame);