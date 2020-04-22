const pocStore = (() => {
  const actions = {};
  let store = {};

  return {
    setStore(initialStore) {
      store = {
        ...initialStore
      };
    },
    getStore() {
      return store;
    },
    registerAction(action) {
      const { type, callback } = action;

      actions[type] = callback;
    },
    dispatch(type, data, useCallback = true) {
      store = {
        ...store,
        ...data
      };
      debugger;
      if (!useCallback) {
        return;
      }

      try {
        actions[type](store);

        const customEvent = new CustomEvent(type, {
          detail: {
            store: store
          }
        });

        window.dispatchEvent(customEvent);
      } catch (err) {
        console.error(err);
      }
    },
    listen(type, callback) {
      window.addEventListener(type, callback);
    },
    get actions() {
      return actions;
    }
  };
})();

export default pocStore;
