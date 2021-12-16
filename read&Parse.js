let xlsx = require('node-xlsx');

const XLS = function() {
    function parseData(file) {
        const sheets = xlsx.parse(file);
        for(let sheet of sheets) {
            let sheetD = sheet.data;
            const keys = sheetD.shift();
            const sheetJSON = sheetD.map(data => {
              return getJSON(keys, data)  
            })
            console.log(sheetJSON);
        }
        
        function getJSON(keys, data) {
            return data.reduce(function (result, value, index) {
                result[keys[index]] = value;
                return result;
            }, {})
        }
    }

    return { parseData }
}

XLS().parseData('./applications.xlsx')
