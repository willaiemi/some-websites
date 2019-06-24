import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="columns">
            <div className="column is-one-third box">
                <h3 className="title is-5">What do you think about this website? Give us your feedback!</h3>
                <form action="get">
                    <div className="field">
                        <label className="label">Do you like this website?</label>
                        <div className="control">
                            <label className="radio">
                                <input type="radio" name="question" />
                                    Yes
                            </label>
                            <label className="radio">
                                <input type="radio" name="question" />
                                    No
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Write us a message about things we could do to make this website better!</label>
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
            <div className="content has-text-centered column is-flex" style={{alignItems: "flex-end", justifyContent: "center"}}>
                <p>
                    <strong>ProductsList</strong> by <a href="https://github.com/willaiemi">Willian Duarte</a>.
                </p>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
