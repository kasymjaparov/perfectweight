import React from 'react'
import CalculatorWomen from './CalculatorWomen'
import './style.scss'

function App() {
  return (
      <div className="brokW_calculator">
<header className='brokW_calculator_header'>
<div className="brokW_calculator_header_icon"></div>
  <div className="brokW_calculator_header_title">Калькулятор по формуле Брока</div>
</header>
<div className="brokW_calculator_title">Рост, см</div>
<div>
<CalculatorWomen/>
</div>
    </div>
  )
}
export default App
