import '@quilted/quilt/globals';

import '~/global/ui/styles.ts';
import './styles/global.css';

import {AsyncComponentIslandElement} from '@quilted/quilt-rendering/browser';

import {BigHomeWidget} from './features/home.ts';

console.log('Hydrating the multi-page app version of the storefront!');

AsyncComponentIslandElement.registerComponent(BigHomeWidget);

AsyncComponentIslandElement.define();
