import {useEffect} from 'preact/hooks';

import {Link, useCurrentURL} from '@quilted/quilt/navigation';
import {useSignal} from '@quilted/quilt/signals';
import {useFormatMoney} from '@lemonmade/shopify-quilt';

import type {ProductDetailsQueryData} from './ProductDetailsQuery.graphql';

export function ProductDetails({
  product,
}: Pick<ProductDetailsQueryData, 'product'>) {
  const count = useSignal(0);
  const url = useCurrentURL();
  const formatMoney = useFormatMoney();

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
      <div>{count}</div>
      <div>URL: {url.href}</div>
      <div>
        {formatMoney(product.priceRange.minVariantPrice)}
        {' - '}
        {formatMoney(product.priceRange.maxVariantPrice)}
      </div>
    </div>
  );
}

export default ProductDetails;
