import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import DataFetchingIndividual from './DataFetchingIndividual';


function List(props){
  const [initial, setInitial] = useState(props.id);

  function DataFetchingIndividual(propers) {

    setInitial(propers.value);

    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${propers.value}`)
        .then(res => {
            console.log(res);

        })
        .catch(err =>{
            console.log(err)
        })
    }, []);

    return (
      <div>
      </div>
    );
  }

return( 
<div>
    <ul>
          <li>
          {props.title}
         </li>
         <button value = {initial} onClick = {DataFetchingIndividual}s>Tenant details</button>
    </ul>
</div>
)
}

export default List;