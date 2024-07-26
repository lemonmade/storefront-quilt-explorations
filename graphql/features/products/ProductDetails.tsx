import {useGraphQLQuery} from '@quilted/quilt/graphql';
import {Link} from '@quilted/quilt/navigation';

import {Title} from '~/shared/head.ts';

import productDetailsQuery from './ProductDetailsQuery.graphql';

export function ProductDetails({handle}: {handle: string}) {
  const query = useGraphQLQuery(productDetailsQuery, {
    variables: {handle},
  });

  const product = query.result?.data?.product;

  if (product == null) return null;

  return (
    <>
      <Title>{product.title}</Title>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>{JSON.stringify(product)}</div>
    </>
  );
}

export default ProductDetails;
