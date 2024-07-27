import {AsyncComponent} from '@quilted/quilt/async';

import {Title} from '~/shared/head.ts';
import {notFoundRoute, routeWithAppContext} from '~/shared/navigation.ts';

import productDetailsQuery from './ProductDetailsQuery.graphql';

const ProductDetails = AsyncComponent.from(
  () => import('./ProductDetails.tsx'),
);

export const productDetailsRoute = routeWithAppContext(':handle', {
  async load({context, matched}) {
    const [{data}] = await Promise.all([
      context.graphql.cache.query(productDetailsQuery, {
        variables: {handle: matched},
      }),
      ProductDetails.load(),
    ]);

    return data;
  },
  render: (_, {data}) =>
    data ? (
      <>
        <Title>{data.product?.title}</Title>
        <ProductDetails product={data.product} />
      </>
    ) : null,
});

export const productRoutes = routeWithAppContext('products', {
  children: [productDetailsRoute, notFoundRoute],
});
