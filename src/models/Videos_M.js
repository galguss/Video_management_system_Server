class Vidoes_m {
    AddVideo = (name, path, abstract) => {
        return `INSERT INTO videos(name, path, abstract) VALUE('${name}', '${path}', '${abstract}');`
    }
}

module.exports = Vidoes_m;