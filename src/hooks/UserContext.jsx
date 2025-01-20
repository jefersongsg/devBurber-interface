
import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext({});

export const UserProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({});

    const putUserData = (userInfo) =>{
        setUserInfo(userInfo);

        localStorage.setItem('devburger:userData', JSON.stringify(userInfo));
    };

    const logout = () => {
        setUserInfo({});
        localStorage.removeItem('devburger:userData');
    };
    useEffect(() => {
      const userInfoLocal = localStorage.getItem('devburger:userData');

      if(userInfoLocal){
        setUserInfo(JSON.parse(userInfoLocal));
      }
    }, [])
    


    return (
        <UserContext.Provider value={{userInfo, putUserData, logout}}>
            {children}
        </UserContext.Provider>
    );
};

 export const useUser = () => {
    const context = useContext (UserContext);

    if(!context) {
        throw new Error ('userUser must be a valid')
    }

    return context;
};