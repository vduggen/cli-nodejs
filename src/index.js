const fs = require('fs');

const BASE_PATH = './src/tests';

function createStore(name) {
    fs.readFile(__dirname + '/templates/store.txt' , (err, data) => {
        if (err) throw err;
        fs.writeFile(`${BASE_PATH}/${name}.store.js`, data, (err) => {
            if (err) throw err;
        });
    });
}

function createApi(name) {
    // Pega os nomes dos arquivos
    fs.readdir(__dirname + '/templates/api', (err, files) => {
        if (err) throw err;
        // Cria a pasta com o nome (para agrupar)
        fs.mkdir(`${BASE_PATH}/${name}`, null, (err) => {
            if (err) throw err;
            // Percorre os arquivos de dentro da pasta de templates
            for (const file of files) {
                const nameWithoutExtension = file.replace(/(.+)(.js)/, '$1');
                // Lê o conteúdo de cada arquivo
                fs.readFile(__dirname + `/templates/api/${file}`, (err, data) => {
                    if (err) throw err;
                    const content = data.toString();
                    const result = content.replace('[name]', name);
                    fs.writeFile(`${BASE_PATH}/${name}/${name}${nameWithoutExtension}.js`, result, (err) => {
                        if (err) throw err;
                    });
                });
            }
        })
    })
}

function bootstrap() {
    const params = process.argv;

    const removeTwoFirsts = params.slice(2);
    
    const firstParam = removeTwoFirsts[0];
    const name = removeTwoFirsts[1];
    
    if (firstParam === '--store'){
        createStore(name);
        return;
    }

    if (firstParam === '--api') {
        createApi(name);
        return;
    }
}

bootstrap();