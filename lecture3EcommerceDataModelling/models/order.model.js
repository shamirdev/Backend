import mongoose from 'mongoose';

const orderItemsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type: Number,
        required: true,
        default: 0
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }, 
    orderItems: {
        type: [orderItemsSchema]
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String, 
        enum: ['pending', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    }
}, {timestamps: true});

export const Order = mongoose.model('Order', orderSchema)