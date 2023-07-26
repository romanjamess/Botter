const {Schema, model }= require("mongoose")

const orderSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    menu: [
        {
            type: Schema.Types.ObjectId,
            ref: "Menu"
        }
    ]
}) 

const order = model("Order", orderSchema)

module.exports = { order }  