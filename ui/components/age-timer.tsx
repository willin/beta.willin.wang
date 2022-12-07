'use client';
import { useEffect, useState } from 'react';

export function AgeTimer() {
  const birth = new Date('1989-06-03');
  const [age, setAge] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - birth.getTime();
      setAge((diff / 86400000 / 365).toFixed(9));
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, [age]);

  return <span className='badge badge-primary badge-outline'>{age}</span>;
}
