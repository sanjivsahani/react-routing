import React from 'react';

const Unmounting = () => {
  return <div className='container'>
      <h1 className='text-center'>Unounting</h1>
      <p className='text-center'>`componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().

You should not call setState() in componentWillUnmount() because the component will never be re-rendered. Once a component instance is unmounted, it will never be mounted again.`</p>
  </div>;
};

export default Unmounting;
