const routes = require('express').Router();

const stripe = require('stripe')(process.env.API_KEY);

// app.get('/secret', async (req, res) => {
//   const intent = // ... Fetch or create the PaymentIntent
//     res.json({ client_secret: intent.client_secret });
// });

routes.post('/payment', async (request, response) => {
  try {
    const {
      amount, currency, paymentMethodTypes, receiptEmail,
    } = request.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: paymentMethodTypes,
      receipt_email: receiptEmail,
    });

    response.status(200).json(paymentIntent);
  } catch (err) {
    response.status(400).json({ error: err });
  }
});

module.exports = routes;
