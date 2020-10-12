const fs = require('fs');

module.exports = mdData => {
    
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', mdData, err =>{
            if (err){
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: `====================================
README file created in dist folder!!
====================================`
            })
        })
    })
}