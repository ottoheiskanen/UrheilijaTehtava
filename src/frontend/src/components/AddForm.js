import React, { useState } from 'react'
import Axios from 'axios'

const AddForm = () => {
    const url = "http://localhost:3001/posts"
    const [data, setData] = useState({
        first_name: "",
        nickname: "",
        last_name: "",
        image_url: "",
        birth_year: "",
        weight: "",
        sport: "",
        records: ""
    })
    function submit(e) {
        e.preventDefault()
        Axios.post(url, {
            first_name: data.first_name,
            nickname: data.nickname,
            last_name: data.last_name,
            image_url: data.image_url,
            birth_year: data.birth_year,
            weight: data.weight,
            sport: data.sport,
            records: data.records
        })
        .then(res=> {
            //console.log(res.data)
            alert("Uusi urheilija lisätty tietokantaan!")
        })
    }

    function handle(e) {
        const newData={...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        //console.log(newData)
    }

    return (
        <div className="add-sportsman">
            <h2>Lisää uusi urheilija</h2>
            <form onSubmit={(e)=>submit(e)} method="POST" className="form-box">
                <label>Etunimi:</label><br></br>
                <input
                    onChange={(e) =>handle(e)}
                    value={data.first_name}
                    type="text"
                    id="first_name"
                    name="first_name"
                    required
                    maxLength="20"
                /><br></br>
                <label>Kutsumanimi:</label><br></br>
                <input
                    onChange={(e) =>handle(e)}
                    value={data.nickname}
                    type="text"
                    id="nickname"
                    name="nickname"
                    required
                    maxLength="20"
                /><br></br>
                <label>Sukunimi:</label><br></br>
                <input
                    onChange={(e) =>handle(e)}
                    value={data.last_name}
                    type="text"
                    id="last_name"
                    name="last_name"
                    required
                    maxLength="30"
                /><br></br>
                <label>Kuvalinkki</label><br></br>
                <input
                    onChange={(e) =>handle(e)}
                    value={data.image_url}
                    type="text"
                    id="image_url"
                    name="image_url"
                    required
                    maxLength="100"
                /><br></br>
                <label>Syntymävuosi:</label><br></br>
                <input
                    onChange={(e) =>handle(e)}
                    value={data.birth_year}
                    type="number"
                    id="birth_year"
                    name="birth_year"
                    step="1" 
                    pattern="\d+"
                    maxLength="4" 
                    required
                /><br></br>
                <label>Paino:</label><br></br>
                <input
                    onChange={(e) =>handle(e)}
                    value={data.weight}
                    type="number"
                    id="weight"
                    name="weight"
                    step="1" 
                    pattern="\d+"
                    maxLength="3" 
                    required
                /><br></br>
                <label>Urheilulaji:</label><br></br>
                <input
                    onChange={(e) =>handle(e)}
                    value={data.sport}
                    type="text"
                    id="sport"
                    name="sport"
                    required
                    maxLength="40"
                /><br></br>
                <label>Saavutukset:</label><br></br>
                <textarea 
                    onChange={(e) =>handle(e)}
                    value={data.records}
                    id="records" 
                    name="records"
                /><br></br>
                <button>Lisää urheilija</button>
            </form>
        </div>
    );
}

export default AddForm;