import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';


export default function Home() {
    return (
        <ProductList>
            <li>
                <img
                    src="https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(90)/lojadoct/catalog//loja/calcados/masculinos/sapatos/sapato-masculino-branco-1919-2.jpg"
                    alt="Tênis"

                />
                <strong>Tênis muito legal</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} colo="#fff" />
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>

            <li>
                <img
                    src="https://lojarafarillo.vteximg.com.br/arquivos/ids/157780-574-574/5901-01--1-.jpg?v=636341567311100000"
                    alt="Tênis"

                />
                <strong>Tênis muito legal</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} colo="#fff" />
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>

            <li>
                <img
                    src="https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(90)/lojadoct/catalog//loja/calcados/masculinos/sapatos/sapato-masculino-branco-1919-2.jpg"
                    alt="Tênis"

                />
                <strong>Tênis muito legal</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} colo="#fff" />
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>

            <li>
                <img
                    src="https://lojarafarillo.vteximg.com.br/arquivos/ids/157780-574-574/5901-01--1-.jpg?v=636341567311100000"
                    alt="Tênis"

                />
                <strong>Tênis muito legal</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} colo="#fff" />
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>

            <li>
                <img
                    src="https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(90)/lojadoct/catalog//loja/calcados/masculinos/sapatos/sapato-masculino-branco-1919-2.jpg"
                    alt="Tênis"

                />
                <strong>Tênis muito legal</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} colo="#fff" />
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>

            <li>
                <img
                    src="https://lojarafarillo.vteximg.com.br/arquivos/ids/157780-574-574/5901-01--1-.jpg?v=636341567311100000"
                    alt="Tênis"

                />
                <strong>Tênis muito legal</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} colo="#fff" />
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        </ProductList>
    );
}