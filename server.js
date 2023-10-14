require("dotenv").config()

// This is your test secret API key.
const stripe = require('stripe')('sk_test_51NZLHbJDAvhaBoGUIinFDic2oHrOsl4zK7h1gMxU0qx4qJv84VE60TLJrr2MUl2M0FBLyYzxCgntTU3Lps3bzYcP00lB6ViHB6');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1O3NcVJDAvhaBoGUha5W9Ezr',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

app.listen(3000, () => console.log('Running on port 3000'));