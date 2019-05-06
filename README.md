# webpack-react-setup
In this repository we are doing 

install and configure webpack
install and configure Babel
install React
create two React components (Container / Presentational)
include the resulting bundle into an HTML page
install and configure webpack dev server


Start off by creating a directory for the project:

For windows use 

mkdir webpack-react-setup
cd webpack-react-setup

Initialize node

npm init -y

Let’s install webpack by running:

npm i webpack --save-dev
npm i webpack-cli --save-dev

In package.json 

"scripts": {
  "build": "webpack --mode production"
}

To Install Babel 

npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

Don’t forget to configure Babel! Create a new file named .babelrc inside the project folder:

{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}


Create a file named webpack.config.js and fill it like the following:

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
