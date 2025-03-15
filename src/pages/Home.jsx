import {
    Link
} from "react-router-dom";


import Agendas from "../components/Agendas.jsx";


export const Home = () => {

	return (
		<div className="container mt-5">
			<div className="col-6 m-auto col-md-9 col-lg-8 mb-4 d-flex justify-content-end">
				<Agendas/>
			</div>
		</div>
    )
};