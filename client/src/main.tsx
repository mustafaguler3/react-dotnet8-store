import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource/roboto/700.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Routes.tsx";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify"

console.log("Get stro: ",store.getState())

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored"/>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
