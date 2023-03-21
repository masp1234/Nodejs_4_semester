import express from 'express'
import { logger } from './util/logger.js'

const app = express()

const middlewareFunction1 = (req, res, next) => {
    console.log('this is middleware function 1')
    next()
}
const middlewareFunction2 = (req, res, next) => {
    console.log('this is middleware function 2')
    next()
}
const middlewareFunction3 = (req, res, next) => {
    console.log('this is middleware function 3')
    next()
}

const messStringUp = (req, res, next) => {
    req.query.randomString += ' string is now messed up'
    next()
}

app.use(middlewareFunction3);
app.use(logger);
app.use(middlewareFunction2);
app.use(middlewareFunction1);




app.get('/test', messStringUp, (req, res, next) => {
    console.log(req.query)
    res.send('hello')
})

app.get('/', (req, res, next) => {
    console.log(req.query)
    res.send('<h1>Hello</h1>')
})

app.listen(8080, () => {
    console.log('server is listening')
})