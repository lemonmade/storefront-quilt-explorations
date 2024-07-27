import {AsyncComponent} from '@quilted/quilt/async';

export const ProductDetails = AsyncComponent.from(
  () => import('./products/ProductDetails.tsx'),
);

export {
  default as productDetailsQuery,
  type ProductDetailsQueryData,
  type ProductDetailsQueryVariables,
} from './products/ProductDetailsQuery.graphql';

export {productRoutes, productDetailsRoute} from './products/routes.tsx';
