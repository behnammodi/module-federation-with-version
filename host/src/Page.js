import React from 'react';

const Counter = React.lazy(() => import('remote/Counter'));

function Page() {
  return <div>
    Hello Page
    <React.Suspense fallback='Loading header'>
      <Counter />
    </React.Suspense>
  </div>
}

export default Page;
