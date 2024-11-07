import mongoose from "mongoose";

// Define the product schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Create a Mongoose model using the schema
const Product = mongoose.model('Product', productSchema);

export default Product;
