export const fetchProducts = async () => {
  const response  = await fetch("https://dummyjson.com/products?limit=200");
  const data = await response.json();
  return data.products;
};
