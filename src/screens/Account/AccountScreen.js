import React, {useState,useEffect} from "react";
import LoadingModal from "../../components/Shared/LoadingModal/LoadingModal";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import UserGuestScreen from "./UserWestScreen/UserGuestScreen";
import UserLogedScreen from "./UserLogedScreen";


const AccountScreen = () => {
    const[Haslogged, setHasLogged]=useState (null);
    //efect
    useEffect(()=>{
        const auth=getAuth();
        onAuthStateChanged(auth, (user)=>{
             setHasLogged(user!=null ?true: false);
        });
    }, []);

    if(Haslogged == null){
        return <LoadingModal show={true} text="Cargando"/>;
    }
    return Haslogged==true ? <UserLogedScreen/>:<UserGuestScreen/>
};

export default AccountScreen;