// import React from "react";
// import {useEffect, useState} from 'react'



// function SearchBar(props){
//     const [listMovie, setListMovie] = useState(props);
//     const [listMovieFiltered, setListMovieFiltered] = useState([]);
//     useEffect(() => {
//         getData();
//       }, []);
    
//       function handleChange(e) {
//         if (!e.target.value) {
//           setListMovieFiltered(listMovie);
//           return;
//         }
    
//         setListMovieFiltered(
//           listMovie.filter((film) => film.original_title.includes(e.target.value))
//         );
//       }
//     return(
//           <div>
//             <input onChange={handleChange} type="text" />


//           </div>
          
//     )
// }
// export default SearchBar;