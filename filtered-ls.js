const fs = require('fs')
const path = require('path');

const extension = `.${process.argv.slice(3)}`
const dir = process.argv[2]

const printFileExt = (directory, extension) => {
    fs.readdir(directory, (err, list) => {
        list.forEach(file => {
            if (path.extname(file) == extension) {
                console.log(file)
            }
        })
    })
}

printFileExt(dir, extension);