import React from 'react'

const ReadOnlyRow = ({sportsman, handleEditClick, handleDeleteClick}) => {
    return (
        <tr>
            <td>{sportsman.first_name}</td>
            <td>{sportsman.nickname}</td>
            <td>{sportsman.last_name}</td>
            <td>{sportsman.image_url}</td>
            <td>{sportsman.birth_year}</td>
            <td>{sportsman.weight}</td>
            <td>{sportsman.sport}</td>
            <td>{sportsman.records}</td>
            <td>
                <button type="button"onClick={(event) => handleEditClick(event, sportsman)}>
                Muokkaa
                </button>
                <button type="button" onClick={()=>handleDeleteClick(sportsman.id)}>
                Poista
                </button>
            </td>
        </tr>
    )
}

export default ReadOnlyRow
