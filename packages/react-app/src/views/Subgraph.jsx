/* eslint-disable jsx-a11y/accessible-emoji */
import { gql, useQuery } from "@apollo/client";
import { Button, Input, Table, Typography, Card, List } from "antd";
import "antd/dist/antd.css";
import GraphiQL from "graphiql";
import "graphiql/graphiql.min.css";
import fetch from "isomorphic-fetch";
import React, { useState } from "react";
import { Address } from "../components";
import { ApolloProvider, Query } from 'react-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';



const highlight = {
  marginLeft: 4,
  marginRight: 8,
  /* backgroundColor: "#f9f9f9", */ padding: 4,
  borderRadius: 4,
  fontWeight: "bolder",
};

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/pancakeswap/pairs",
  cache: new InMemoryCache(),
})


/*function Subgraph(props) {
  function graphQLFetcher(graphQLParams) {
    return fetch(props.subgraphUri, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(graphQLParams),
    }).then(response => response.json());
  }*/

  const EXAMPLE_GRAPHQL = gql`
                            {
                               tokens(where:{id:"0xea01a1a3cf143f90b4ac6d069bd369826574cd45"}){
                                  id
                                  name
                                  symbol
                              }
                            }
                          `;

  const Subgraph = () => (
   <ApolloProvider client={client}>
          <Query query={EXAMPLE_GRAPHQL}>
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;
              // 最重要的就是從 data 裡面取得資料
              const lists = data.tokens.map(currentToken => (
                <li key={currentToken.id}>
                <li>id: {currentToken.id}</li>
                          <li>name: {currentToken.name} </li>
                          <li>symbol: {currentToken.symbol} </li>
                 <br />
                </li>
              ));


              return (
                <div>
                  <ul style={{ "list-style-type": "none" }}>{lists}</ul>
                </div>
              );
            }}
          </Query>
           </ApolloProvider>
    );


  export default Subgraph;