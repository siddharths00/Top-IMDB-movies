import React, {useEffect, useState} from "react";
import "../App.css";

export const Movie = (props) => {

    const [ans, setAns] = useState([{"name":"","date":""}]);
    const [limit, setLimit] = useState(20);
    // let ans;
        let mov;
    const fetchData = async() => {
        return await fetch("http://localhost:5000/movie")
        .then((response) => response.json())
        .then((data) => {
            let newEdit = { ...ans };newEdit = data;
            data=data.slice(0,limit);
            setAns(data);            
        });}
        useEffect(() => {
            fetchData();
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
        

          function handleSubmit(e){
            e.preventDefault();
            setLimit(e.target[0].value);
            console.log(limit)
          }

  return (
    <>
      <div className="stock-container">
          <form  onSubmit={handleSubmit}>
          <input
          type="text"
        />
        <button type="submit">Submit</button>
        </form>
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
