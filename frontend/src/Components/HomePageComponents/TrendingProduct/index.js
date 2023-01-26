import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.scss";

function TrendingProduct() {
  const [data, setData] = useState([]);
  
  
  useEffect(() => {
    axios.get("http://localhost:8080/users").then((response) => {
      setData(response.data);
    });
  }, []);

  const deleteFunc = (id) => {
    axios.delete(`http://localhost:8080/users/${id}`).then(() => {
      axios.get("http://localhost:8080/users").then((response) => {
        setData(response.data);
      });
    });
  };
  return (
    <>
      <div className="trendWord">
        <h5>Popular Item in the market</h5>
        <h2>Trending Product</h2>
      </div>
      <div className="card">
        {data.map((element, index) => {
          return (
            <div key={index} className="cards">
              <img src={element.imgUrl} alt="img"></img>
              <p>{element.description}</p>
              <h4>{element.title}</h4>
              <p>${element.price}</p>
              <button className="btnTrend" onClick={() => deleteFunc(element._id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TrendingProduct;
