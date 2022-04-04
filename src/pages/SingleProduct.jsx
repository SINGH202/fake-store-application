import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleProduct = () => {
  const { productId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${productId}`,
    })
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  return (
    <>
      <h1>Single Product</h1>
      {data && <h1>{data.title}</h1>}
    </>
  );
};
