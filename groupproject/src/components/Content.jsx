import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import CardList from "./CardList";
import axios from 'axios';
import { useRef } from 'react';
// remove once API call is working...


function Content(){
    const [weather, setWeather] = useState()
    const inputRef = useRef(null);
    function fetchdata(){        
        axios.get('https://group-3-backend.onrender.com/?zip='+ inputRef.current.value)
            .then(function (response) {
                setWeather(response.data)
            }).catch(function (error) {
                console.log("error")
                console.log(error);
            })
    }
    return(            
        <header className="App-header">  
          <div class="d-flex justify-content-center">              
              <label for="city">City / State: </label>
              <input ref={inputRef} type="text" id="city" name="city" placeholder="Example: 31907"></input>
              <Button onClick={fetchdata}  variant="warning">Submit</Button>{' '}
          </div>
          <br />
          {/* <h1>{weather.location}</h1> */}
          <CardList weatherData={weather}/>
        </header>
    )
}

export default Content;