import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchProductsApi } from "../api/api";
import { FaExclamationTriangle } from "react-icons/fa";

export default function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetchProductsApi();

        dispatch({
          type: "FETCH_PRODUCTS_SUCCESS",
          payload: res.data, // uses `contents` internally in reducer
        });
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };

    fetchProducts();
  }, [dispatch]);

  /* ---------- UI STATES ---------- */

  if (!products) {
    return (
      <div className="flex justify-center items-center h-40 text-lg">
        Loading products...
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center h-40 text-slate-700">
        <FaExclamationTriangle className="text-2xl mr-2" />
        <span className="text-lg font-medium">No products found</span>
      </div>
    );
  }

  /* ---------- PRODUCTS GRID ---------- */

  return (
    <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
      <div className="min-h-[175px]">
        <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
          {products.map((p) => (
            <ProductCard key={p.productId} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
