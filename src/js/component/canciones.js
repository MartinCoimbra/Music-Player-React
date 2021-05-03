import React from "react";
import PropTypes from "prop-types";

export function Cancion(props) {
	/* al hacer onclick modifica el srf del audio y colocale cual lickeo */

	/*"https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3"*/
	return (
		<div
			onClick={() => {
				props.cambiarCancion(props.url);
				props.setIdescuchando(props.id - 1);
			}}
			className="canciones text-white">
			<div className=" d-flex p-3 bg-dark my-2">
				<p className="h3">{props.id}</p>
				<p className="ml-3 h3">{props.name}</p>
			</div>
		</div>
	);
}
Cancion.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	url: PropTypes.string,
	setIdescuchando: PropTypes.func,
	cambiarCancion: PropTypes.func
};
