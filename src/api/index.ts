import products from './products.json';
// import fetch from "node-fetch";
// import axios from 'axios'
import { Product } from '../types';


// api url
// const api_url = "https://www.findimension.com/ecommerce/products.json";
  
 //   const products = axios.get<Product[]>(api_url)
    //   .then(response => {
    //       console.log(response.data);
    //    //   setUserList( response.data );
    //   });

export function fetchMockProducts(): Promise<Product[]> {
    return new Promise((resolve) => setTimeout(() => resolve(products), 1500));
}
