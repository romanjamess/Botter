const {Schema, model }= require("mongoose")

const menuSchema = new Schema (
    {
       name: {
        type: String 
       },
       description: {
         type: String
       },
       price: {
        type: Number, 
        required: true
       },
       image: {
            type: String
        },


    }
)

const Menu = model("Menu", menuSchema)
module.exports = { Menu }