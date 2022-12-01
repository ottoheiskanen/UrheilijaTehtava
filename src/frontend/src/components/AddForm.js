const AddForm = () => {
    return (
        <div className="add-sportsman">
            <h2>Lisää uusi urheilija</h2>
            <form action="localhost:3001/posts/">
                <label>Etunimi:</label><br></br>
                <input
                    type="text"
                    required
                    maxlength="20"
                /><br></br>
                <label>Kutsumanimi:</label><br></br>
                <input
                    type="text"
                    required
                    maxlength="20"
                /><br></br>
                <label>Sukunimi:</label><br></br>
                <input
                    type="text"
                    required
                    maxlength="30"
                /><br></br>
                <label>Kuvalinkki</label><br></br>
                <input
                    type="text"
                    required
                    maxlength="100"
                /><br></br>
                <label>Syntymävuosi:</label><br></br>
                <input
                    type="number"
                    required
                /><br></br>
                <label>Paino:</label><br></br>
                <input
                    type="number"
                    required
                /><br></br>
                <label>Urheilulaji:</label><br></br>
                <input
                    type="text"
                    required
                    maxlength="40"
                /><br></br>
                <label>Saavutukset:</label><br></br>
                <textarea></textarea><br></br>
                <button>Lisää urheilija</button>
            </form>
        </div>
    );
}

export default AddForm;