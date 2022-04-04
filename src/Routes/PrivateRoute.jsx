import React, { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
export const PrivateRoutes = ({path, element, redirectpath="/login"}) =>{

    const {isAuth} = useContext(AuthContext);
    let navigate = useNavigate();
    return(
        <>
        <Routes>
            
        
            {isAuth ? (
                <Route path={path} element={element} />
            ) : (
                navigate(redirectpath)
            )
        }
        </Routes>
        </>
    )
}