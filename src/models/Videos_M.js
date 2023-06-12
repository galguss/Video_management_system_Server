class Vidoes_m {

    constructor(DB){
        this.DB = DB;
    }

    GetAllVideos = () => this.DB.execute('SELECT * FROM videos');
    GetVideo = (id) => this.DB.execute('SELECT * FROM videos WHERE id = ?;', [id]);

    AddVideo = (name, path, abstract) => this.DB.execute(`INSERT INTO videos(name, path, abstract) VALUES (?, ?, ?);`, [name, path, abstract]);
    
    UpdateVideo = (id, name, abstract) => {
        let sql = 'UPDATE videos SET ';
        if(typeof name !== 'undefined')
        sql += `name = '${name}', `;
        if(typeof abstract !== 'undefined')
        sql += `abstract = '${abstract}', `;
        sql = sql.slice(0, -2);
        sql +=`WHERE id = '${id}';`;
        return this.DB.execute(sql);
    }

    DeleteVideo = (id) => this.DB.execute(`DELETE FROM videos WHERE id = ?;`, [id]);
}

module.exports = Vidoes_m;