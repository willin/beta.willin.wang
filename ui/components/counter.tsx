import { animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { formatNumber } from '@/lib/utils';

export function Counter({ from, to, placeholder = '0' }: { from?: number; to: number; placeholder?: string }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate<number>(from || 0, to, {
      duration: 1,
      onUpdate(value) {
        node.textContent = formatNumber(parseInt(value, 10));
      }
    });

    return () => controls.stop();
  }, [from, to]);

  return <span ref={nodeRef}>&nbsp;{placeholder}&nbsp;</span>;
}
