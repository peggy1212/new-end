/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function Subgraph() {
const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [items, setItems] = useState({});
const itemsName = Object.entries(items);

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
      <div>
                     {itemsName.map((item, index) => (
                     <div key={index}>
                         <h1>{item.id}</h1>
                         {item.data.map((c, i) => (
                               <div key={i}>
                       <li>name: {c.name}</li>
                             </div>
                     ))}
      </div>
      ))}
      </div>






    );
  }
}


export default Subgraph;
*/

import React,{useMemo,useEffect,useState} from 'react';
import axios from 'axios';
import { Table } from 'antd';
//import ReactTable from "react-table";

const Subgraph=()=>{
    const [Data,setData]=useState({
        Name:'',
        Symbol:'',
        Price:'',
        Price_BNB:'',
    })
    const [Data2,setData2]=useState({
            Name:'',
            Symbol:'',
            Price:'',
            Price_BNB:'',
        })
    const [Data3,setData3]=useState({
                Name:'',
                Symbol:'',
                Price:'',
                Price_BNB:'',
            })
    const [Data4,setData4]=useState({
                Name:'',
                Symbol:'',
                Price:'',
                Price_BNB:'',
            })

    useEffect(()=>{
    axios.all([
        axios.get('https://api.pancakeswap.info/api/v2/tokens/0xea01a1a3cf143f90b4ac6d069bd369826574cd45'),
        axios.get('https://api.pancakeswap.info/api/v2/tokens/0x4C8307cF2cfAFCAb5653c25e1870b905488bD830'),
        axios.get('https://api.pancakeswap.info/api/v2/tokens/0x749E90d966ece8fc5a30Ed150E4361F40dB00219'),
        axios.get('https://api.pancakeswap.info/api/v2/tokens/0x1C2425F50a1e98D5631b223E56760d21BC840C53')
            ]).then(res=>{
                console.log('Response from main API: ',res[0]);
                console.log('Response from second API: ',res[1]);
                console.log('Response from third API: ',res[2]);
                console.log('Response from forth API: ',res[3]);
                console.log('Home Data: ',res[0].data.data);
                console.log('Second Data: ',res[1].data.data);
                console.log('Third Data: ',res[2].data.data);
                console.log('Forth Data: ',res[3].data.data);

                let companyData=res[0].data.data;
                setData({Name:companyData.name,Symbol:companyData.symbol, Price: companyData.price, Price_BNB: companyData.price_BNB})
                let companyData2=res[1].data.data;
                setData2({Name:companyData2.name,Symbol:companyData2.symbol, Price: companyData2.price, Price_BNB: companyData2.price_BNB})
                let companyData3=res[2].data.data;
                setData3({Name:companyData3.name,Symbol:companyData3.symbol, Price: companyData3.price, Price_BNB: companyData3.price_BNB})
                let companyData4=res[3].data.data;
                setData4({Name:companyData4.name,Symbol:companyData4.symbol, Price: companyData4.price, Price_BNB: companyData4.price_BNB})
                this.temp=res[0].data.data
                    const data = this.temp.map(((item, index)=> {
                        this.data.push(Object.assign({},item,{key:item.name}))
                    }))
            })
            .catch(err=>{
                console.log(err);
            })
    },[])


/*const array = Object.entries(Data);
const dataSource = array.map((token, index) => (
                               <li key={index}></li>
                                         ))*/

const columns = useMemo(() => [
    {
      Header: "Token Name",
      accessor: "name",
    },
    {
      Header: "Token Symbol",
      accessor: "symbol",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
          Header: "Price_BNB",
          accessor: "price_BNB",
        },
  ]);
        /*<br/>
             <h1>Token Name: {Data2.Name}</h1>
             <p>Token Symbol: {Data2.Symbol}</p>
             <p>Price: {Data2.Price}</p>
             <p>Price_BNB: {Data2.Price_BNB}</p>

        <br/>
             <h1>Token Name: {Data3.Name}</h1>
             <p>Token Symbol: {Data3.Symbol}</p>
             <p>Price: {Data3.Price}</p>
             <p>Price_BNB: {Data3.Price_BNB}</p>

        <br/>
              <h1>Token Name: {Data4.Name}</h1>
              <p>Token Symbol: {Data4.Symbol}</p>
              <p>Price: {Data4.Price}</p>
              <p>Price_BNB: {Data4.Price_BNB}</p>

        <br/>
                </>*/
return(
<div>
<Table columns={columns} data={Data} />
</div>
    )
}

export default Subgraph;