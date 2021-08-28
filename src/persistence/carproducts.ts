import { addProduct } from '../interfaces/interfaces'
import {objToJSON} from './../interfaces/dataapp'
import moment from 'moment';
// import { readFile, writeFile } from '../interfaces/datacar'
import path from 'path';
const fs = require('fs');
const filePathCarProduct= path.resolve(__dirname, '../../public/productscar.json');
let products: any[] = [];
let timeStamp = moment().format();


class CarProducts {
  
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

  delete(id: string) {
    products = products.filter(aProduct => aProduct.id !== Number(id))
    this.saveProducts();
    return products;
  }

  saveProducts() {
    fs.writeFileSync(filePathCarProduct, objToJSON(products), 'utf-8');
  }

  // readProducts() {
  //   fs.readFileSync(filePathProduct, 'utf-8');
  // }
  
}

export const carProductsPersistence = new CarProducts();