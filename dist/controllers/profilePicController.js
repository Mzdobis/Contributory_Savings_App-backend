"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadProfilePicture = void 0;
const upload_1 = require("../middleware/upload");
// Route handler for uploading a profile picture
const uploadProfilePicture = (req, res) => {
    try {
        upload_1.upload.single("profilePicture")(req, res, (error) => {
            if (error) {
                return res
                    .status(400)
                    .json({ error: "File upload failed.", message: error.message });
            }
            if (!req.file) {
                return res.status(400).json({ error: "No file uploaded." });
            }
            const imageUrl = req.file.path;
            return res
                .status(200)
                .json({ message: "Profile picture uploaded successfully", imageUrl });
        });
    }
    catch (error) {
        console.error("Error uploading profile picture:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};
exports.uploadProfilePicture = uploadProfilePicture;
