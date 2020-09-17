import React from 'react'
import {BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import CalculatorMen from './CalculatorMen'
import CalculatorWomen from './CalculatorWomen'
import './style.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="brokW_calculator">
<header className='brokW_calculator_header'>
<div className="brokW_calculator_header_icon"></div>
  <div className="brokW_calculator_header_title">Калькулятор по формуле Брока</div>
</header>
<div className="brokW_calculator_links-block">
  <NavLink to='/' activeClassName='brokW_calculator_links-active' className="brokW_calculator_links" exact>Мужчины</NavLink>
  <NavLink to='/brokW' activeClassName='brokW_calculator_links-active' className="brokW_calculator_links" exact>Женщины</NavLink>
</div>
<div className="brokW_calculator_title">Рост, см</div>
<div>
<Switch>
<Route path="/" component={CalculatorMen} exact />
<Route path="/brokW" component={CalculatorWomen} exact />
</Switch>
</div>
    </div>
    </BrowserRouter>
  )
}
export default App
