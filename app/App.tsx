import type {RenderableProps} from 'preact';

import {GraphQLContext} from '@quilted/quilt/graphql';
import {Navigation, route} from '@quilted/quilt/navigate';
import {Localization, useLocaleFromEnvironment} from '@quilted/quilt/localize';
import {NotFound} from '@quilted/quilt/server';

import {HTML} from './foundation/html.ts';
import {Frame} from './foundation/frame.ts';

import {Home} from './features/home.ts';
import {
  ProductDetails,
  productsQuery,
  type ProductDetailsQueryVariables,
} from './features/products.ts';

import {
  AppContextReact,
  type AppContext as AppContextType,
} from './shared/context.ts';

export interface AppProps {
  context: AppContextType;
}

const routes = [
  route('*', {
    render: (children) => <Frame>{children}</Frame>,
    children: [
      route('/', {
        async load() {
          await Promise.all([Home.load()]);
        },
        render: <Home />,
      }),
      route('products', {
        children: [
          route<void, ProductDetailsQueryVariables, AppContextType>(':handle', {
            input({matched}) {
              return {handle: matched};
            },
            async load({input}, {graphql}) {
              await Promise.all([
                ProductDetails.load(),
                graphql.cache.query(productsQuery, {
                  variables: input,
                }),
              ]);
            },
            render: (_, {input}) => <ProductDetails handle={input.handle} />,
          }),
        ],
      }),
      route('*', {render: <NotFound />}),
    ],
  }),
];

// The root component for your application. You will typically render any
// app-wide context in this component.
export function App({context}: AppProps) {
  return (
    <AppContext context={context}>
      <HTML>
        <Navigation router={context.router} routes={routes} context={context} />
      </HTML>
    </AppContext>
  );
}

export default App;

// This component renders any app-wide context.
function AppContext({children, context}: RenderableProps<AppProps>) {
  const locale = useLocaleFromEnvironment() ?? 'en';

  return (
    <AppContextReact.Provider value={context}>
      <GraphQLContext
        fetch={context.graphql.fetch}
        cache={context.graphql.cache}
      >
        <Localization locale={locale}>{children}</Localization>
      </GraphQLContext>
    </AppContextReact.Provider>
  );
}
