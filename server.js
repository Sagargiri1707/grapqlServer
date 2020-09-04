const express = require('express')
const expressGrraphQL = require('express-graphql')
const schema=require('./schema')

const app = express()

app.use('/graphql', expressGrraphQL({
    schema: schema,
    graphiql:true
}))

app.listen(4000, () => {
    console.log("Server on port 4000");
    
})