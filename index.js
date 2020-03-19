const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors())

let people = [
    { 
      "name": "Arto Hellas", 
      "number": "040-123456",
      "id": 1
    },
    { 
      "name": "Ada Lovelace", 
      "number": "39-44-5323523",
      "id": 2
    },
    { 
      "name": "Dan Abramov", 
      "number": "12-43-234345",
      "id": 3
    },
    { 
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122",
      "id": 4
    }
]

app.get('/info', (req, res) => {
  res.write(`<p>Phonebook has info for ${people.length} people</p>`)
  res.write(`<p>${Date()}</p>`)
  res.send()
})

app.get('/people', (req, res) => {
    res.json(people)
})

app.get('/people/:id', (request, response) => {
    console.log(request.params)
    const id = Number(request.params.id)
    const person = people.find(person => person.id === id)
    if(person){
        response.json(person)
    }else{
        response.status(404).end()
    }
})

app.post('/people', (request, response) => {
  const body = request.body
  console.log(body)

  if(!body.name || !body.number){
    return response.status(400).json({
      error: 'name or number missing'
    })
  }

  const match = people.find(person => person.name === body.name)
  if(match){
    return response.status(400).json({error: 'name must be unique'})
  }

  const person = {
    name: body.name,
    number: body.number,
    id: Math.ceil(Math.random()*1000)
  }
  people = people.concat(person)
  response.json(person)
})

app.delete('/people/:id', (request, response) => {
    const id = Number(request.params.id)
    people = people.filter(person => person.id !== id)
    response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})