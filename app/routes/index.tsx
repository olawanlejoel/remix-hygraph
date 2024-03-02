import { gql, useQuery } from "@apollo/client";

const PRODUCTS_AND_FAKESTORE_QUERY = gql`
  query {
    products {
      id
      name
      price
      description
      images {
        url
      }
    }
    fakeStore {
      id
      title
      price
      description
      images
    }
  }
`;

export default function Index() {
  const { loading, error, data } = useQuery(PRODUCTS_AND_FAKESTORE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container my-4">
      <section>
        <h2>Hygraph Products</h2>
        <div className="row">
          {data.products.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={product.images[0].url}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">
                    {product.description.substring(0, 50) + ".."}
                  </p>
                  <p>${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <hr className="my-5 border-2" />
      <section>
        <h2>Fake Store Products</h2>
        <div className="row">
          {data.fakeStore.map((fakeProduct) => (
            <div className="col-md-3 mb-4" key={fakeProduct.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={fakeProduct.images[0]}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{fakeProduct.name}</h5>
                  <p className="card-text">
                    {fakeProduct.description.substring(0, 50) + ".."}
                  </p>
                  <p>
                    <b>${fakeProduct.price.toLocaleString()}</b>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
