import React from 'react'
import './style.scss'
import Calculator from './Calculator'

function App() {
  return (
    <div className="brokW">
      <h2 className='brokW_title'>Идеальный вес — формула Лоренца</h2>
      <div className="brokW_formula-block">
        <div className="brokW_formula">вес = (рост, см - 100) - (рост, см - 150)/2</div>
      </div>
      <div className="brokW_description">Формула создана специально для женщин, считается, что она позволяет получить показатель близкий к результатам других, более трудоёмких, способов расчёта.</div>
      <Calculator/>
      <div className='brokw_sub-desc desc2'>* Полученные данные не могут трактоваться как профессиональные медицинские рекомендации и предоставляются исключительно в ознакомительных целях</div>
    </div>
  );
}

export default App;
