import { useEffect } from 'react';
// import { subscribe, dispatch, unsubscribe } from './event';
import eventBus from './event';
import { Link } from 'react-router-dom';

const ComponentA = () => {
  useEffect(() => {
    // const handler = (data : any) => {
    //   console.log('ComponentA received:', data);
    // };

    // eventBus.on('customEvent', handler);

    return () => {
    //   eventBus.off('customEvent', handler);
    };
  }, []);

  const sendData = () => {
    // dispatch('customEvent', 'Data from ComponentA');
    const eventData = { message: 'Hello from ComponentA!' };
    eventBus.emit('someEvent', eventData);
  };

  return (
    <div>
      <button onClick={sendData}>Send Data</button>
      <Link to='/componentB'>Go to Component B</Link>
    </div>
  );
};

export default ComponentA;