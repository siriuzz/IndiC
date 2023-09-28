
const config = {
    download: true,
    delimiter: ',',
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true, // Skip empty lines in the CSV
    transformHeader: header => header.trim(), // Trim header names
    transform: value => value.trim(), // Trim cell values
    // complete: async function (results) {
    //     // console.log(results);
    //     for (let i = 0; i < results.data.length; i++) {
    //         const element = results.data[i];
    //         await EstudianteController.createEstudianteFromCsv(element);
    //     }

    //     res.status(201).json(results.data);

    // },
    // error: function (error) {
    //     res.status(400).json({ error: 'Invalid CSV format' }); // Handle errors
    // },
}

module.exports = config;