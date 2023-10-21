require("dotenv").config();

// This is your test secret API key.
const stripe = require("stripe")(
  "pk_test_51NZLHbJDAvhaBoGUEm2FIyGv5MyBq9S1mwHNVmc3P1nDv7qZtRkyp2Up7zpfMeIoYoLF1JArM4jc9PCYDVQxFBYd00WMdZXjAT"
);
const express = require("express");
const app = express();
app.use(express.static("public"));

const YOUR_DOMAIN = "http://localhost:3000";

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "price_1O3NcVJDAvhaBoGUha5W9Ezr",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

app.listen(3000, () => console.log("Running on port 3000"));
