import React from 'react'

function handleSubmit(e){
    e.preventDefault(); //lo de siempre para evitar refresh en la pagina
    console.log('SUBMITED')
}
function Form() {
  return (
    <form onSubmit={handleSubmit}>
        <button>Submit</button>
    </form>
  )
}

export default Form