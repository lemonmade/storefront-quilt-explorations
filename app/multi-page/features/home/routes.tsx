import {AsyncComponent} from '@quilted/quilt/async';

import {Title} from '~/shared/head.ts';
import {routeWithAppContext} from '~/shared/navigation.ts';

import {Home} from './Home.tsx';
import homeQuery from './HomeQuery.graphql';

const BigHomeWidget = AsyncComponent.from(() => import('./BigHomeWidget.tsx'));

export const homeRoute = routeWithAppContext('/', {
  async load({context}) {
    const [{data}] = await Promise.all([
      context.graphql.cache.query(homeQuery, {
        variables: {
          country: 'CA',
          language: context.browser.locale.value
            .split('-')[0]!
            .toUpperCase() as any,
        },
      }),
      BigHomeWidget.load(),
    ]);

    return data;
  },
  render: (_, {data}) =>
    data ? (
      <>
        <Title>Home</Title>
        <Home products={data.products} />
      </>
    ) : null,
});
