//configurando os métodos do objeto 

const Smartphone = require('../../models/Smartphone')

const SmartphoneController = {
    async createSmartphone(req, res){

     const bodyData = req.body 
     const { user_id } = req.params 

     try{
        
        const data = {username: user_id, ...bodyData}

        const newSmartphone = await Smartphone.create(data)

        return res.status(200).json(newSmartphone)
     } catch(err){
        return res.status(400).json(err)
     }

    },

    async updateSmartphone(req,res){

       const bodyData = req.body
       const { smartphone_id, user_id } = req.params

        try{

            const updateSmartphone = await Smartphone.findByIdAndUpdate(smartphone_id, bodyData, { new: true })
            return res.status(200).json(updateSmartphone)

        } catch(err){
            return res.status(400).json(err)
         }
    
    },

    async deleteSmartphone(req, res){

        const { smartphone_id, user_id } = req.params
      
        try{

            const deletedSmartphone = await Smartphone.findByIdAndDelete(smartphone_id)
            return res.status(200).json(deletedSmartphone)


        } catch(err){
            return res.status(400).send(err)
         }
    
    },

    async getSmartphone(req, res){

        try{

            const smartphone = await Smartphone.find()
            return res.status(200).json(smartphone)

        } catch(err){
            return res.status(400).send(err)
         }
    
    }
}

module.exports = SmartphoneController