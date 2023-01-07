import React from 'react';

const Blog = () => {
    return (
        <div className='bg-gray-400 rounded-xl  p-4 text-justify'>
            <h1>What is Cors</h1>
            <p>Sol:Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            <h1>Why I Am Using Firebase</h1>
            <p>Sol:The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.That's why I'm using Firebase</p>
            <h1 className='text-center'>What other options I have to implement Authentication</h1>
            <p className='text-center'>Cookie-Based authentication<br></br>
                Token-Based authentication<br></br>
                Third party access(OAuth, API-token)<br></br>
                OpenId<br></br>
                SAML<br></br>
            </p>
            <h1>How does the private route work?</h1>
            <p>Sol:The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
            <h1>What is Node? How does Node work?</h1>
            <p>Sol:Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.</p>

        </div>
    );
};

export default Blog;