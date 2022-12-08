// import React, { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Link } from "react-router-dom";



// function RandomFilms() {

//     let list1 = axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=d3994bb5c3f66e144147b5e2130fc60c`);
//     let list2 = axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=d3994bb5c3f66e144147b5e2130fc60c`);
//     let list3 = [...list1, list2]

//     return (
//         <div>
//             {
//                 list3.map((film) => {
//                     return (
//                         <div key={film.id}>
//                             <Card style={{ width: '18rem' }}>
//                                 <Card.Img variant="top"  />
//                                 <Card.Body>
//                                     <Card.Title>{film.original_title}</Card.Title>
//                                     <Card.Text>
//                                         {film.overview}
//                                     </Card.Text>
//                                     <Button variant="primary"><Link to={`/films/info/${film.id}`}>Informations</Link></Button>
//                                 </Card.Body>
//                             </Card>
//                         </div>
//                     )
//                 }

//                 )
//             }
//         </div>
//     )
// }

// export default RandomFilms;