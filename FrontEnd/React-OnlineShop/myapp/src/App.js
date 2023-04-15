import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import CardPage from "./pages/CardPage/CardPage";
import { useEffect, useState } from "react";
import { getProducts } from "./request/getProducts";


function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => getProducts((list) => setProducts(list)), []);

  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/products"
            element={<ProductsPage products={products} />}
          />
          <Route
            path="/products/:id"
            element={<CardPage products={products} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
