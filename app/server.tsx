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
  '/multi-page-app',
  async (request) => {
    const response = await renderToResponseAppUsingGraphQL(request, {
      async renderHTML(content, {response}) {
        const [{ScriptAsset, StyleAsset, renderToStaticMarkup}] =
          await Promise.all([import('@quilted/quilt/server')]);

        const mainAssets = await assets.entry({
          cacheKey: await assets.cacheKey?.(request),
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
  },
  {exact: false},
);

router.get(
  '/graphql',
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

  const router = new Router(request.URL, {
    base: `/${request.URL.pathname.split('/').at(1)}`,
  });

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
