import {useResponseStatus} from '@quilted/quilt/server';

import {routeWithAppContext} from './route.ts';

export function NotFound() {
  useResponseStatus(404);

  return <div>Not found</div>;
}

export const notFoundRoute = routeWithAppContext('*', {render: <NotFound />});
