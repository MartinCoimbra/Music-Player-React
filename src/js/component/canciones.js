import React from "react";
import PropTypes from "prop-types";

export function Cancion(props) {
	return (
		<div className="canciones text-white">
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
	url: PropTypes.string
};
