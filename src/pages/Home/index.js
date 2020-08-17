import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';


export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('products').then(response => {
            setProducts(response.data);
        }).catch(err => {
            console.error(err);
        });
        
    }, []);
    
    return (
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image} alt={product.title}/>
                    <strong>{product.title}</strong>
                    <span>{product.price}</span>

                    <button type="button">
                        <div>
                            <MdAddShoppingCart size={16} colo="#fff" />
                        </div>

                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
            ))}
        </ProductList>
    );
}