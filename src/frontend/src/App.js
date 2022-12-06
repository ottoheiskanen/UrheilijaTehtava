import './App.css';
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import Title from "./components/Title"
import React, { useState, Fragment, useEffect } from "react";
import {nanoid} from 'nanoid'
import axios from "axios"

function App() {
  const url = "http://localhost:3001/posts"
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [sportsmen, setSportsmen] = useState(data)

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      try {
        axios
          .get(url)
          .then((res) => {
            setData(res.data.sportsmen);
            //console.log(res.data.sportsmen);
            setSportsmen(res.data.sportsmen)
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const [addFormData, setAddFormData] = useState({
    first_name: "",
    nickname: "",
    last_name: "",
    image_url: "",
    birth_year: "",
    weight: "",
    sport: "",
    records: ""
  })

  const [editFormData, setEditFormData] = useState({
    first_name: "",
    nickname: "",
    last_name: "",
    image_url: "",
    birth_year: "",
    weight: "",
    sport: "",
    records: ""
  })

  const [editSportsmanId, setEditSportsmanId] = useState(null)

  const handleAddFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute("name")
    const fieldValue = event.target.value

    const newFormData = { ...addFormData}
    newFormData[fieldName] = fieldValue
    setAddFormData(newFormData)
  }

  const handleEditFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData}
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault()
    
    const newSportsman = {
      id: nanoid(),
      first_name: addFormData.first_name,
      nickname: addFormData.nickname,
      last_name:  addFormData.last_name,
      image_url:  addFormData.image_url,
      birth_year:  addFormData.birth_year,
      weight:  addFormData.weight,
      sport:  addFormData.sport,
      records:  addFormData.records
    }

    const newSportsmen = [...sportsmen, newSportsman]
    setSportsmen(newSportsmen)

    axios.post(url, newSportsman) //AUTO_INC will overwrite the id attribute so we can re-use 'newSportsman' model here
    .then(res=> {
      alert("Uusi urheilija lisätty tietokantaan!")
      window.location.reload(false)
    })
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault()

    const editedSportsman = {
      id: editSportsmanId,
      first_name: editFormData.first_name,
      nickname: editFormData.nickname,
      last_name:  editFormData.last_name,
      image_url:  editFormData.image_url,
      birth_year:  editFormData.birth_year,
      weight:  editFormData.weight,
      sport:  editFormData.sport,
      records:  editFormData.records
    }

    const newSportsmen = [...sportsmen]
    const index = sportsmen.findIndex((sportsman) => sportsman.id === editSportsmanId)
    newSportsmen[index] = editedSportsman
    setSportsmen(newSportsmen)
    setEditSportsmanId(null)

    let realId = sportsmen[index].id
    axios.put(url + "/" + realId, editedSportsman) //AUTO_INC will overwrite the 'id' field on database
    .then(res=> {
      alert("Urheilijan tiedot on päivitetty!")
    })
  }

  const handleEditClick = (event, sportsman) => {
    event.preventDefault()
    setEditSportsmanId(sportsman.id)

    const formValues = {
      id: editSportsmanId,
      first_name: sportsman.first_name,
      nickname: sportsman.nickname,
      last_name:  sportsman.last_name,
      image_url:  sportsman.image_url,
      birth_year:  sportsman.birth_year,
      weight:  sportsman.weight,
      sport:  sportsman.sport,
      records:  sportsman.records
    }

    setEditFormData(formValues)
  }

  const handleCancelClick = () => {
    setEditSportsmanId(null)
  }

  const handleDeleteClick = (sportsmanId) => {
    const newSportsmen = [...sportsmen]

    const index = sportsmen.findIndex((sportsman) => sportsman.id === sportsmanId)
    newSportsmen.splice(index, 1)
    setSportsmen(newSportsmen)
    let realId = sportsmen[index].id
    axios.delete(url + "/" + realId)
    .then(() => alert("Urheilija poistettu onnistuneesti!"))
  }

  return (
    <div className="app-container">
      <Title/>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Etunimi</th>
              <th>Kutsumanimi</th>
              <th>Sukunimi</th>
              <th>Kuvan url</th>
              <th>Syntymävuosi</th>
              <th>Paino</th>
              <th>Urheilulaji</th>
              <th>Ennätykset</th>
            </tr>
          </thead>
          <tbody>
            {sportsmen.map((sportsman) => (
              <Fragment>
                {editSportsmanId === sportsman.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    sportsman={sportsman}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Lisää urheilija</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="first_name"
          required="required"
          placeholder="Etunimi"
          maxLength={20}
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="nickname"
          required="required"
          placeholder="Kutsumanimi"
          maxLength={20}
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="last_name"
          required="required"
          placeholder="Sukunimi"        
          maxLength={40}    
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="image_url"
          required="required"
          placeholder="Kuvan url"
          maxLength={100}
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="birth_year"
          required="required"
          placeholder="Syntymävuosi"
          min={0}
          max={2022}
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="weight"
          required="required"
          placeholder="Paino"
          min={1}
          max={999}
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="sport"
          required="required"
          placeholder="Urheilulaji"
          maxLength={40}
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="records"
          required="required"
          placeholder="Ennätykset"
          maxLength={100}
          onChange={handleAddFormChange}
        />
        <button type="submit">Lisää</button>
      </form>
    </div>
  );
}

export default App;
