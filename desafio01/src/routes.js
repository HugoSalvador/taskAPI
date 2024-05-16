//Uma task deve ter os seguintes dados
//id - title - description - completed_at - created_at - updated_at

export const routes = [
    {
        method:'GET',
        path:'/tasks',
        handler: (req, res) => {
            const tasks = {
                id:1,
                title:'Manutenção no AD',
                description:'Realizar manutenção no AD',
                completed_at: '2024-05-11',
                created_at:'2024-05-02',
                updated_at:'2024-05-09'
            }

            return res.end(JSON.stringify(tasks))
        }
    }
]