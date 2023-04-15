import ProductList from "../../components/ProductList/ProductList";


export default function ProductsPage({ products }) {
  return (
    <div >
      <ProductList products={products} />
    </div>
  );
}
