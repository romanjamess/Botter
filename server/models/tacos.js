const {Schema, model }= require("mongoose")

const menuSchema = new Schema (
    {
       name: {
        type: String 
       },
       price: {
        type: Number, 
        required: true
       }
    }
)

const Menu = model("Menu", menuSchema)
module.exports = { Menu }