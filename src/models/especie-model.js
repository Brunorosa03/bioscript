import db from "../config/db.js";

const especieSchema = new db.Schema({
    name: {
        type: String,
        required: true
    },
    discoveryLocation:{
        type: String,
        required: true
    },
    rarity: {
        type: Number,
        required: true
    },
    documented: {
        type: Boolean,
        required: false
    }
});

const Especies = db.model("Especies", especieSchema);

export default Especies;
