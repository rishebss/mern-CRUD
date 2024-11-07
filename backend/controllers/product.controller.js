import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async(req,res) => {
    try{
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});

    } catch (error) {
        console.log("errror in fetching products:",error.message);
        res.status(500).json({ success: false,message: "Server error"});
    }
};

export const createProducts = async (req, res) => {
    const product = req.body;

    // Check if required fields are present
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newProduct = new Product(product);

    try {
        // Save the new product to the database
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in Create product:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const updateProducts = async (req,res) =>{
    const { id } =req.params;

    const products = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false,message:"invalid products id"});
    }

    try {
        const updatedProduct= await Product.findByIdAndUpdate(id,products,{new:true});
        res.status(200).json ({ success : true , data:updatedProduct});
    } catch (error){
        res.status(500).json({success: false,message:"Server Error"});

    }
};

export const deleteProducts = async (req,res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false,message:"invalid products id"});
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true,message:"item deleted"});
    }   catch (error) {
        console.log("errror in deleting products:",error.message);
        res.status(500).json({ success: false,message: "Server error"});

    } 
};