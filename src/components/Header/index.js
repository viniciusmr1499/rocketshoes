import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo.png';
import { Cart, Container } from './styles';

export default function Header() {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="Rocketshoes" />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu Carrinho</strong>
                    <span>3 itens</span>
                    <MdShoppingBasket size={36} color="#fff" />
                </div>
            </Cart>
        </Container>
    );
} 