import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import store from './App/store'
import { Provider } from 'react-redux'
import ErrorPage from "./Pages/error-page.js";
import Root, { loader as rootLoader, action as rootAction, } from "./Routes/root.js";
import Contact, { loader as contactLoader } from "./Routes/contact";
import EditContact, { action as editAction, } from "./Routes/edit.js";
import { action as destroyAction } from "./Routes/destroy.js";
//import Index from "./Routes/index";
//import {Counter} from "./Pages/counter";
import Counter from "./Components/Counter.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Counter /> },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },
  //this code allow to nagigate outside root layout
  // {
  //   path: "contacts/:contactId",
  //   element: <Contact />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);