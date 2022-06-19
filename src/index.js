import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./componet/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./componet/Header";
import 'bootstrap/dist/css/bootstrap.css';
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Spinner from './componet/public/spinner'
import Notification from './componet/public/Notification'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <Router>
  <Header />
  <Spinner />
  <Notification />
  <App />
</Router>
</Provider>
);
reportWebVitals();
