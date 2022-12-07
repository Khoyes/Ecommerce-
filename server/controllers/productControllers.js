import Product from "../models/Products";
import User from "../models/User";

exports.products = async (req,res) => {

    try{
        let products = await Product.find({ user: req.user});
        res.status(200).json(products);
    } 

    catch (error){
        console.error(error);
        res.status(500).json({
            error: error.message
        });
    }
}


exports.product = async (req,res) => {

    let productId = req.params.id;

    try{
        let products = await Product.findById(productId);
        res.status(200).json(products);
    }

    catch (error){
        console.error(error);
        res.status(500).json({
            error: error.message
        });
    }
}


exports.createProduct = async (req,res) => {

    let newProduct = {
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        qty: req.body.qty,
        info: req.body.info,
        // user: req.user.id Uncomment this and 3 other parts for user authentication
    }

    try{
        let product = await Product.findOne({name: newProduct.name});
        if(product)
        {
            return res.status(500).json({
                msg: "Product Already Exists"
            })
        }

        product = new Product(newProduct)
        product = await product.save();

        res.status(201).json({
            result: "Product Created Successfully",
            product: product
        })
    }

    catch (error){
        console.error(error);
        res.status(500).json({
            error: error.message
        })
    }
}


exports.updateProduct = async (req,res) => {

    let productId = req.params.id;

    let updateProduct = {
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        qty: req.body.qty,
        // info: req.body.info
    };

    try{
        let product = await Product.findById(productId);

        if(!product)
        {
            return res.status(500).json({
                msg: "Product Does Not Exist"
            })
        }

        // let user = await User.findById(req.user.id)

        // if(!user){
        //     res.status(500).json({
        //         msg: "User doesn't exist"
        //     })
        // }

        // if(product.user.toString() != user.id){ 
        //     res.status(404).json({
        //         msg: "Not authorized"
        //     })
        // }

        product = await Product.findByIdAndUpdate(
            productId,
            {
                $set: updateProduct
            },
            {$new: true}
        );

        res.status(201).json({
            result: "Product Updated Successfully",
            product: product
        });
    }

    catch (error){
        console.error(error);
        res.status(500).json({
            error: error.message
        });
    }
}


exports.deleteProduct = async (req,res) => {

    let productId = req.params.id;

    try{
        let product = await Product.findById(productId);
        if(!product)
        {
            return res.status(500).json({
                msg: "Product Does Not Exist"
            })
        }

        // let user = await User.findById(req.user.id)

        // if(!user){
        //     res.status(500).json({
        //         msg: "User doesn't exist"
        //     })
        // }

        // if(product.user.toString() != user.id){ 
        //     res.status(404).json({
        //         msg: "Not authorized"
        //     })
        // }

        product = await Product.findByIdAndDelete(productId);

        res.status(200).json({
            result: "Product Deleted Successfully",
            productId: productId
        });
    }

    catch (error){
        console.error(error);
        res.status(500).json({
            error: error.message
        });
    }
}