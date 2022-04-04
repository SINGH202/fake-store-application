import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";


export const Product = () =>{
    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProduct = () => {
    setLoading(true);
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
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
            {!loading && data && data.map((item) =>{
            return <Link key = {item.id} to={`/products/${item.id}`} >{item.title}</Link>
            })}
            <hr/>
        <Outlet/>
        </>
    )
}
