import React from "react";
import Cards from "./Cards";
import { useState } from "react";
import MyList from "./MyList";



function Movies({string, setString}){

    const cat = ["popular", "top_rated","upcoming","now_playing"];
    const [mine, setMine] = useState([]);
    const [rangeValue1, setRangeValue1] = useState(0);
    const [rangeValue2, setRangeValue2] = useState(0);
    const [rangeValue3, setRangeValue3] = useState(0);

    
    return(
      //les bars pour les filtrages
      <div>
        <div className="ligne">
          <div className="titleinput">
          <h3>Vote average</h3>
          <input className="custom-slider custom-slider-bullet" type="range" min="0" max="10" defaultValue={rangeValue1} onChange={(e) => setRangeValue1(e.target.value)}/>
          <h5 className="titleinput">{rangeValue1}</h5>
          </div>
          <div className="titleinput">
          <h3>Vote count</h3>
          <input className="custom-slider custom-slider-bullet" type="range" min="0" max="30000" defaultValue={rangeValue2} onChange={(e) => setRangeValue2(e.target.value)}/>
          <h5 className="titleinput">{rangeValue2}</h5>
          </div>
          <div className="titleinput">
          <h3>Popularity</h3>
          <input className="custom-slider custom-slider-bullet" type="range" min="0" max="6000" defaultValue={rangeValue3} onChange={(e) => setRangeValue3(e.target.value)}/>
          <h5 className="titleinput">{rangeValue3}</h5>
          </div>
        </div>

        {/*créer les listes de films et les afficher*/}
        <MyList  mine={mine} setMine={setMine}/>
        <Cards   mine={mine} setMine={setMine} rangeValue1={rangeValue1} rangeValue2={rangeValue2} rangeValue3={rangeValue3} string={string} setString={setString} category={cat[0]}/>
        <Cards   mine={mine} setMine={setMine} rangeValue1={rangeValue1} rangeValue2={rangeValue2} rangeValue3={rangeValue3} string={string} setString={setString} category={cat[1]}/>
        <Cards   mine={mine} setMine={setMine} rangeValue1={rangeValue1} rangeValue2={rangeValue2} rangeValue3={rangeValue3} string={string} setString={setString} category={cat[2]}/>
        <Cards   mine={mine} setMine={setMine} rangeValue1={rangeValue1} rangeValue2={rangeValue2} rangeValue3={rangeValue3} string={string} setString={setString} category={cat[3]}/>
        

      </div>
    )
}
export default Movies