const express = require('express');
const router = express.Router();

const stripe = require("stripe")("sk_test_51OlaPSSHloP9u3kTjk3USf1F69UVA457RKHNnXrJTZVCYN8h21dGDzsCc6xSSW2hqjI7WVdAgiaJNM7BQtx9JFoD00DJu71utW");

router.post("/create-checkout-session", async (req, res) => {
    const { products } = req.body;
    console.log(products);

    const lineItems = [{
        price_data: {
            currency: "inr",
            product_data: {
                name: "bus",
            },
            unit_amount: products * 100, // Assuming products is the price in the smallest currency unit (e.g., cents)
        },
        quantity: 1
    }];

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:3000/receipt",
            cancel_url: "http://localhost:3000",
            shipping_address_collection: {
                allowed_countries: ['US'],
            },
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).json({ error: "Failed to create checkout session" });
    }
});

module.exports = router;
