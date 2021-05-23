const Axios = require('axios');
const Uuid = require('node-uuid');
exports.handler = async (event) => {
    const tid = Uuid();
    const r = await Axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(JSON.stringify({
        tid,
        createdAt: new Date(),
        level: "INFO",
        message: "message",
        data: r.data
    }))
    console.log(r.data);
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
