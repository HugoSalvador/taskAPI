import http from 'node:http'
import { routes } from './routes.js'


//Uma task deve ter os seguintes dados
//id - title - description - completed_at - created_at - updated_at


const server = http.createServer((req, res) => {
    const { method, url } = req

    const route = routes.find(route => {
        return route.method === method && route.path === url
    })

    if (route) {
        return route.handler(req, res)
    }

    return res.writeHead(404).end()
})
 
server.listen(3335)