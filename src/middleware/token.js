let jwt = require('jsonwebtoken');

const tokenAuthorization=(token)=>{
    return new Promise((resolve,reject)=>{
        let decoded = jwt.verify(token,process.env.JSON_SECRETE_KEY,(err,decoded)=>{
            if(err) return reject(err);
            return resolve(decoded)
        });
    })
}
const authorization=async(req,res,next)=>{
    if(!req.headers.authorization){
    return res.status(400).send("Authorization not confirmed");
    }

    if(!req.headers.authorization.startsWith("Bearer ")){
        return res.status(400).send("Authorization not confirmed");
    }

    const token=req.headers.authorization.split(" ")[1];
    let verify;
    try {
        verify=await tokenAuthorization(token);
    } catch (error) {
        return res.status(400).send({message:error.message});
    }

    req.user=verify.user;
    return next();

}

module.exports=authorization;