import Link from "next/link";

const Products = () => {
  const ids = ['1', '2', '3', '4']
  const linkStyle = {
    color: 'blue',
    textDecoration: 'underline'
  }
  return (
    <div>
      <h1>List of Products</h1>
      <ul>
        {
          ids.map((id) =>
            <li key={id}>
              <Link style={linkStyle} href={`../product/${id}`}>Product ID: {id}</Link>
            </li>
          )
        }
      </ul >
    </div >
  );
};

export default Products;