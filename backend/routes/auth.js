const express = require("express");
const { signUp, checkEmail, logIn, refreshToken, postUser, logOut, getUserDetails, userProfileDetails, userProfileAbout, uploadProfileImage, userToHost, addWishlist } = require("../controllers/authController.js");
const { verifyJwtToken } = require("../middleware/jwt.js");
const router = express.Router();

router.use(express.json())

router.post("/logout", verifyJwtToken, logOut)
router.post("/get_user_details", verifyJwtToken, getUserDetails)
router.post("/sign_up", signUp)
router.post("/post", verifyJwtToken, postUser)
router.post("/log_in", logIn)
router.post("/become_a_host", verifyJwtToken, userToHost)
router.post("/uploadimage", verifyJwtToken, uploadProfileImage)
router.post("/refresh_token", refreshToken)
router.post("/profile_details", verifyJwtToken, userProfileDetails)
router.post("/profile_details_about", verifyJwtToken, userProfileAbout)

router.post("/check_email", checkEmail)

module.exports = router;