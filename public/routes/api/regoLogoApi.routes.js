const apiRegLog = require('express').Router()
const bcrypt = require('bcrypt')

const {User} = require('../../../db/models')


apiRegLog.post('/register', async (req,res)=>{
    try {
        const {name, password, password2} = req.body
        console.log(req.body);
        if(password !== password2){
            res.status(403).json({ success: false, message: 'Пароли не совпадают' })
            return
        }

        if(!(password && password2 && name)){
            res.status(403).json({ success: false, message: 'Не все поля заполнены' })
            return
        }
        const existingUser = await User.findOne({ where: { name } })
        if(existingUser){
            res.status(409).json({ success: false, message: 'Пользователь с таким логином уже существует' })
            return
        }

        const user = await User.create({
            name,
            password: await bcrypt.hash(password, 5)
        })
        req.session.userId = user.id
        res.status(201).json({success: true})

    } catch (error) {
        console.error(error)
        res
        .status(500)
        .json({success: false, message: 'Непредвиденная ошибка сервера. Попробуйте позже.'})
    }
})

apiRegLog.post('/login', async (req,res)=>{
    const {name, password} = req.body

    const user = await User.findOne({where: {name}})
    console.log(user);

    if(!user || !(await bcrypt.compare(password, user.password))){
        res.json({ success: false, message: 'Нет такого пользователя либо пароли не совпадают' })
        return
    }
    req.session.userId = user.id
    res.json({ success: true })
})
module.exports = apiRegLog