const { doc } = require("../config/firebase_connect");
const db = require("../config/firebase_connect");

class FirebaseController{
    static firebaseSaveData =async(req,res,next)=>{
        const{
            idPsikiater,
            idPatient,
            consultationTime,
        }= req.body;

        try {
            const firebaseData = {
                idPsikiater: idPsikiater,
                idPatient: idPatient, 
                consultationTime: consultationTime,
            };
            const message = await db.collection('Message').doc().set(firebaseData);
            res.status(201).json({
                status: "Success",
                message: "Import success",
                data: message,
            })
        } catch (error) {
            next(error);
        }
    }
}

module.exports= FirebaseController;