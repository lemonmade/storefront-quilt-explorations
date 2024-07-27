import {createOptionalContext} from '@quilted/quilt/context';
import type {BrowserDetails} from '@quilted/quilt/browser';

export interface AppContext {
  readonly browser: BrowserDetails;
}

export const AppContextReact = createOptionalContext<AppContext>();
export const useAppContext = AppContextReact.use;
