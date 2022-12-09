import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Element = ({film,id,setMine, mine}) => {

        //Fonction qui doit retirer le film mais ne marche pas

    // function handleRemove() {
    //     const tmpList = [...mine];
    //     console.log("ma liste", tmpList);
    //     console.log("mon id", id);
    //     var index = tmpList.findIndex(function (o) {
    //       return o.id === id;
    //     });
    //     if (index !== -1) tmpList.splice(index, 1);
    //     console.log("ma liste après supression", tmpList);
    //     setMine(tmpList);
    //     localStorage.setItem("list", JSON.stringify(tmpList))
    //   }

    function handleSubmit() {
        setMine(mine)
      }
    useEffect(()=> {
        handleSubmit();
    })

    return(
        <div>
            <Link to={`/films/info/${id}`}>
                    <a href="" className="card_">
                    {film.poster_path =="" && <img src="./logostreamfy.png" className="card__image" alt="logo STREAMFY"/>}
                    {film.poster_path !="" && <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${film.poster_path}`} className="card__image" alt={film.original_title}/>}
                    <div className="card__overlay">
                      <div className="card__header">
                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                        {film.adulte && <img className="card__thumb" src="./moins18.png"  alt="" />}
                        {!film.adulte && <img className="card__thumb" src="./moins3.png"  alt="" />}
                        <div className="card__header-text">
                          <h3 className="card__title">{film.original_title}</h3>            
                          <span className="card__date">{film.release_date}</span>
                        </div>
                      </div>
                    </div>
                    </a> 
                    </Link>
                    <div style={{ padding: "10px", borderBottom: "1px solid" }}>
                        {/* <p>{film}</p> <button onClick={handleRemove}>remove</button> */}
                    </div>
                  </div>
    )
}

export default Element