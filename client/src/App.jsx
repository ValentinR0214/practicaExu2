
import { useState } from 'react'
import SumaController from './modules/sumaController'

function App() {

  const [nums, setNums] = useState({
    num1: 0,
    num2: 0
  })

  const [suma, setSuma] = useState(0);

  const handleChange = ({target}) => {
    const {name, value} = target;

    setNums(previous => {
      return{
        ...previous,
        [name]: value
      }
    })
  }

    const doSuma = async () => {
      setSuma( await SumaController.doSuma(nums))
    }

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Ricardo Valentin Roque Hernandéz</span>
      </nav>

      <div className="container mt-4">
        <h2>Suma de 2 numeros</h2>
        <div className="row">
          <div className="col-4">
            <input type="text" onChange={(e) => handleChange(e)}  name='num1' className="form-control" placeholder='Número 1' />
          </div>
          <div className="col-4">
            <input type="text" onChange={(e) => handleChange(e)} name='num2' className="form-control" placeholder='Número 2'/>

          </div>
          <div className="col-4">
            <button className="btn btn-primary" onClick={() => doSuma()}>Sumar</button>
          </div>
        </div>

        <br />

        <h3>Resultado: {suma}</h3>
      </div>

    </>
  )
}

export default App
