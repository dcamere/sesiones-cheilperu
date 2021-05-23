const Axios = require('axios');
const Uuid = require('node-uuid');
exports.handler = async (event) => {
    let response;

    try {
        const tid = Uuid();
        const r = await Axios.get('https://jsonplaceholder.typicode.com/todos/1');
        
        
        // TODO implement
        response = {
            statusCode: 200,
            body: JSON.stringify('Hello from lambda!')
        }
        LOG(tid, "INFO", "try", response)
    } catch (e) {
        response = {
            statusCode: 500,
            body: JSON.stringify({message: e})
        }
        LOG(tid, "INFO", "catch", response)
    } finally {
        return {
            statusCode,
            body,
            headers: {
                "Acces-Control-Allow-Headers" : "Content-Type",
                "Acces-Control-Allow-Origin": "*", // dominio de donde viene la solicitud
                "Acces-Control-Allow-Methods": "OPTIONS,POST,GET",
                "Content-Type": "application/json"
            }
        };
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