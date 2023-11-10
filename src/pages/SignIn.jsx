import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Input, Button } from "@nextui-org/react";
import { MailIcon } from "../assets/MailIcon.jsx";
import { EyeFilledIcon } from "../assets/EyeFilledIcon.jsx";
import { EyeSlashFilledIcon } from "../assets/EyeSlashFilledIcon.jsx";
import { authSignInUser } from "../lib/dbClient.js";
import { useAppContext } from "../context/AppContext.jsx";
const SignIn = () => {
    const [form, setForm] = useState({
        username: "",
        password: "",
    });
    const { setToken, isAuth } = useAppContext();

    //state and function for toggling password visibility
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleAuthSignin = () => {
        authSignInUser(form)
            .then((headers) => {
                localStorage.setItem("token", headers.authorization);
                setToken(headers.authorization);
                setTimeout(() => navigate("/"), 1000);
            })
            .catch((error) => console.error(error));
    };

    // const handleSubmit = () => {
    //     //updated logic from sign in modal with checks
    //     signInUser(form)
    //         .then((userData) => {
    //             let test = userData;
    //             if (userData) {
    //                 setUser(userData);
    //             } else {
    //                 setUser(false);
    //             }
    //             return test;
    //             // userData.length ? setUser(userData) : setUser(false);
    //         })
    //         .then((test) => {
    //             if (!test) return alert("Invalid username or password!");
    //             setForm({
    //                 username: "",
    //                 password: "",
    //             });
    //             navigate("/");
    //         })
    //         .catch((error) => console.error(error));
    // };

    if (isAuth) return <Navigate to="/" />;

    return (
        <div className="mt-[-1px] w-full h-screen flex items-center justify-center">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleAuthSignin();
                }}
                autoComplete="off"
                className="flex flex-col items-center justify-between bg-base-300 pt-4 rounded overflow-hidden mx-auto my-0 w-2/3 sm:w-1/2 2xl:w-1/3 transition-all"
            >
                <h1 className="mt-2 mb-8 lg:mb-16 text-2xl font-semibold text-white">
                    Sign In
                </h1>
                <div className="flex flex-col items-center justify-around h-1/2 w-full text-white">
                    <Input
                        isRequired
                        type="text"
                        label="Username"
                        labelPlacement="outside"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        className="w-full mb-4 p-2"
                        endContent={
                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                    />
                    <Input
                        isRequired
                        type={isVisible ? "text" : "password"}
                        label="Password"
                        labelPlacement="outside"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full mb-1 p-2"
                        endContent={
                            <button
                                className="focus:outline-none"
                                type="button"
                                onClick={toggleVisibility}
                            >
                                {!isVisible ? (
                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                )}
                            </button>
                        }
                    />
                </div>
                <br />
                <div className="flex w-full">
                    <Button className="w-1/2 bg-accent hover:bg-info-content hover:border-info-content rounded-none text-white font-normal text-lg p-4 transition-none uppercase">
                        Register
                    </Button>
                    <Button
                        type="submit"
                        className="w-1/2 bg-success hover:bg-success-content hover:border-success-content rounded-none text-white font-normal text-lg py-4 transition-none uppercase"
                    >
                        Sign In
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
