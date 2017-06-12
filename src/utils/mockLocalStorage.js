const storage = {};

const localStorageMock = {
  getItem: key => storage[key],
  setItem: (key, value) => {
    storage[key] = value;
  },
  clear: () => {
    Object.getOwnPropertyNames(storage).forEach((prop) => {
      delete storage[prop];
    });
  },
};

export default localStorageMock;
