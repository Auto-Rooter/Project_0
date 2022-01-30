import Link from 'next/link';
import ItemStyled from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';

export default function Product({ product }) {
  return (
    <ItemStyled>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt="product.name"
      />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{product.price}</PriceTag>
    </ItemStyled>
  );
}
