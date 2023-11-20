require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.static("public"));

const YOUR_DOMAIN = "http://localhost:3000";
// This is your test secret API key.
const stripe = require("stripe")(
  "pk_test_51NZLHbJDAvhaBoGUEm2FIyGv5MyBq9S1mwHNVmc3P1nDv7qZtRkyp2Up7zpfMeIoYoLF1JArM4jc9PCYDVQxFBYd00WMdZXjAT",
);

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Free Discovery Session
        price: "price_1O5xAmJDAvhaBoGUi8DDYjbS",
        quantity: 1,
      },
      {
        // Single session
        price: "price_1O5xGVJDAvhaBoGU4XTOQYha",
        quantity: 1,
      },
      {
        // Double Session
        price: "price_1O5xHPJDAvhaBoGU0SpZgf5b",
        quantity: 1,
      },
      {
        // 4-Session Package
        price: "price_1O5xJ4JDAvhaBoGUCZ6JBHQG",
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
