import '@quilted/quilt/globals';

import {
  RequestRouter,
  type EnhancedRequest,
} from '@quilted/quilt/request-router';
import type {RenderToResponseOptions} from '@quilted/quilt/server';

import {BrowserAssets} from 'quilt:module/assets';

const router = new RequestRouter();
const assets = new BrowserAssets();

router.get(
  async (request) => {
    const response = await renderToResponseAppUsingGraphQL(request);
    return response;
  },
  {exact: false},
);

async function renderToResponseAppUsingGraphQL(
  request: EnhancedRequest,
  {renderHTML}: Partial<RenderToResponseOptions> = {},
) {
  const [
    {App},
    {createStorefrontGraphQLFetch},
    {renderToResponse},
    {GraphQLCache},
    {Router},
  ] = await Promise.all([
    import('./App.tsx'),
    import('@lemonmade/shopify/storefront'),
    import('@quilted/quilt/server'),
    import('@quilted/quilt/graphql'),
    import('@quilted/quilt/navigation'),
  ]);

  const router = new Router(request.URL);

  const graphQLFetch = createStorefrontGraphQLFetch({
    shop: 'admin4.myshopify.com',
    accessToken: 'c6f362765d5020a5c0b71303a6b06129',
  });

  const response = await renderToResponse(
    <App
      context={{
        router,
        graphql: {
          fetch: graphQLFetch,
          cache: new GraphQLCache({fetch: graphQLFetch}),
        },
      }}
    />,
    {
      request,
      assets,
      renderHTML,
    },
  );

  return response;
}

export default router;
