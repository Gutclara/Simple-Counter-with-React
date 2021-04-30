import React from "react";

//include images into your bundle
/*import rigoImage from "../../img/rigo-baby.jpg";*/

//create your first component
export function Home(props) {
	return (
		<div className="container col-12 d-flex">
			<div id="icono" className="icono col-2">
				<i className="far fa-clock"></i>
			</div>
			<div id="quinto5" className="quinto col-2">
				{props.quinto}
			</div>
			<div id="cuarto4" className="cuarto col-2">
				{props.cuarto}
			</div>
			<div id="tercero3" className="tercero col-2">
				{props.tercero}
			</div>
			<div id="segundo2" className="segundo col-2">
				{props.segundo}
			</div>
			<div id="primero1" className="primero col-2">
				{props.primero % 10}
			</div>
		</div>
	);
}
