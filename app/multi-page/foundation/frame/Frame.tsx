import type {RenderableProps} from 'preact';
import {Suspense} from 'preact/compat';

import {useBrowserRequest} from '@quilted/quilt/browser';
import {Link} from '@quilted/quilt/navigation';

export function Frame({children}: RenderableProps<{}>) {
  const {headers} = useBrowserRequest();
  const isHXRequest = headers.get('HX-Request') === 'true';

  if (isHXRequest) {
    return <Suspense fallback={null}>{children}</Suspense>;
  }

  return (
    <div class="Frame">
      <header class="Frame_Header">
        <nav class="Frame_Navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/collections/all">Catalog</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div class="Frame_Content">
        <Suspense fallback={null}>{children}</Suspense>
      </div>
    </div>
  );
}
