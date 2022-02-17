const express = require('express')

const app = express()

app.use(express.json())

// GET - Buscar informação dentro do servidor
// POST - Incerir informação dentro do servidor
// PUT - Altera informação dentro do servidor
// PATH - Altera informação especifica
// DELETE - Deletar informação dentro do servidor 

//TIPOS DE PARAMETROS

// ROUTE PARAMS => identificar um recurso editar/deletear/buscar
// QUEY PARAMS => paginação/filtro
// BODY PARAMS -> OS OBJETOS INSERÇÃO/alteração (json)


app.get("/courses", (request, response)=>{
    const query = request.query
    return response.json (["c1", "c2", "c3"])    
})

app.post("/courses", (request, response)=>{
    return response.json (["c1", "c2", "c3", "c4"])    
})

app.put("/courses/:id", (request, response)=>{
    const params = request.params
    console.log(params)
    return response.json (["c6", "c2", "c3", "c4"])    
})

app.patch("/courses/:id", (request, response)=>{
    return response.json (["c6", "c7", "c3", "c4"])    
})

app.delete("/courses/:id", (request, response)=>{
    return response.json (["c6", "c7",  "c4"])    
})

app.listen(3333, ()=>{
    console.log('✅ SERVER ON')
})
