require('@babel/register')
const express = require('express')
const session = require('express-session')

const path = require('path')
const renderComponent = require('./middleware/renderComponent')
const getUser = require('./middleware/getUser')
const sessionConfig = require('./config/session')


const app = express()
const PORT = 3000

app.use(session(sessionConfig))
app.use(express.static(path.join(__dirname, 'public')))
app.use(getUser)
app.use(renderComponent)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const albumRouter = require('./public/routes/views/album.routes')
const authRouter = require('./public/routes/views/auth.router')
const photoRouts = require('./public/routes/views/photo.routes')
const regoLogoApi = require('./public/routes/api/regoLogoApi.routes')

app.use('/', albumRouter)
app.use('/album', photoRouts)
app.use('/auth', authRouter)
app.use('/api/auth',regoLogoApi)

app.listen(PORT, () => { console.log(`сервер восстал в ${PORT} аду`); });