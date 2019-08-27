This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Description

I wanted to learn React and make it somewhat applicable to real life, so I made a search engine suite. This version was modified for a CTF club. I delved into this project with no React or asynchronous JavaScript experience and luckily managed to complete it during a weekend + a Monday.

What's included is:

* Google Reddit search engine
* Google scholar API usage
* Private Code upload/search

Some future ideas if I want to continue are:

* GitHub code search with API
* Shodan Heartbleed scanner and exploiter

### Creation

This project was created using `npx create-react-app search-engine`. It will open at `localhost:3000`.

### Installation

I installed individual modules using `npm install express --save`, but you don't have to do that. To install everything, simply run `npm install`.

### Start

This project contains an Express backend server which must be started with `node server.js`. Now, run `npm start` and navigate around the website that should automatically pop up!

### Getting the flag

Go to `localhost:3000/privatecode`. Enter `CTF{` in the corresponding field. Congrats, you found a flag! Of course, the website does much more than that, so feel free to play around with it.

### Resources

* [Tic Tac Toe React](https://reactjs.org/tutorial/tutorial.html)
* [React Router Documentation](https://reacttraining.com/react-router/web/guides/quick-start)
* [CORS debugging](https://daveceddia.com/access-control-allow-origin-cors-errors-in-react-express/)
* [React file upload](https://programmingwithmosh.com/javascript-react-file-upload-proper-server-side-nodejs-easy/)