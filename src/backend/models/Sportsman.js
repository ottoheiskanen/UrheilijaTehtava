const db = require("../config/db.js")

class Sportsman {
    constructor(first_name, nickname, last_name, image_url, birth_year, weight, sport, records) {
        this.first_name = first_name
        this.nickname = nickname
        this.last_name = last_name
        this.image_url = image_url
        this.birth_year = birth_year
        this.weight = weight
        this.sport = sport
        this.records = records
    }

    async save() {
        let sql = `INSERT INTO sportsmen(first_name, nickname, last_name, image_url, birth_year, weight, sport, records) 
                    VALUES('${this.first_name}', '${this.nickname}', '${this.last_name}', '${this.image_url}', '${this.birth_year}', '${this.weight}', '${this.sport}', '${this.records}');`
        
        const [newSportsman, _] = await db.execute(sql)
        return newSportsman
    }

    static findAll() {
        let sql = "SELECT * FROM sportsmen"
        return db.execute(sql)
    }

    static findById(id) {
        let sql = `SELECT * FROM sportsmen WHERE id=${id};`
        return db.execute(sql)
    }

    static async updateById(id, first_name, nickname, last_name, image_url, birth_year, weight, sport, records) {
        let sql = `UPDATE sportsmen SET first_name='${first_name}', nickname='${nickname}', last_name='${last_name}', 
        image_url='${image_url}', birth_year='${birth_year}', weight='${weight}', sport='${sport}', records='${records}' WHERE id='${id}';`;

        const [updatedSportman, _] = await db.execute(sql)
        return updatedSportman
    }

    static async deleteById(id) {
        let sql =  `DELETE FROM sportsmen WHERE id = '${id}';`
        return await db.execute(sql)
    }
}

module.exports = Sportsman