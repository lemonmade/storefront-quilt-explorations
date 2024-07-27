import {Title as BaseTitle} from '@quilted/quilt/browser';

export function Title({children}: {children?: string}) {
  return <BaseTitle>{children ? `Shop | ${children}` : 'Shop'}</BaseTitle>;
}
