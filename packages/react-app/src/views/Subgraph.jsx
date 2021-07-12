import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function Subgraph() {
const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({});
const result = JSON.stringify(items);


  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://api.pancakeswap.info/api/v2/tokens/0xea01a1a3cf143f90b4ac6d069bd369826574cd45")
      .then(res => res.json())
      .then(
        (result) => {
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