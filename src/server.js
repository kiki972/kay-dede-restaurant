const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51PnKSWFnP4lSW6dprYq6srG4KkGnve8Cqu2VpRTCY7TCVjD8pp3KaVRIwcE79yPjLGW9ANNT9L59TZkZq7Hhy6X200Q0h4DR4C'); // Remplacez par votre clé secrète Stripe
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body; // Montant en centimes
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));