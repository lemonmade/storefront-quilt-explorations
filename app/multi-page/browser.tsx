import '~/global/ui/styles.ts';
import './styles/global.css';

import type {RenderableProps} from 'preact';
import {Suspense} from 'preact/compat';
import {QuiltAsyncComponentElement} from '@quilted/quilt-rendering/browser';
import {Router, RouterContext} from '@quilted/quilt/navigation';
import {resolveURL} from '@quilted/routing';
import {Localization} from '@quilted/quilt/localize';

import {BigHomeWidget} from './features/home.ts';
import {ProductDetails} from './features/products.ts';

console.log('Hydrating the multi-page app version of the storefront!');

class MultiPageAppRouter
  implements
    Pick<
      Router,
      | 'base'
      | 'currentRequest'
      | 'resolve'
      | 'navigate'
      | 'go'
      | 'back'
      | 'forward'
      | 'cache'
    >
{
  base: Router['base'] = '/';
  currentRequest: Router['currentRequest'] = {
    id: '',
    state: {},
    url: new URL(window.location.href),
  };
  cache: Router['cache'] = undefined;

  resolve: Router['resolve'] = (to) => {
    const url = resolveURL(to, this.currentRequest.url, this.base);
    return {url, external: true};
  };

  navigate: Router['navigate'] = (to, {replace} = {}) => {
    const url = resolveURL(to, this.currentRequest.url, this.base);

    if (replace) {
      window.location.replace(url.href);
    } else {
      window.location.assign(url.href);
    }

    return {
      id: '',
      state: {},
      url,
    };
  };

  go(delta: number) {
    window.history.go(delta);
  }

  back(count = -1) {
    this.go(count < 0 ? count : -count);
  }

  forward(count = 1) {
    this.go(count);
  }
}

const router = new MultiPageAppRouter();

QuiltAsyncComponentElement.registerComponent(BigHomeWidget);
QuiltAsyncComponentElement.registerComponent(ProductDetails, {
  render(element) {
    return (
      <MultiPageAppNavigation router={router}>
        <Localization>
          <Suspense fallback={null}>{element}</Suspense>
        </Localization>
      </MultiPageAppNavigation>
    );
  },
});

function MultiPageAppNavigation({
  router,
  children,
}: RenderableProps<{
  router: MultiPageAppRouter;
}>) {
  return (
    <RouterContext.Provider value={router as Router}>
      {children}
    </RouterContext.Provider>
  );
}

QuiltAsyncComponentElement.defineElement();
