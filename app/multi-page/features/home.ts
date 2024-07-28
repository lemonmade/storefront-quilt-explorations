import {AsyncComponent} from '@quilted/quilt/async';

export {Home} from './home/Home.tsx';

export {default as homeQuery} from './home/HomeQuery.graphql';

export const BigHomeWidget = AsyncComponent.from(
  () => import('./home/BigHomeWidget.tsx'),
);

export {homeRoute} from './home/routes.tsx';
