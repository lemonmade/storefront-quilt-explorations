import type {RenderableProps} from 'preact';

import {Navigation, route} from '@quilted/quilt/navigation';
import {Localization} from '@quilted/quilt/localize';

import {HTML} from './foundation/html.ts';
import {Frame} from './foundation/frame.ts';

import {homeRoute} from './features/home.ts';
import {productRoutes} from './features/products.ts';

import {
  AppContextReact,
  type AppContext as AppContextType,
} from './shared/context.ts';
import {notFoundRoute} from './shared/navigation.ts';

export interface AppProps {
  context: AppContextType;
}

const routes = [
  route('*', {
    render: (children) => <Frame>{children}</Frame>,
    children: [homeRoute, productRoutes, notFoundRoute],
  }),
];

// The root component for your application. You will typically render any
// app-wide context in this component.
export function App({context}: AppProps) {
  return (
    <AppContext context={context}>
      <HTML>
        <Navigation router={context.router} routes={routes} context={context} />
      </HTML>
    </AppContext>
  );
}

export default App;

// This component renders any app-wide context.
function AppContext({children, context}: RenderableProps<AppProps>) {
  return (
    <AppContextReact.Provider value={context}>
      <Localization>{children}</Localization>
    </AppContextReact.Provider>
  );
}
