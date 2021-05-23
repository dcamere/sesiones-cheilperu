const Axios = require('axios');
const Uuid = require('node-uuid');
exports.handler = async (event) => {
    try {
        const tid = Uuid();
        const r = await Axios.get('https://jsonplaceholder.typicode.com/todos/1');
        
        LOG(tid, "INFO", "connected to db", r.data)
        // TODO implement
        const response = {
            statusCode: 200,
            body: JSON.stringify('Hello from Lambda!'),
        };
        response = {
            statusCode: 200,
            body: JSON.stringify('Hello from lambda!')
        }
    } catch (e) {
        response = {
            statusCode: 500,
            body: JSON.stringify({message: e})
        }
    } finally {
        return response;
    }
};

function LOG (tid, level = "INFO", message, data = {}) {
    console.log(JSON.stringify({
        tid,
        createdAt: new Date(),
        level,
        message,
        data: data
    }))
}