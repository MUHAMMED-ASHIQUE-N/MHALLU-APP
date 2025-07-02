import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import { RouterProvider } from "react-router-dom";
import router from "../src/Routes/routes";
import App from "../src/App";
import {  Provider} from "react-redux";
import  Store from "./redux/store";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={Store}>
       <RouterProvider router={router}/>
      <App/>
    </Provider>
  </React.StrictMode>
);
