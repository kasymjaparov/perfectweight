import React from 'react'
import './style.scss'

function App() {
    const[manW,setManW]=React.useState('')
    const[middleware,setMiddleware]=React.useState('')
    const[showOn,setShowOn]=React.useState(false)
    const[noth,setNoth]=React.useState(false)
    const[betw,setBetw]=React.useState(false)
    const clean = ()=>{
        setManW('')
    }
    const calculate = ()=>{
        if(manW>=110&&manW<=250){
setMiddleware(manW)
            setShowOn(true)
            setNoth(false)
        }
        else if(!manW){
            setNoth(true)
            setShowOn(false)
        }
        else if(manW<110&&manW>250){
            setBetw(true)
            setShowOn(false)
            setNoth(false)
        }
    }
  return (
      <div className="brokW_calculator-man">
<input value={manW} onChange={event => setManW(event.target.value)} placeholder='Рост, см' className='brokW_calculator_input' type="text"/>
<div className="brokW_calculator_calculate-block">
<div onClick={calculate} className="brokW_calculator_calculate">Рассчитать</div>
<div onClick={clean} className="brokW_calculator_calculate">Очистить</div>
</div>
  {showOn && <div className='brokW_calculator_result'>Идеальный вес по формуле Брока:  <span> {` ${Math.round((middleware-100)-(middleware-150)/2)}кг`}</span></div>}
  {noth && <div className='brokW_calculator_result'>Заполните поле!</div>}
  {betw && <div className='brokW_calculator_result'>Число не в корректном интервале 110 - 250</div>}
    </div>
  )
}
export default App
