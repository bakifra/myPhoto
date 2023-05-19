const React = require('react')
const registerRouter = require('express').Router()

const Login = require('../../Components/LoginPage')
const Register = require('../../Components/RegisterPage')

registerRouter.get('/register', (req,res)=>{
    try{
        res.send(res.renderComponent(Register))
    }catch (error){
        console.error(error)
        res.status(500)
    }
 })

 registerRouter.get('/login', (req,res)=>{
    try{
        res.send(res.renderComponent(Login))
    }catch (error){
        console.error(error)
        res.status(500)
    }
 })
registerRouter.get('/logout', (req,res)=>{
    req.session.destroy(()=>{
        res.clearCookie('user_sid').redirect('/')
        // res.redirect('/')
    })
})

module.exports = registerRouter