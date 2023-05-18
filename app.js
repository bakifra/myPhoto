require('@babel/register')
const express = require('express')
const session = require('path')
const path = require('path')
const renderComponent = require('./middleware/renderComponent')
// const getUser = require('./middleware/getUser')
// const sessionConfig = require('./config/session')


const app = express()
const PORT = 3000

// app.use(session(sessionConfig))
app.use(express.static(path.join(__dirname, '#')))
app.use(renderComponent)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(getUser);
const albumRouter = require('./public/routes/views/album.routes')

app.use('/', albumRouter)

app.listen(PORT, () => { console.log(`сервер восстал в ${PORT} аду`); });