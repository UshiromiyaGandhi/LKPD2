const express = require('express')
const app = express()
const connectDB = require('./config/db')
const userRouter = require('./router/users')

const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.use(userRouter)

connectDB()

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})