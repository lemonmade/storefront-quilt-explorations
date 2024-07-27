import {AsyncComponent} from '@quilted/quilt/async';

export {default as Home} from './home/Home.tsx';

export {default as homeQuery} from './home/HomeQuery.graphql';

export const BigHomeWidget = AsyncComponent.from(
  () => import('./home/BigHomeWidget.tsx'),
);
