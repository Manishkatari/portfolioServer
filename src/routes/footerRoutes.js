// import express from "express";
// import {getFooter} from "../controllers/footerController.js"

//   const router = express.Router();

// /**
//  * @route GET /api/footer
//  * @desc Retrieves information for the 'About' section of the portfolio
//  * @access Public
//  */
// router.get("/", async (req, res, next) => {
//   try {
//     await getFooter(req, res);
//   } catch (error) {
//     // Log the error for debugging
//     console.error('Error in getFooter3 route:', error);
//     // Send a generic error response
//     res.status(500).json({ message: "Server Error" });
//   }
// });
// export default router;

import express from "express";
import { getFooter } from "../controllers/footerController.js";

 
const router = express.Router();

router.get("/", getFooter);

export default router;
