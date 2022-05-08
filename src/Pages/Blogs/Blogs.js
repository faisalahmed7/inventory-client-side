import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='mt-5'>
            <h3 className='text-center mb-5'>Questions and Answers</h3>
            <div className='blogs'>
                <div className="question-ans">
                    <h5 className='text-danger'>Difference between JavaScript & NodeJs?</h5>
                    <p>JavaScript is high programming language and also called the scripting language as well.
                        It can only be run in browsers through some some JS engines like JS core in Safari and Spidermonkey in  Firefox.
                        It is used for frontend development and on the client side.It supports HTML tags and DOM. On the Other hand NodeJS is runtime environment for JavaScript.
                        Basically it is mostly used in server side , which is called backend development.
                        NodeJS doesn't support HTML tags and it is written in C,C++ and JavaScript.</p>
                </div>
                <div className="question-ans">
                    <h5 className='text-danger'>Difference between SQL & NoSQL?</h5>
                    <p>SQL database is a relational database management system and it is vertically scalable. S
                        QL database have a fixed or static schema and these database are not suitable for hierarchical data storage.
                        SQL database follows ACID property. On the other hand, NoSQL database isn't a relational database
                        but NoSQL database re suitable for hierarchical data storage and it has dynamic schema.
                        It follows CAP property and it is horizontally scalable.

                    </p>
                </div>
                <div className="question-ans">
                    <h5 className='text-danger'>When should you use nodejs and when should you use mongodb?</h5>
                    <p>Node.js  is a open source  server side scripting platform. we should use Node.js because it is very much fast,
                        more efficient and lightweight. And it always uses the asynchronous mode of operation pr execution.
                        And it is the the greatest tool for building a real time web application.
                        It can provide cross-platform application which can be easily run on the web.
                        As MongoDb is NoSQL database, it can be used when a large scale of data will stored in database.
                        It's performance is faster than relational database(RDBMS).
                        It can work on multiple servers. And it can easily handle a large number of access request of data.</p>
                </div>
                <div className="question-ans">
                    <h5 className='text-danger'>What is the purpose of jwt and how does it work?</h5>
                    <p>JWT stands for Json Web Token. It is mainly used or it is a standard used for sharing the security information between the client and server.
                        The purpose of JWT is not to hide the data but also ensure the authenticity of the valuable data. It is consisted of 3 parts and they are Header,
                        Payload and Signature.First the user will sign in by his/her username and password or other social media or login system.
                        Then the authentication server will verify the credential and  issues a JWT signed private key.
                        User's Client will use the JWt in HTTP authorized header.
                        Then the resource server will verify the authenticity of the token using secret private key</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;