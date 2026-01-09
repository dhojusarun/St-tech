import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { ToastContainer, Bounce } from "react-toastify";

import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { CartWishlistProvider } from "./context/CartWishlistContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-p34yk3h5c3yu0dyy.us.auth0.com"
      clientId="WnjNiPT8x7yY06pBzTRruS1oqSHrxlYk"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <CartWishlistProvider>
        <App />

        {/* Toast notifications */}
      </CartWishlistProvider>
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </Auth0Provider>
  </BrowserRouter>
);
