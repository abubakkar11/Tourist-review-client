import React from 'react';
import image from '../../Images/blog/blog-icon-trendy-3d-style-isolated-white-background-blogging-symbol-your-web-site-design-logo-app-ui-vector-illustration-eps10_153454-24.avif'
const Blog = () => {
    return (
        <div className='flex justify-around mt-20'>
            <div>
                <div tabIndex={0} className="collapse  collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is JWT, and how does it work?
                    </div>
                    <div className="collapse-content">
                        <p>JSON Web Token is an open standard
                            that defines a compact
                            and self-contained way for securely transmitting
                            information between parties as a JSON object. This
                            information can be verified and trusted because it
                            is digitally signed.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse mt-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Difference between SQL and NoSQL
                    </div>
                    <div className="collapse-content">
                        <p>SQL is the programming language used to interface with
                            relational databases. NoSQL is a class of DBMs that are
                            non-relational and generally do not use SQL.
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse mt-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is the difference between javascript and NodeJS?
                    </div>
                    <div className="collapse-content">
                        <p>JavaScript is a simple programming language that can be used
                            with any browser that has the JavaScript Engine installed.
                            Node. js, on the other hand, is an interpreter or execution
                            environment for the JavaScript programming language.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse mt-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How does NodeJS handle multiple requests at the same time?
                    </div>
                    <div className="collapse-content">
                        <p> Multiple clients make multiple requests to the NodeJS server.
                            NodeJS receives these requests and places them into the EventQueue .</p>
                    </div>
                </div>
            </div>
            <img className='w-96' src={image} alt="" />
        </div>
    );
};

export default Blog;