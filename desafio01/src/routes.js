//Uma task deve ter os seguintes dados
//id - title - description - completed_at - created_at - updated_at
import { randomUUID } from 'node:crypto'
import { Database } from "./database.js"


const database = new Database()

export const routes = [
    {
        method:'GET',
        path:'/tasks',
        handler: (req, res) => {
            const tasks = database.select('/tasks')

            return res.end(JSON.stringify(tasks))
        },
    },
    {
        method:'POST',
        path:'/tasks',
        handler: (req, res) => {
            const { title, description, completed_at, created_at, updated_at } = req.body

            const task = {
                id: randomUUID(),
                title,
                description,
                completed_at
            }
        }
    }
]