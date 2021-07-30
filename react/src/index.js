import React from 'react'
import ReactDOM from 'react-dom'

// import BomDia from './componentes/BomDia'
// import BoaTarde, { BoaNoite } from './componentes/Multiplos'
// import Multi from './componentes/Multiplos'
// import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
  <div>
    {/* <Pai nome="João" sobrenome="Silva" /> */}
    <Pai nome="Paulo" sobrenome="Silva">
      <Filho nome="Pedro" />
      <Filho nome="João" />
      <Filho nome="Carla" />
    </Pai>
  </div>
, document.getElementById('root'))  