import { auth } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, type User,   } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";


type AuthContextData = {
    user: User | null;
    logIn: typeof logIn;
    signUp: typeof signUp;
    logOut: typeof logOut;
    googleSignIn: typeof googleSignIn;
};

interface IUserAuthProviderProps {
    children: React.ReactNode
}


const logIn = (eamil: string, password: string) => {

    return signInWithEmailAndPassword(auth, eamil, password)

}


const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);

}
const logOut = () => {
    signOut(auth);
}


const googleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
}

export const userAuthContext = createContext<AuthContextData>({
    user: null,
    logIn,
    signUp,
    logOut,
    googleSignIn,
});

export const UserAuthProvider: React.FC<IUserAuthProviderProps> = ({ children }) => {

    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('the logged in user state is :', user);
                setUser(user)
            }
            return () => {
                unSubscribe();
            }
        })
    }, [])


    const value: AuthContextData = {
        user,
        logIn,
        signUp,
        logOut,
        googleSignIn,
    }
    return (
        <userAuthContext.Provider value={value} >{children} </userAuthContext.Provider>
    )
}

export const useUserAuth = () => {
    return useContext(userAuthContext);
}