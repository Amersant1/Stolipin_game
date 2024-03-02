import { useEffect, useState } from 'react'
import scroll from './assets/scroll.svg'
import stolipin from './assets/stolipin.jpg'
import column from './assets/column.svg'
import fashi from './assets/fashi.svg'
import liber from './assets/liber.svg'
import tsar from './assets/tsar.svg'
import commun from './assets/commun.svg'
import './App.scss'
import { setCookie, getCookie } from './cookies'

import { getEvents, loses, conditionEvents } from './events'
import event from './event'

Date.prototype.addDay = function() {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + 1);
  return date;
}
function normal_format(dateText){
  let mapa=dateText.split(".");
  if (mapa[0].length==1){
    mapa[0]="0"+mapa[0];
  }
  mapa[1]=Number(mapa[1])+1;
  mapa[1]=mapa[1].toString();
  if (mapa[1].length==1){
    mapa[1]="0"+mapa[1];
  }
  dateText=mapa[0]+'.'+mapa[1]+'.'+mapa[2];
  return dateText;
}


let stats = {commun: 50, liber: 50, fashi: 50, tsar: 50};
let events = {};
let thisConditionEvents = conditionEvents;
function App() {
  const [values, setValues] = useState({speed: 0, date: new Date(1906, 1, 2)});
  function setDate(value) {
    setCookie("stolpin_date", value.toString());
    setCookie("stolpin_stats", JSON.stringify(stats));
    setValues({...values, date: value});
  }
  function setSpeed(value) {
    setValues({...values, speed: value});
  }
  function setDateAndSpeed(date, speed) {
    setCookie("stolpin_date", date.toString());
    setCookie("stolpin_stats", JSON.stringify(stats));
    setValues({date, speed});
  }

  let timeout = setTimeout(() => {
    if (values.speed != 0) {
      setDate(values.date.addDay());
    }
  }, values.speed == 2 ? 300 : 1000);

  let dateText = `${values.date.toLocaleDateString('ru')}`;

  if(dateText in events) {
    clearTimeout(timeout);
    event(events[dateText].text, events[dateText].options, (statsChange) => {
      stats.commun += statsChange.commun;
      stats.liber += statsChange.liber;
      stats.fashi += statsChange.fashi;
      stats.tsar += statsChange.tsar;
      setDate(values.date.addDay());
    });
  }
  for(let lose of ["commun", "liber", "fashi", "tsar"]) {
    if(stats[lose] <= 0) {
      clearTimeout(timeout);
      event(loses[lose][0], [], () => {
        stats = {liber: 50, tsar: 50, fashi: 50, commun: 50};
        setDateAndSpeed(new Date(1906, 1, 2), 0);
        events = getEvents();
      });
    } else if(stats[lose] >= 100) {
      clearTimeout(timeout);
      event(loses[lose][1], [], () => {
        stats = {liber: 50, tsar: 50, fashi: 50, commun: 50};
        setDateAndSpeed(new Date(1906, 1, 2), 0);
        events = getEvents();
      });
    }
  }
  for(let conditionEventIndex in thisConditionEvents) {
    if(eval(thisConditionEvents[conditionEventIndex].condition)) {
      clearTimeout(timeout);
      event(thisConditionEvents[conditionEventIndex].text, [{...thisConditionEvents[conditionEventIndex], text: 'OK'}], (statsChange) => {
        stats.commun += statsChange.commun;
        stats.liber += statsChange.liber;
        stats.fashi += statsChange.fashi;
        stats.tsar += statsChange.tsar;
        setDate(values.date.addDay());
      });
      thisConditionEvents.splice(conditionEventIndex, 1);
    }
  } 

  useEffect(() => {
    let statsCookie = getCookie("stolpin_stats");
    if(statsCookie != undefined) {
      stats = JSON.parse(statsCookie);
    }
    let dateCookie = getCookie("stolpin_date");
    if(dateCookie != undefined) {
      setDate(new Date(getCookie("stolpin_date")));
    }

    events = getEvents();
  }, []);

  return (
    <div>
      <div id='main-img'>
        <img src={stolipin}/>
      </div>
      <div id='menu'>
        
        <p id='date'>{`${values.date.toLocaleDateString('ru')}`}</p>

        <div className='header' style={{ left: "25%", top: "100px" }}>
          <p>Контроль государства</p>
          <img className="img-left" src={column}/>
          <img className="img-right" src={column}/>
        </div>

        <div className='loader' style={{ left: "10%", top: "200px" }}>
          <div><div style={{ width: stats.commun + "%" }}/></div>
          <img src={commun}/>
          <p>Левые</p>
          <h1>{stats.commun}/100</h1>
        </div>

        <div className='loader' style={{ left: "55%", top: "200px" }}>
          <div><div style={{ width: stats.liber + "%" }}/></div>
          <img src={liber}/>
          <p>Центристы</p>
          <h1>{stats.liber}/100</h1>
        </div>

        <div className='loader' style={{ left: "10%", top: "270px" }}>
          <div><div style={{ width: stats.fashi + "%" }}/></div>
          <img src={fashi}/>
          <p>Правые</p>
          <h1>{stats.fashi}/100</h1>
        </div>

        <div className='loader' style={{ left: "55%", top: "270px" }}>
          <div><div style={{ width: stats.tsar + "%" }}/></div>
          <img src={tsar}/>
          <p>Царь</p>
          <h1>{stats.tsar}/100</h1>
        </div>

        <div className='header' style={{ left: "25%", top: "400px" }}>
          <p>Скорость времени</p>
          <img className="img-left" src={scroll}/>
          <img className="img-right" src={scroll}/>
        </div>

        <button className={`time-switcher${values.speed == 0 ? ' active' : ''}`}
          style={{ left: "25%", top: "480px" }} onClick={() => { setSpeed(0); clearTimeout(timeout); }}>
          <p>Пауза</p>
        </button>
        <button className={`time-switcher${values.speed == 1 ? ' active' : ''}`}
          style={{ left: "25%", top: "550px" }} onClick={() => { setSpeed(1); clearTimeout(timeout); }}>
          <p>Обычная</p>
        </button>
        <button className={`time-switcher${values.speed == 2 ? ' active' : ''}`}
          style={{ left: "25%", top: "620px" }} onClick={() => { setSpeed(2); clearTimeout(timeout); }}>
          <p>Быстрая</p>
        </button>
        <button className={`time-switcher`}
          style={{ left: "25%", top: "710px" }} onClick={() => { 
            clearTimeout(timeout);
            stats = {liber: 50, tsar: 50, fashi: 50, commun: 50};
            setDateAndSpeed(new Date(1906, 1, 2), 0);
            events = getEvents();
            thisConditionEvents = conditionEvents;
           }}>
          <p>Сброс</p>
        </button>
        <img/>
      </div>
    </div>
  )
}

export default App
