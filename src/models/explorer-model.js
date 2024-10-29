import db from "../config/db.js";

const explorerSchema = new db.Schema({
    name: {
        type: String,
        required: true
    },
    fieldOfStudy:{
        type: String,
        required: true
    },
    expeditionsParticiped: {
        type: Number,
        required: true
    }
});

const Explorer = db.model("Explorer", explorerSchema);

export default Explorer;
