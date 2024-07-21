import type {Router} from '@quilted/quilt/navigate';

declare module '~/shared/context.ts' {
  interface AppContext {
    /**
     * The router used to control navigation throughout the application.
     */
    readonly router: Router;
  }
}
