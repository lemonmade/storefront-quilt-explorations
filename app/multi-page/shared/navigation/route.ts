import {createContextRouteFunction} from '@quilted/quilt/navigation';
import type {AppContext} from '~/shared/context.ts';

export const routeWithAppContext = createContextRouteFunction<AppContext>();
