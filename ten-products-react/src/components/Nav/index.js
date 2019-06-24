import React from 'react';

const Nav = () => {
    return (
        <nav>
            <div className="box">
                <div className="content">
                    <h4 className="title is-3">Shipping</h4>
                    <div className="content">
                        <h5 className="title is-6">To Brazil</h5>
                        <h6 className="subtitle is-7">Estimated time: 3 working days.</h6>
                        <ul>
                            <li>Up to 1Kg: R$18,50</li>
                            <li>From 1Kg to 10Kg: R$50,00</li>
                            <li>From 10Kg: R$50,00 + R$1,00 for each extra Kg from 10Kg.</li>
                        </ul>
                        <h5 className="title is-6">To other countries:</h5>
                        <h6 className="subtitle is-7">Estimated time: 15 working days.</h6>
                        <ul>
                            <li>To America: R$50,00 + the Brazilian shipping.</li>
                            <li>To Northern America: R$70,00 + the Brazillian shipping.</li>
                            <li>To Europe: R$110,00 + the Brazillian shipping.</li>
                            <li>To Asia and Oceania: R$150,00 + the Brazillian shipping.</li>
                            <li>To Africa: R$120,00 + the Brazillian shipping.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Nav;
