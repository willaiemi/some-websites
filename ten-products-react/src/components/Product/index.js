import React from 'react';

const Product = (props) => {
    const { product } = props;

    return (
        <section style={{ margin: "10px 0" }} className="card">
            <header className="card-header">
                <h3 className="card-header-title">{product.title}</h3>
            </header>
            <article className="card-image">
                <figure className="image">
                    <img style={{ maxWidth: "700px" }} src={product.image} alt={`${product.title}`} />
                </figure>
            </article>
            <footer className="card-content">
                <p className="content">{product.description}</p>
                <p className="subtitle is-5 is-pulled-right">{`R$${product.price.toFixed(2)}`}</p>
            </footer>
        </section>
    );
};

export default Product;

/*
other products
{
            "id": 7,
            "title": "T-Shirt",
            "image": "",
            "price": 15.90,
            "description": ""
        },
        {
            "id": 8,
            "title": "T-Shirt",
            "image": "",
            "price": 15.90,
            "description": ""
        },
        {
            "id": 9,
            "title": "T-Shirt",
            "image": "",
            "price": 15.90,
            "description": ""
        },
        {
            "id": 10,
            "title": "T-Shirt",
            "image": "",
            "price": 15.90,
            "description": ""
        },

*/