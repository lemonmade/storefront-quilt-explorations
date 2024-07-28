import {
  NotFound,
  notFoundRoute,
  routeWithAppContext,
} from '~/shared/navigation.ts';

import {ProductDetails} from './ProductDetails.tsx';
import productDetailsQuery from './ProductDetailsQuery.graphql';

export const productDetailsRoute = routeWithAppContext(':handle', {
  async load({context, matched}) {
    const [{data}] = await Promise.all([
      context.graphql.cache.query(productDetailsQuery, {
        variables: {handle: matched},
      }),
    ]);

    return data;
  },
  render: (_, {data}) =>
    data?.product ? <ProductDetails product={data.product} /> : <NotFound />,
});

export const productRoutes = routeWithAppContext('products', {
  children: [productDetailsRoute, notFoundRoute],
});
