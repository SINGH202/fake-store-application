import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";


export const Product = () =>{
    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const api = "https://bookstroe-backend-server.herokuapp.com/books";

  const getProduct = () => {
    setLoading(true);
    axios({
      method: "get",
      url: api,
    })
      .then((res) => {
        setData(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(()=>{
      getProduct()
  }, [])

    return (
        <>
            <h2>Welcome to Product-Page</h2>
            {loading && <h2>Loading.....</h2>}
            {!loading && data && data.map((item, index) =>{
              return(<div key={index}>
              <h3>{item.title}</h3>
              <img src={item.image} alt="" />
              <h4>Author : {item.author}</h4>
              <h5>Price : {item.price}</h5>
              
          </div>)
            })}
            <hr/>
        <Outlet/>
        </>
    )
}
