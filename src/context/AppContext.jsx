import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";

const AppContextObj = createContext();

export const useAppContext = () => useContext(AppContextObj);

const AppContext = ({ children }) => {
    // const isSignedIn = JSON.parse(localStorage.getItem("user"));
    const hasPokemon = JSON.parse(localStorage.getItem("chosenPokemon"));

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);
    const [chosenPokemon, setChosenPokemon] = useState(hasPokemon);

    const validateToken = async () => {
        try {
            const { data } = await axios(
                "https://pokefight-server-onts.onrender.com/auth/me",
                {
                    headers: { Authorization: token },
                }
            );
            setIsAuth(true);
            setUser(data);
        } catch (error) {
            setIsAuth(false);
            setUser(null);
            console.log(error.message);
        }
    };

    useEffect(() => {
        token && validateToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        localStorage.setItem("chosenPokemon", JSON.stringify(chosenPokemon));
    }, [chosenPokemon]);

    // useEffect(() => {
    //     localStorage.setItem("user", JSON.stringify(user));
    //     localStorage.setItem(
    //         "chosenPokemon",
    //         JSON.stringify(chosenPokemon)
    //     );
    // }, [user, chosenPokemon]);

    return (
        <AppContextObj.Provider
            value={{
                token,
                setToken,
                isAuth,
                setIsAuth,
                user,
                setUser,
                chosenPokemon,
                setChosenPokemon,
            }}
        >
            {children}
        </AppContextObj.Provider>
    );
};

export default AppContext;
