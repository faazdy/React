import React from "react";
import "./style.css";

function Product({ nombreProducto, cantidad, compraCompleta, precio }) {
    const styles = {
        color: compraCompleta ? 'green' : ''
    }
    return (
        <div className="product-card">
            <div className="img">
                <img
                src="https://img.freepik.com/foto-gratis/producto-cosmetico-organico-estetica-ensueno-fondo-fresco_23-2151382816.jpg"
                alt=""
                />
            </div>
            <div className="text" style={styles}>
                <h3>{nombreProducto} - ${precio}</h3>
                <h4>{cantidad}</h4>
                <h4>Total: ${precio * cantidad}</h4>
                {compraCompleta ? (
                <h5>
                    Ya tienes {cantidad > 1 ? "estos productos" : "este producto"}
                </h5>
                ) : <button>COMPRAR</button>}
            </div>
        </div>
    );
}

export default Product;
