import {useGraphQLQuery} from '@quilted/quilt/graphql';
import {useLocale} from '@quilted/quilt/localize';

import {Title} from '~/shared/head.ts';
import {Heading, Stack, ProductGrid, ProductGridItem} from '~/design-system.ts';

import homeQuery from './HomeQuery.graphql';

export function Home() {
  const locale = useLocale();

  const query = useGraphQLQuery(homeQuery, {
    // Why do I have to provide language as a GraphQL enum?? I obviously have a locale,
    // why can't I just use that?
    // @ts-expect-error
    variables: {country: 'CA', language: locale.split('-')[0].toUpperCase()},
  });

  const data = query.result?.data;

  if (data == null) {
    return null;
  }

  const {products} = data;

  return (
    <>
      <Title>Home</Title>
      <Stack spacing>
        <Heading>Recommended products</Heading>

        <ProductGrid>
          {products.nodes.map((product) => {
            return <ProductGridItem product={product} />;
          })}
        </ProductGrid>
      </Stack>
    </>
  );
}

export default Home;
