import React from 'react'

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Etunimi"
                    name="first_name"
                    maxLength={20}
                    value={editFormData.first_name}
                    onChange={handleEditFormChange}
                    ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Kutsumanimi"
                    name="nickname"
                    maxLength={20}
                    value={editFormData.nickname}
                    onChange={handleEditFormChange}
                    ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Sukunimi"
                    name="last_name"
                    maxLength={30}
                    value={editFormData.last_name}
                    onChange={handleEditFormChange}
                    ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Kuvan URL"
                    name="image_url"
                    maxLength={100}
                    value={editFormData.image_url}
                    onChange={handleEditFormChange}
                    ></input>
            </td>
            <td>
                <input
                    type="number"
                    required="required"
                    placeholder="Syntymävuosi"
                    name="birth_year"
                    min={0}
                    max={2022}
                    value={editFormData.birth_year}
                    onChange={handleEditFormChange}
                    ></input>
            </td>
            <td>
                <input
                    type="number"
                    required="required"
                    placeholder="Paino"
                    name="weight"
                    min={1}
                    max={999}
                    value={editFormData.weight}
                    onChange={handleEditFormChange}
                    ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Urheilulaji"
                    name="sport"
                    maxLength={40}
                    value={editFormData.sport}
                    onChange={handleEditFormChange}
                    ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Saavutukset"
                    name="records"
                    maxLength={100}
                    value={editFormData.records}
                    onChange={handleEditFormChange}
                    ></input>
            </td>
            <td>
                <button type="submit">Tallenna</button>
                <button type="submit" onClick={handleCancelClick}>Peruuta</button>
            </td>
        </tr>
    )
}


export default EditableRow