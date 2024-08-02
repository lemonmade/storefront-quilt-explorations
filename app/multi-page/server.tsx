import '@quilted/quilt/globals';

import type {JSX} from 'preact';
import {
  RequestRouter,
  type EnhancedRequest,
} from '@quilted/quilt/request-router';
import {BrowserResponse} from '@quilted/quilt/server';
import type {RenderToResponseOptions} from '@quilted/quilt/server';
import {createStorefrontGraphQLFetch} from '@lemonmade/shopify/storefront';

import {BrowserAssets} from 'quilt:module/assets';

const router = new RequestRouter();
const assets = new BrowserAssets();

router.post('/buy-it-now', async (request) => {
  const [formData, {default: buyItNowMutation}] = await Promise.all([
    request.formData(),
    import('./server/BuyItNowMutation.graphql'),
  ]);

  console.log(Object.fromEntries(formData.entries()));

  const merchandiseId = formData.get('lines[0][merchandiseId]');

  if (typeof merchandiseId !== 'string') return Response.redirect('/');

  const fetchGraphQL = createGraphQLFetch();

  const result = await fetchGraphQL(buyItNowMutation, {
    variables: {
      lines: [{merchandiseId, quantity: 1}],
    },
  });

  const checkoutURL = result.data?.cartCreate?.cart?.checkoutUrl;

  if (checkoutURL) {
    return Response.redirect(checkoutURL);
  }

  return Response.redirect(request.headers.get('Referer') ?? '/');
});

router.get(async (request) => {
  const response = await renderToResponseAppUsingGraphQL(request, {
    async renderHTML(content, {response}) {
      const [{ScriptAsset, StyleAsset, renderToStaticMarkup}] =
        await Promise.all([import('@quilted/quilt/server')]);

      const mainAssets = await assets.entry({
        cacheKey: await assets.cacheKey?.(request),
        modules: response.assets.get({timing: 'load'}),
      });

      const htmlShell = renderToStaticMarkup(
        <html {...response.htmlAttributes.value}>
          <head>
            {response.title.value && <title>{response.title.value}</title>}
            {response.links.value.map((link) => (
              <link {...(link as JSX.HTMLAttributes<HTMLLinkElement>)} />
            ))}
            {response.metas.value.map((meta) => (
              <meta {...(meta as JSX.HTMLAttributes<HTMLMetaElement>)} />
            ))}
            {/*
              Vite injects styles via JavaScript, which is done too late for the view transition to register.
              Fix it with a style tag that is only present in development. Needs to match the @view-transition
              declaration in `./styles/global.css`.
            */}
            {/* @ts-expect-error */}
            {process.env.NODE_ENV === 'development' ? (
              <style
                dangerouslySetInnerHTML={{
                  __html: `@view-transition { navigation: auto; }`,
                }}
              />
            ) : null}
            {/* {browserResponse.serializations.value.map(({id, value}) => (
                <meta name={`serialized:${id}`} content={JSON.stringify(value)} />
              ))} */}
            {mainAssets.scripts.map((script) => (
              <ScriptAsset
                key={script.source}
                asset={script}
                baseURL={request.URL}
              />
            ))}
            {mainAssets.styles.map((style) => (
              <StyleAsset
                key={style.source}
                asset={style}
                baseURL={request.URL}
              />
            ))}
            {/* {preloadAssets?.styles.map((style) => (
                <StyleAssetPreload
                  key={style.source}
                  asset={style}
                  baseURL={baseURL}
                />
              ))}
              {preloadAssets?.scripts.map((script) => (
                <ScriptAssetPreload
                  key={script.source}
                  asset={script}
                  baseURL={baseURL}
                />
              ))} */}
          </head>
          <body
            {...response.bodyAttributes.value}
            dangerouslySetInnerHTML={{__html: '%%CONTENT%%'}}
          ></body>
        </html>,
      );

      let htmlContent = `<!DOCTYPE html>`;

      const [firstChunk, secondChunk] = htmlShell.split('%%CONTENT%%');
      htmlContent += firstChunk;

      const reader = content.getReader();

      while (true) {
        const {done, value} = await reader.read();

        if (done) {
          break;
        }

        htmlContent += value;
      }

      htmlContent += secondChunk;

      return htmlContent;
    },
  });
  return response;
});

async function renderToResponseAppUsingGraphQL(
  request: EnhancedRequest,
  {renderHTML}: Partial<RenderToResponseOptions> = {},
) {
  const [
    {App},
    {renderToResponse},
    {GraphQLCache},
    {Router},
    {AsyncContext},
    {AsyncComponentIslandServerRenderer},
  ] = await Promise.all([
    import('./App.tsx'),
    import('@quilted/quilt/server'),
    import('@quilted/quilt/graphql'),
    import('@quilted/quilt/navigation'),
    import('@quilted/quilt/async'),
    import('@quilted/quilt-rendering/server'),
  ]);

  const router = new Router(request.URL);

  const graphQLFetch = createGraphQLFetch();

  const response = await renderToResponse(
    <AsyncContext components={new AsyncComponentIslandServerRenderer()}>
      <App
        context={{
          router,
          browser: new BrowserResponse({request}),
          graphql: {
            fetch: graphQLFetch,
            cache: new GraphQLCache({fetch: graphQLFetch}),
          },
        }}
      />
    </AsyncContext>,
    {
      request,
      assets,
      renderHTML,
    },
  );

  return response;
}

function createGraphQLFetch() {
  return createStorefrontGraphQLFetch({
    shop: 'test-plus-shop.myshopify.com',
    accessToken: 'dbca40c3712408375d56abe879e0ed81',
  });
}

export default router;
