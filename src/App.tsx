import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ProductsPage from "@/pages/products.tsx";
import Collection from "@/pages/collection.tsx";
import Offer from "@/pages/offer.tsx";
import AboutPage from "@/pages/about";
import ProfilePage from "@/pages/profile.tsx";
import AuthenticationPage from "@/pages/authentication.tsx";
import CheckoutPage from "@/pages/checkout.tsx";
import LocationPage from "@/pages/location.tsx";
import HelpPage from "@/pages/help.tsx";
import ContactUsPage from "@/pages/contact.tsx";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ProductsPage />} path="/products" />
      <Route element={<Collection />} path="/collection" />
      <Route element={<Offer />} path="/offers" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<ProfilePage />} path={"/profile"} />
      <Route element={<AuthenticationPage />} path="/authentication" />
      <Route element={<CheckoutPage />} path="/checkout" />
      <Route element={<LocationPage />} path="/location" />
      <Route element={<HelpPage />} path="/help" />
      <Route element={<ContactUsPage />} path={"/contact"} />
    </Routes>
  );
}

export default App;
