import {useEffect} from 'preact/hooks';
import {useSignal} from '@quilted/quilt/signals';

export function BigHomeWidget() {
  const count = useSignal(0);

  useEffect(() => {
    console.log('Rendered BigHomeWidget!');

    const interval = setInterval(() => {
      count.value += 1;
    }, 1_000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>A heavy element we will client-side hydrate! Count: {count}</div>;
}

export default BigHomeWidget;
