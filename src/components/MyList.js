
import React, { useEffect, useState } from "react";
import Element from "./Element";


function MyList({ mine, setMine}){

    
    const [checked, setChecked] = useState(false)
    const textML= "My list"

    //bouton cliqué renvoie vrai ou faux
    function afficheList(){
        if(checked){
            setChecked(false)
        }else if (!checked){
            setChecked(true)
        }
            
    }

    return(
        <div>
            <button onClick={afficheList} className="button-checked title">Show My List</button>

        {/*affiche la list lorsque le bouton est checked*/}
          {checked && <div>
            <h1 className="populaire title">{textML.toUpperCase()}</h1>
            <section className="secards">
              
              {mine.map((film) => {
              return(
                    
                  <Element key={film.id} film={film} id={film.id} setMine={setMine} mine={mine}/>
              ) 
              })} 
            </section>
            </div>}
        </div>
    )
}

export default MyList;