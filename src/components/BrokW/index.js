import React from 'react'
import './style.scss'
import Calculator from './Calculator'

function App() {
  return (
    <div className="brokW">
      <h2 className='brokW_title'>Идеальный вес по формуле Брока</h2>
      <span className='brokW_minidesc'>Формула Брока достаточно проста</span>
      <div className="brokW_formula-block">
        <div className="brokW_formula">для мужчин: вес = (рост, см - 100) * 1.15</div>
        <div className="brokW_formula">для женщин: вес = (рост, см - 110) * 1.15</div>
      </div>
      <div className="brokW_description">Она напоминает старинную формулу - рост в сантиметрах минус 100. Но медицина ее немного подкорректировала. Теперь формула разделяет людей на мужчин и женщин, и учитывает особенности женской фигуры.</div>
      <Calculator/>
      <div className='brokw_sub-desc'>* Полученные данные не могут трактоваться как профессиональные медицинские рекомендации и предоставляются исключительно в ознакомительных целях</div>
    </div>
  );
}

export default App;
