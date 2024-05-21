// import mitt from 'mitt';

// const emitter = mitt();

// export const subscribe = (event: any, handler: any) => {
//   emitter.on(event, handler);
//   console.log(emitter);
// };

// export const unsubscribe = (event: any, handler: any) => {
//   emitter.off(event, handler);
// };

// export const dispatch = (event: any, data: any) => {
//   emitter.emit(event, data);
// };

// eventBus.js

const eventBus: any = {};

eventBus.listeners = {};

eventBus.on = function (eventName:any, callback:any) {
    console.log(eventName, callback);
  if (!this.listeners[eventName]) {
    this.listeners[eventName] = [];
  }
  this.listeners[eventName].push(callback);
};

eventBus.off = function (eventName:any, callback:any) {
  if (!this.listeners[eventName]) {
    return;
  }
  this.listeners[eventName] = this.listeners[eventName].filter(
    (listener:any) => listener !== callback
  );
};

eventBus.emit = function (eventName:any, data:any) {
    // console.log(eventName, data);
  if (!this.listeners[eventName]) {
    return;
  }
  this.listeners[eventName].forEach((listener:any) => {
    listener(data);
  });
};

export default eventBus;