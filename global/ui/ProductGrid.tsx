import {type RenderableProps} from 'preact';

import {Link} from '@quilted/quilt/navigation';
import {useFormatMoney} from '@lemonmade/shopify-quilt';

import styles from './ProductGrid.module.css';

import {Stack} from './Stack.tsx';

export function ProductGrid({children}: RenderableProps<{}>) {
  return <div class={styles.ProductGrid}>{children}</div>;
}

export function ProductGridItem({
  product,
}: {
  product: {
    title: string;
    handle: string;
    featuredImage?: {url: string; altText?: string | null} | null;
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
  };
}) {
  const {title, handle, featuredImage, priceRange} = product;

  const formatMoney = useFormatMoney();

  return (
    <Link class={styles.Product} to={`/products/${handle}`}>
      {featuredImage ? (
        <img
          class={styles.ProductImage}
          src={featuredImage.url}
          alt={featuredImage.altText ?? ''}
        />
      ) : null}
      <Stack spacing="small-200">
        <div class={styles.ProductTitle}>{title}</div>
        <small>{formatMoney(priceRange.minVariantPrice)}</small>
      </Stack>
    </Link>
  );
}
