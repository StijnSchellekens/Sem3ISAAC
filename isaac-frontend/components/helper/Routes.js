import React from 'react';
import Link from 'next/link';

const Routes = () => {
  return (
    <div>
      <Link href='/dashboard'>
        <a>Dashboard</a>
      </Link>
      <Link href='/heatmap'>
        <a>Heatmap</a>
      </Link>
      <Link href='/notification'>
        <a>Notification</a>
      </Link>
      <Link href='/advanced'>
        <a>Advanced</a>
      </Link>
      <Link href='/settings'>
        <a>Settings</a>
      </Link>
    </div>
  );
};

export default Routes;
