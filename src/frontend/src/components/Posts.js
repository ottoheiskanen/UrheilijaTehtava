import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Posts() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      try {
        axios
          .get("http://localhost:3001/posts")
          .then((res) => {
            setData(res.data.sportsmen);
            console.log(res.data.sportsmen);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
    //console.log(data);
  }, []);

  const updateData = () => {
    console.log("test")
  }

  const deleteData = () => {
    console.log("test2")
  }

  return (
    <div className="child-div">
      {!loading && (
        <div>
          <h2>Lista kaikista urheilijoista</h2>
          <br></br>

          <table border="1px">
            <thead>
              <tr>
                <th align="left">Nimi</th>

                <th align="left">Kutsumanimi</th>

                <th align="left">Sukunimi</th>

                <th align="left">Kuva</th>

                <th align="left">Syntymävuosi</th>

                <th align="left">Paino</th>

                <th align="left">Urheilulaji</th>

                <th align="left">Ennätykset</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                    <td align="left"><input defaultValue={item.first_name}/> </td>

                    <td align="left"><input defaultValue={item.nickname}/></td> 

                    <td align="left">{item.last_name}</td>

                    <td align="left"><a href={item.image_url}>Linkki kuvaan</a> </td>

                    <td align="left">{item.birth_year}</td>

                    <td align="left">{item.weight}</td>

                    <td align="left">{item.sport}</td>

                    <td align="left">{item.records}</td>
                
                    <td><button className="update-btn" onSubmit={updateData(item.id)}> Päivitä </button></td>  
                    <td><button className="delete-btn" onSubmit={deleteData(item.id)}> Poista </button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
