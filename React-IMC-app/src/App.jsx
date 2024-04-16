import './App.css'
import Formulario from './components/Formulario/Formulario.jsx'
import Tabela from './components/Tabela/Tabela.jsx'

function App() {

  return (
    <div className='app'>
      <div className="container">
        <h1 className='title'>Calculadora de IMC</h1>
        <Formulario />
        <Tabela />
      </div>
    </div>
  )
}

export default App
