import React, {useEffect, useState} from "react";
import "../App.css";
// import { movies } from '../../backend/movies';

export const Movie = (props) => {

    const [ans, setAns] = useState([{"name":"","date":""}]);
    const [limit, setLimit] = useState(20);
    // let ans;
        let mov;
    const fetchData = async() => {
        return await fetch("http://localhost:5000/movie")
        .then((response) => response.json())
        .then((data) => {
            let newEdit = { ...ans };
            console.log("==========",data);
            newEdit = data;
            data=data.slice(0,limit);
            setAns(data);
            // setAns(data,()=>{
                
                
            // });
            
        });}
        useEffect(() => {
            // Update the document title using the browser API
            // setMovies({});
            fetchData();
            // console.log(movies)
            let temp=ans.slice(0,limit);
            setAns(temp);
            mov=ans.map((data, key) => {
                return (
                  <div key={key}>
                    {data.name +
                      " , " +
                      data.date}
                      </div>
                );
              })
          },[limit]);
        
          function handleChange(e){
            setLimit(e.target.value);
            console.log(limit)
          };

  return (
    <>
      <div className="stock-container">
          {/* {console.log("%%%%%%%%%%%%",typeof(ans),ans)} */}
          <input
          type="text"
          value={limit}
          onChange={handleChange}
        />
          <table>
        {ans.map((data, key) => {
                return (
                    
                  <div key={key}>
                    <tr>
                        <th>{data.name}</th>
                        <th/>
                        <th>{data.date}</th>
                    </tr>
                      </div>
                );
              })}
        </table>
      </div>
    </>
  );
};
