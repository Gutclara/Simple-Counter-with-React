//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
let counter = 0;
setInterval(() => {
	let quinto = Math.floor(counter / 10000);
	let cuarto = Math.floor(counter / 1000);
	let tercero = Math.floor(counter / 100);
	let segundo = Math.floor(counter / 10);
	let primero = Math.floor(counter / 1);
	ReactDOM.render(
		<Home
			primero={primero}
			segundo={segundo}
			tercero={tercero}
			cuarto={cuarto}
			quinto={quinto}
		/>,
		document.querySelector("#app")
	);
	counter++;
}, 1000);
