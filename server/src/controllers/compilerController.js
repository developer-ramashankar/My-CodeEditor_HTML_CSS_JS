import ErrorHandler from "../utils/ErrorHandler.js"
import {Code} from "../models/code.model.js"
export const saveCode = async (req, res) => {
    const {fullCode} = req.body;
    try {
        const newCode = await Code.create({
            fullCode:fullCode
        })
        return res.status(201).json(newCode)
        
    } catch (error) {
        new ErrorHandler(500, "Data is not save");
    }
}
 