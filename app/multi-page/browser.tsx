import '@quilted/quilt/globals';

import '~/global/ui/styles.ts';
import './styles/global.css';

import htmx from 'htmx.org';
import {AsyncComponentIslandElement} from '@quilted/quilt-rendering/browser';

console.log('Hydrating the multi-page app version of the storefront!');

Object.assign(window, {htmx});

// Your assets are loaded with the `async` attribute by default. This bit of code
// ensures that htmx is loaded on your page, even if the browser loads this script
// after the initial HTML is parsed.
htmx.process(document.body);

import {BigHomeWidget} from './features/home.ts';

AsyncComponentIslandElement.registerComponent(BigHomeWidget);
AsyncComponentIslandElement.define();
