import React from 'react';

import Nav from '../Nav';
import ProductList from '../ProductList';
import Aside from '../Aside';

const Main = (props) => {
    const { products } = props
    return (
        <div className="section">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <Nav />
                    </div>
                    <div className="column">
                        <ProductList products={products} />
                    </div>
                    <div className="column">
                        <Aside />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;