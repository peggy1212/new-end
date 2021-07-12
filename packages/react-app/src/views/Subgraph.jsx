/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function Subgraph() {
const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({});


  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
  Promise.all([
    fetch("https://api.pancakeswap.info/api/v2/tokens/0xea01a1a3cf143f90b4ac6d069bd369826574cd45"),
    fetch("https://api.pancakeswap.info/api/v2/tokens/0x4C8307cF2cfAFCAb5653c25e1870b905488bD830"),
    fetch("https://api.pancakeswap.info/api/v2/tokens/0x749E90d966ece8fc5a30Ed150E4361F40dB00219"),
    fetch("https://api.pancakeswap.info/api/v2/tokens/0x1C2425F50a1e98D5631b223E56760d21BC840C53")
      ]).then(function (responses) {
             // Get a JSON object from each of the responses
             return Promise.all(responses.map(function (response) {
                 return response.json();
             }));
         }).then((result) => {
                           setIsLoaded(true);
                           setItems(result);
                         },
                         // Note: it's important to handle errors here
                         // instead of a catch() block so that we don't swallow
                         // exceptions from actual bugs in components.
                         (error) => {
                           setIsLoaded(true);
                           setError(error);
                         }
                       )
                   }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>{JSON.stringify(items)}</div>
    );
  }
}


export default Subgraph;
*/

import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Table } from 'antd';

const Subgraph=()=>{
    const [Data,setData]=useState({
        Name:'',
        Symbol:'',
        Price:'',
        Price_BNB:'',
    })
    const [colorsData,setColorsData]=useState([])
    useEffect(()=>{
        axios.get('https://api.pancakeswap.info/api/v2/tokens/0xea01a1a3cf143f90b4ac6d069bd369826574cd45')
            .then(res=>{
                console.log('Response from main API: ',res)
                console.log('Home Data: ',res.data.data)
                let companyData=res.data.data;
                setData({Name:companyData.name,Symbol:companyData.symbol, Price: companyData.price, Price_BNB: companyData.price_BNB})
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    return(

        <>
            <h1>{Data.Name}</h1>
            <p>{Data.Symbol}</p>
             <p>{Data.Price}</p>
              <p>{Data.Price_BNB}</p>

        </>


    )
}

export default Subgraph;