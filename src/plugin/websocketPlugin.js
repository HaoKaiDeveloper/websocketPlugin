export function webSocketPlugin(socketUrl) {
  let socket = null;

  const closeWebsocket = (store) => {
    if (socket) {
      socket.close();
      if (store) {
        socket = null;
        store.isConnected = false;
      }
    }
  };

  const initializaWebsocket = (store) => {
    closeWebsocket();
    socket = new WebSocket(socketUrl);

    socket.onopen = () => {
      console.log("connected");
      store.isConnected = true;
    };

    socket.onmessage = (event) => {
      store.socketData = event.data;
    };

    socket.onclose = () => {
      console.log("onclose");
      store.isConnected = false;
      store.socketData = null;
    };
  };

  return ({ store }) => {
    store.$socket = socket;
    store.initializaWebsocket = () => initializaWebsocket(store);
    store.closeWebsocket = () => closeWebsocket(store);

    initializaWebsocket(store);
  };
}
