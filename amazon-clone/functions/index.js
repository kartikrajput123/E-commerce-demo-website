const functions = require("firebase-functions");
const express = require("express");
const cors = require('cors');
const stripe = require('stripe')('sk_test_51J73ViSCmEACSJYV7BrMQ6mzR1ixo4UXxD2tcaMa0by0MIKTsS1tN1O2BJpJxqgvYDMRXOSKmra3e7ZC90R7N5K200hde6yxV1')
//API

//App config
const app = express()

//Middlewares
app.use(cors({origin: true}))
app.use(express.json());

//API Routes
app.get('/', (request,response) => response.status(200).send('Hello world'))

app.post('/payments/create', async (request,response) => {
    const total = request.query.total;

    console.log('Payment request Received !', total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "usd"
    })
    // OK-created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
//Listen
exports.api = functions.https.onRequest(app)
