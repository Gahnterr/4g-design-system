import React from "react";
import Label from "../Label/Label";
import { PropTypes } from "prop-types";

const Selectlist = props => {
	const { label, options, placeholder } = props;

	const renderOptions = options.map((option, index) => (
		<option className="temis-selectlist__option" key={index}>
			{option}
		</option>
	));

	return (
		<React.Fragment>
			{label ? <Label>{label}</Label> : null}
			<select className="temis-selectlist" {...props}>
				<option disabled>
					{placeholder ? placeholder : "Seleccione una opción"}
				</option>
				{renderOptions}
			</select>
		</React.Fragment>
	);
};

Selectlist.propTypes = {
	/** Define el texto que irá en la etiqueta.
	 * Si lo dejas vacío, no se renderizará la etiqueta.  */
	label: PropTypes.string,
	/** Introduce componentes "SelectItem" para popular el dropdown de este componente. */
	options: PropTypes.array,
};

Selectlist.defaultProps = {
	label: "Países:",
};

export default Selectlist;
