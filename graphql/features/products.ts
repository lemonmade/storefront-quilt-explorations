import {AsyncComponent} from '@quilted/quilt/async';

export const ProductDetails = AsyncComponent.from(
  () => import('./products/ProductDetails.tsx'),
);

export {
  default as productsQuery,
  type ProductDetailsQueryData,
  type ProductDetailsQueryVariables,
} from './products/ProductDetailsQuery.graphql';
