//criação das rotas da API

const { Router } = require ('express')

const UserController = require('../controllers/UserCrontroller')
const SessionController = require('../controllers/LoginController')
const SmartphoneController = require('../controllers/SmartphoneController')

const routes = Router()

routes.get('/', (req, res) => {
    res.send('olá mundo')
    })

    routes.post('/users', UserController.createUser)
    routes.get('/users', UserController.getUsers)

    routes.get('/users/:user_id', UserController.getUserById)

    routes.post('/sessions', SessionController.createSession)

    routes.post('/smartphone/:user_id', SmartphoneController.createSmartphone)
    routes.get('/smartphone/:user_id', SmartphoneController.getSmartphone)
    routes.patch('/smartphone/:user_id/:smartphone_id', SmartphoneController.updateSmartphone)
    routes.delete('/smartphone/:user_id/:smartphone_id', SmartphoneController.deleteSmartphone)

    routes.get('/smartphone', SmartphoneController.getSmartphone )
    

module.exports = routes