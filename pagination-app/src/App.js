import React, { useState, useEffect } from "react";
import { Pagination } from "./components/Pagination";
import { ProductCard } from "./components/ProductCard";
import { PAGE_SIZE } from "./constant";
import { fetchProducts } from "./api";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const products = await fetchProducts();
      setProducts(products);
    };
    getData();
  }, []);
  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage;
  const end = start + PAGE_SIZE;
  const handlePageChange = (n) => {
    setCurrentPage(n);
  };
  return (
    <div className="App">
      <h2>Pagination</h2>
      <Pagination
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        noOfPages={noOfPages}
      />
      {!products.length ? (
        <h3>no product found</h3>
      ) : (
        <div className="products_container">
          {products.slice(start, end).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
};
export default App;
