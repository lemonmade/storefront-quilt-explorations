import {Title} from '~/shared/head.ts';
import {Link, useCurrentURL} from '@quilted/quilt/navigation';
import {useFormatMoney} from '@lemonmade/shopify-quilt';

import type {ProductDetailsQueryData} from './ProductDetailsQuery.graphql';
import {ThemeColor} from '@quilted/quilt/browser';

export function ProductDetails({
  product,
}: {
  product: Required<ProductDetailsQueryData.Product>;
}) {
  const url = useCurrentURL();
  const formatMoney = useFormatMoney();

  if (product == null) return null;

  return (
    <div>
      <Title>{product.title}</Title>
      {product.themeColor && <ThemeColor value={product.themeColor.value} />}

      <div>
        <Link to="/">Home</Link>
      </div>
      <div>URL: {url}</div>
      <div>Theme color: {product.themeColor?.value ?? '<missing>'}</div>

      <div>
        {formatMoney(product.priceRange.minVariantPrice)}
        {' - '}
        {formatMoney(product.priceRange.maxVariantPrice)}
      </div>
    </div>
  );
}

export default ProductDetails;
