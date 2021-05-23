const Axios = require('axios');
exports.handler = async (event) => {
    const r = await Axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(r);
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
