import { createContext } from 'react'

const userContext = createContext({
    userData: {
    name: "",
    age: 0,
  },
  setName: () => {},
  setAge: () => {},
});

export default userContext