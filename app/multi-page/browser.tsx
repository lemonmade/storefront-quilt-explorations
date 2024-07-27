import '~/global/ui/styles.ts';
import './styles/global.css';

import {Suspense} from 'preact/compat';
import {
  QuiltAsyncComponentElement,
  MultiPageAppRouter,
  MultiPageAppNavigation,
} from '@quilted/quilt-rendering/browser';
import {Localization} from '@quilted/quilt/localize';

import {BigHomeWidget} from './features/home.ts';
import {ProductDetails} from './features/products.ts';

console.log('Hydrating the multi-page app version of the storefront!');

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

QuiltAsyncComponentElement.define('async-component');
