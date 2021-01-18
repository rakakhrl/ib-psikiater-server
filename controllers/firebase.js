const db = require("../config/firebase_connect");

class FirebaseController{
    static firebaseSaveData =async(req,res,next)=>{
        const{
            idPsikiater,
            idPatient,
        }= req.body;

        try {
            const firebaseData = {
                idPsikiater: idPsikiater,
                idPatient: idPatient, 
            };
            const message = await db.collection('Data').doc('one').set(firebaseData);
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