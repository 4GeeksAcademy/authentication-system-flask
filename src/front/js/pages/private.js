import React, {useEffect} from "react";
import { Navbar } from "../component/navbar";
import { useNavigate } from "react-router-dom";

export const Private = () => {

	const navigate = useNavigate()

	useEffect(()=>{
		const isLoggedIn = sessionStorage.getItem("accessToken")

		if (!isLoggedIn){
			navigate("/")
		}
	}, [])

	return (
		<>
		<Navbar />
		<div className="container-fluid">
            <h1>This is the private route</h1>
		</div>
		</>
	);
};
