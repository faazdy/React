import React from 'react'
import Product from './Product';
import "./style.css"

function ProductList() {

    const items = [
        {
            id: 1,
            nombreProducto: 'Leche',
            cantidad: 2,
            compraCompleta: false,
            precio: 10 
        },
        {
            id: 2,
            nombreProducto: 'Pan',
            cantidad: 1,
            compraCompleta: false,
            precio: 8
        },
        {
            id: 3,
            nombreProducto: 'Huevos',
            cantidad: 12,
            compraCompleta: true,
            precio: 2
        },
        {
            id: 4,
            nombreProducto: 'Queso',
            cantidad: 1,
            compraCompleta: false,
            precio: 3
        },
        {
            id: 5,
            nombreProducto: 'Café',
            cantidad: 1,
            compraCompleta: false,
            precio: 5
        },
        {
            id: 6,
            nombreProducto: 'Azúcar',
            cantidad: 1,
            compraCompleta: true,
            precio: 12
        },
        {
            id: 7,
            nombreProducto: 'Frutas',
            cantidad: 5,
            compraCompleta: false,
            precio: 5
        },
        {
            id: 8,
            nombreProducto: 'Verduras',
            cantidad: 3,
            compraCompleta: true,
            precio: 8
        }
    ];
    
    return (
        <div className="products-container">
            {
                items.map((item) =>{
                    const { nombreProducto, cantidad, compraCompleta, precio, id} = item
                    return <Product 
                            {...item}/>

                    {/* return <Product //ESTO SIRVE IGUAL QUE LO DE ARRIBA (LO DE ARRIBA SIRVE SOLO SI LOS PROPS TIENEN LOS MISMOS NOMBRES QUE LAS CLAVES DEL OBJETO)
                                {/*nombreProducto={nombreProducto} 
                                cantidad={cantidad} 
                                compraCompleta={compraCompleta} 
                                precio={precio} 
                                key={id}*/}
                })
            }
        </div>
        
    )
}

export default ProductList