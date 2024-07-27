import type {RenderableProps} from 'preact';

import {Navigation, route} from '@quilted/quilt/navigation';
import {Localization} from '@quilted/quilt/localize';
import {NotFound} from '@quilted/quilt/server';
import {AsyncContext, type AsyncComponentProps} from '@quilted/quilt/async';

import {HTML} from './foundation/html.ts';
import {Frame} from './foundation/frame.ts';

import {Home, homeQuery} from './features/home.ts';
import {ProductDetails, productDetailsQuery} from './features/products.ts';

import {
  AppContextReact,
  type AppContext as AppContextType,
} from './shared/context.ts';
import {routeWithAppContext} from './shared/navigation.ts';
import {Title} from './shared/head.ts';

export interface AppProps {
  context: AppContextType;
}

const routes = [
  route('*', {
    render: (children) => <Frame>{children}</Frame>,
    children: [
      routeWithAppContext('/', {
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
      }),
      route('products', {
        children: [
          routeWithAppContext(':handle', {
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
  return (
    <AppContextReact.Provider value={context}>
      <AsyncContext components={{render: renderAsyncComponent}}>
        <Localization>{children}</Localization>
      </AsyncContext>
    </AppContextReact.Provider>
  );
}

declare module 'preact' {
  namespace JSX {
    interface IntrinsicElements {
      'quilt-async-component': RenderableProps<{
        module?: string;
        props?: string;
      }>;
    }
  }
}

const renderAsyncComponent: AsyncComponentProps<any>['render'] =
  function renderAsyncComponent(element, {module, props}) {
    return (
      <quilt-async-component
        module={module.id}
        props={props ? JSON.stringify(props) : undefined}
      >
        {element}
      </quilt-async-component>
    );
  };
