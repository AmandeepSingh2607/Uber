// Desc: UserContext is a context provider that will be used to store the user data and pass it to the components that need it.
// This context provider will be used in the main.jsx file to wrap the entire application. This will allow the user data to be accessed by any component in the application.
// This context provider will use the createContext and useState hooks to create a context and store the user data in the context.
// The UserContext component will be exported as a default component so that it can be imported and used in other components.
import { createContext } from 'react'
import { useState } from 'react'

export const UserDataContext = createContext()

const UserContext = ({children}) => {
    const [user, setUser] = useState({
   email:'',
    password:'',
firstname:'',
lastname:'',
    })
  return (
    <div>
        <UserDataContext.Provider 
         
        value={{user, setUser}}
         >
            {children} 

        </UserDataContext.Provider>

    </div>
  )
}

export default UserContext