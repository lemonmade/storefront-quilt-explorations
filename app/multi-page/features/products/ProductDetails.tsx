import {useEffect} from 'preact/hooks';

import {Link, useCurrentURL} from '@quilted/quilt/navigation';
import {useSignal} from '@quilted/quilt/signals';

import type {ProductDetailsQueryData} from './ProductDetailsQuery.graphql';

export function ProductDetails({
  product,
}: Pick<ProductDetailsQueryData, 'product'>) {
  const count = useSignal(0);
  const url = useCurrentURL();

  useEffect(() => {
    console.log('Rendered ProductDetails!');

    const interval = setInterval(() => {
      count.value += 1;
    }, 1_000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (product == null) return null;

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>{JSON.stringify(product)}</div>
      <div>{count}</div>
      <div>URL: {url.href}</div>
    </div>
  );
}

export default ProductDetails;
