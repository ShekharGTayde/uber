const asyncHandler =  (func) => async (req,res,next) =>{
    try {
        return func(req,res,next)
    } catch (error) {
        res.status(error.code || 500).json({
            success:false,
            message:error.message
        })
    }
}


export default asyncHandler