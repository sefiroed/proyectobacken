import { addProduct, NewProduct, objToJSON } from '../interfaces/interfaces'
import moment from 'moment';
import { readFile, writeFile } from '../interfaces/file'
import { publicFolderarch } from '../services/server'

const fs = require('fs');
let products: any[] = [];
let timeStamp = moment().format();


class Products {
  
  get(id: number | undefined = undefined){
    const read: any = readFile(publicFolderarch)
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

  update(id:String, dato:any){
    
    const index = products.findIndex((data:any) => data.id == id);
    dato['id'] = Number(id)
    products[index] = dato;
    this.saveProducts();
    return products[index]
    
  }

  delete(id: string){
    products = products.filter(aProduct => aProduct.id !== Number(id))
    return products;
  }

  find(id: String) {
    return  products.find(aProduct => aProduct.id == (id))
  }

  saveProducts() {
    fs.writeFileSync(publicFolderarch, objToJSON(products), 'utf-8');
  }
  
}

export const productsPersistence = new Products();