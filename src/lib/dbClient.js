import axios from "axios";


const backend = "http://localhost:7000"; //temp, will go back and configure properly for front and backend later

const getSinglePokemon = async (pokeName) => {
    try {
        const pokeData = await axios.get(`${backend}/pokemon/${pokeName}`);
        // console.log(pokeData.data);
        return pokeData.data;
    } catch (error) {
        console.error(error);
    }
};

const getPokemonById = async (pokeId) => {
    try {
        const pokeData = await axios.get(`${backend}/pokemon/withid/${pokeId}`);
        // console.log(pokeData.data);
        return pokeData.data;
    } catch (error) {
        console.error(error);
    }
};

export { getSinglePokemon, getPokemonById };

//copy of same file from VinylCountdown app, with axios fetches we used from our own backend

// import axios from "axios";
// const backend = "http://localhost:24601"; //! Temp

// // const backend = import.meta.env.VITE_BACKEND_URL_DEPLOY; //! Uncomment

// //User functionality
// const signInUser = async (form) => {
//     try {
//         if (!form.email || !form.password)
//             throw new Error(alert("Please enter a valid email and password!"));
//         const userData = await axios.get(
//             `http://localhost:24601/users?email=${form.email}&password=${form.password}`
//         );
//         console.log(userData.data);
//         return userData.data;
//     } catch (error) {
//         console.error(error);
//     }
// };

// const makeNewUser = (newUser) => {
//     axios
//         .post("http://localhost:24601/users", {
//             first_name: newUser.firstName,
//             last_name: newUser.lastName,
//             email: newUser.email,
//             password: newUser.password,
//             profile_pic: newUser.profilePic,
//         })
//         .then(function (response) {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// };

// const editUser = async (userId, userInfo) => {
//     try {
//         const userData = await axios.patch(
//             `http://localhost:24601/users/${userId}`,
//             {
//                 first_name: userInfo.firstName,
//                 last_name: userInfo.lastName,
//                 email: userInfo.email,
//                 password: userInfo.password,
//                 profile_pic: userInfo.profilePic,
//             }
//         );
//         return userData.data;
//     } catch (error) {
//         console.error(error);
//     }
// };

// const addToWishlist = (userId, albumId) => {
//     axios
//         .post(`http://localhost:24601/wishlist/${userId}/${albumId}`)
//         .then(function (response) {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// };

// const removeFromWishlist = (userId, albumId) => {
//     axios
//         .delete(`http://localhost:24601/wishlist/${userId}/${albumId}`)
//         .then(function (response) {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// };

// //Album functionality
// const getAllAlbums = async () => {
//     const { data } = await axios.get(`${backend}/albums`);
//     return data;
// };

// const getSingleAlbum = async (id) => {
//     const { data } = await axios.get(`${backend}/albums/${id}`);
//     return data;
// };

// /**
//  * function for getting relevant recs based on genre
//  * @param  genre should be an array
//  * @param id keeps the album on the page from the rec list, should be the sys id of the album
//  */
// const getRecs = async (genre, id) => {};

// export {
//     signInUser,
//     makeNewUser,
//     editUser,
//     addToWishlist,
//     removeFromWishlist,
//     getAllAlbums,
//     getSingleAlbum,
//     getRecs,
// };
