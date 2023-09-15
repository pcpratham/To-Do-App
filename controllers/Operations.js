const listSchema = require("../models/list");

exports.newEntry = async (req,res) => {
    try{
        const {title,desc} = req.body;
        if(!title || !desc){
            console.log("title or desc empty");
            return res.status(400).json({
                success:false,
                message:"Enter all details correctly"
            });
        }

        const user = await listSchema.create({title,desc});

        return res.status(200).json({
            success:true,
            message:"Entry created successfully!!"
        });
    }
    catch(err){
        return res.status(401).json({
            success:false,
            message:"Error occured while creating entry"
        });
    }
}

exports.getAllEntry = async (req,res) => {
    try{
        const user = await listSchema.find({});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"No user found in DB"
            })
        }

        return res.status(200).json({
            success:true,
            message:"List fetched successfully",
            data:user,
        })
    }
    catch(err){
        return res.status(401).json({
            success:false,
            message:"Error occured while fetching the list",
        });
    }
}

exports.deleteEntry = async (req,res) => {
    try{
        const id = req.params.id;
        if(!id){
            return res.status(400).json({
                success:false,
                message:"No entry as such"
            })
        }

        const final = await listSchema.findByIdAndDelete({_id:id});
        return res.status(200).json({
            success:true,
            message:"Entry removed easily",
            data:final
        });
    }
    catch(err){
        console.log("error",err);
        return res.status(400).json({
            success:false,
            message:"Not able to remove the entry"
        });
    }
}