import { useEffect } from 'react';
// import { subscribe, unsubscribe } from './event';
import eventBus from './event';

const ComponentB = () => {
  useEffect(() => {
    // const handler = (data: any) => {
    //   console.log('ComponentB received:', data);
    // };

    const handleEvent = (data: any) => {
        console.log('ComponentA received event:', data);
    };

    eventBus.on('someEvent', handleEvent);

    // subscribe('customEvent', handler);

    return () => {
    //   unsubscribe('customEvent', handler);
    eventBus.off('someEvent', handleEvent);
    };
  }, []);

  return <div>ComponentB</div>;
};

export default ComponentB;