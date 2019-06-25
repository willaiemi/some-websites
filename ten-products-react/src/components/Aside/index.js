import React from 'react';

const Aside = () => {
    return (
        <aside style={{position: "sticky", top: "15px"}}>
            <div className="box">
                <h3 className="title is-5">Wanna buy a product? Send us a message here!</h3>
                <form action="get">
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" name="name" type="text" placeholder="Your name" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Product</label>
                        <div className="control">
                            <input className="input" name="product" type="text" placeholder="The product you'd like to buy" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input" name="email" type="email" placeholder="Your email" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea name="message" style={{ resize: "none" }} className="textarea" placeholder="Write a message for us!"></textarea>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button className="button is-link">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </aside>
    );
};

export default Aside;
