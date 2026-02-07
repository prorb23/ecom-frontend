import { useSelector } from "react-redux";

export default function Products() {
  const state = useSelector((state) => state);

  console.log("REDUX STATE:", state);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products Page</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

