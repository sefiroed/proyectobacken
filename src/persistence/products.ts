import { addProduct, NewProduct } from '../interfaces/interfaces'
import {objToJSON} from './../interfaces/dataapp'
import moment from 'moment';
import path from 'path';
// import { readFile, writeFile } from '../interfaces/datacar'

const filePathProduct = path.resolve(__dirname, '../../public/products.json');
const fs = require('fs');
let products: any[] = [];
let timeStamp = moment().format();



class Products {

  find(id: string) {
    return  products.find(aProduct => aProduct.id == (id))
  }
  
  get(id: number | undefined = undefined){
    if(id){
      return products.filter(aProduct => aProduct.id == id)
    }
    return products;

  }

  add(data: addProduct){
    const newItem = {
      id: products.length +1,
      timestamp: timeStamp,
      name: data.name,
      description: data.description,
      codeproduct: data.codeproduct,
      url: data.url,
      price: data.price,
      stock: data.stock

    }

    products.push(newItem);
    this.saveProducts();
    return newItem;
  }

  update(id:string, dato:any){
    
    const index = products.findIndex((data:any) => data.id == id);
    dato['id'] = Number(id)
    products[index] = dato;
    this.saveProducts();
    return products[index]
    
  }

  delete(id: string){
    products = products.filter(aProduct => aProduct.id !== Number(id))
    this.saveProducts();
    return products;
  }

  saveProducts() {
    fs.writeFileSync(filePathProduct, objToJSON(products), 'utf-8');
  }
  
}

export const productsPersistence = new Products();