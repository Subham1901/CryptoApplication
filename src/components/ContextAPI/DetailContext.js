import { createContext } from 'react';

export const setDetails = createContext({
  currency: null,
  setCurr: () => {},
});
