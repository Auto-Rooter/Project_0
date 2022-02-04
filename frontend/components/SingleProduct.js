import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import DisplayError from './ErrorMessage';

const SINGLE_ITEM_QUERY = gql`
  query {
    Product(where: { id: "61f5404afbe15035408a1be1" }) {
      name
      price
      description
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY);
  if (loading) return <p>Loading......</p>;
  if (error) return <DisplayError />;
  console.log(`Data: ${data}`);
  return (
    <p>
      <h2>{data.Product.name}</h2>{' '}
    </p>
  );
}
