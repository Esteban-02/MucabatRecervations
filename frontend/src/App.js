import React from 'react';
import './App.css';  // Importa los estilos

const App = () => {
    return (
        <div className="app-container">
            {/* Imagen de fondo */}
            <div className="background-image"></div>

            {/* Contenedor del logo y formulario */}
            <div className="content">
                {/* Logo */}
                <img src={require('./imagenes/LogoSNF2.png')} alt="Logo" className="logo" />

                {/* Formulario de reserva */}
                <form className="reservation-form">
                    <h2>Reserva tu lugar</h2>
                    <label>
                        Nombre:
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        Fecha:
                        <input type="date" name="date" required />
                    </label>
                    <label>
                        Hora:
                        <input type="time" name="time" required />
                    </label>
                    <label>
                        Número de personas:
                        <input type="number" name="people" min="1" max="10" required />
                    </label>
                    <button type="submit">Reservar</button>
                </form>
            </div>
        </div>
    );
}

export default App;
