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