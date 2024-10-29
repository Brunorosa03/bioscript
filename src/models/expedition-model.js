import db from "../config/db.js";

const expeditionSchema = new db.Schema({
    location: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    participants:[ 
        {
        type: db.Schema.Types.ObjectId,
        ref: "Explorer",
        required: true
        }
    ],
    especiesFound:[
        {
        type: db.Schema.Types.ObjectId,
        ref: "Especie",
        required: true
        }
    ]
});

const Expedition = db.model("Expedition", expeditionSchema);

export default Expedition;
