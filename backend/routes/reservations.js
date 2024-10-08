const express = require("express");
const { verifyJwtToken } = require("../middleware/jwt.js");
const { getStripePublishableKey, createPaymentIntent, newReservation, getAllReservations, getAuthorsReservations } = require("../controllers/reservationController.js");
const router = express.Router();

router.use(express.json())
        router.post("/booking", verifyJwtToken, newReservation)
    router.get("/config", getStripePublishableKey)


    router.post("/get_reservations", getAllReservations)


        router.get("/get_author_reservations", verifyJwtToken, getAuthorsReservations)

        
    router.post("/create_payment_intent", createPaymentIntent)




module.exports = router;