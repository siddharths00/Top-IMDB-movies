// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'; 
import {Movie} from './components/Movie'

function App() {

  const [num, setNum]=useState(25);
  
//  let movies={}y

          // useEffect(() => {
            // Update the document title using the browser API
            // let 
            // fetchData();
            // const response=await fetch("http://localhost:5000/movie");
            ;
            // response.map((data, key) => {console.log(data.name);});
          // });

        //   const response = await youtube.get('search', {
        //     params: {
        //     part:'snippet',
        //     maxResults:5,
        //     key:process.env.REACT_APP_YOUTUBE_API_KEY,
        //     q:searchTerm,
        //   }
        // });
        
  return (
    <div className="App">
      <Movie limit={num}/>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
