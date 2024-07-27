import {AsyncComponent} from '@quilted/quilt/async';

import {Heading, Stack, ProductGrid, ProductGridItem} from '~/global/ui.ts';

export const BigHomeWidget = AsyncComponent.from(
  () => import('./BigHomeWidget.tsx'),
);

import type {HomeQueryData} from './HomeQuery.graphql';

export function Home({products}: Pick<HomeQueryData, 'products'>) {
  return (
    <Stack spacing>
      <Heading>Recommended products!!</Heading>

      <ProductGrid>
        {products.nodes.map((product) => {
          return <ProductGridItem product={product} />;
        })}
      </ProductGrid>

      <BigHomeWidget />
    </Stack>
  );
}

export default Home;
