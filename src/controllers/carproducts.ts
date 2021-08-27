import {Request, Response, NextFunction} from 'express';
import {carProductsPersistence} from '../persistence/carproducts';


class CarProduct {
    getProducts (req : Request, res : Response) {
        const id = Number(req.params.id);
        const product = carProductsPersistence.get(id);
        if(id){
          console.log(product);
          if(!product)
            return res.status(404).json({
              msg: "Product not found"
            })   
          return res.status(404).json({
            msg: "ID invalidate"
          })
        }
        if (product.length < 1) {
          return res.status(400).json({
            error: 'No products loaded',
          });
        }
        res.json({
          data: carProductsPersistence.get()
        })
        
      }

    addProducts (req : Request, res : Response) {
        
        const newItem = carProductsPersistence.add(req.body);
        res.status(200)
        .json({ msg: "Product added successfully", newItem });
    
        res.status(404)
        .json({"Error": "Product not found"})
        
    }

    deleteProducts (req : Request, res : Response) {
        const id = String(req.params.id);

        const product = carProductsPersistence.find(id);

        if(!product){
        return res.status(404).json({
            msg: "Product not found",
        })
    }

    carProductsPersistence.delete(id);
    res.json({
      msg: "Product deleted",
    })
  }
}


export const carProductsController = new CarProduct();