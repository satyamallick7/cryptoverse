import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import store from "./app/store";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

// dependancies and libraries

// antd, @ant-design/icons, react-redux, html-react-parser, @reduxjs/toolkit
// axios, moment, millify, react-chartjs-2, chart.js, react-router-dom


// IMPORTANT 

// -- By putting the app inside the provider, every single component in the app will have access to the store 