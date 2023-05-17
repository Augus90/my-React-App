import PropTypes from "prop-types"

export default function Header({titulo, descripcion}){

    return(
        <div>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
        </div>
    );

}

Header.propTypes = {
    titulo: PropTypes.string,
    descripcion: PropTypes.string
}