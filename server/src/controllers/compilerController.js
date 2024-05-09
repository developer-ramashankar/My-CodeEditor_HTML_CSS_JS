import ErrorHandler from "../utils/ErrorHandler.js";
import { Code } from "../models/code.model.js";
export const saveCode = async (req, res) => {
  const { fullCode } = req.body;
  try {
    const newCode = await Code.create({
      fullCode: fullCode,
    });
    return res.status(201).send({ url: newCode._id,status:"saved!" });
  } catch (error) {
    new ErrorHandler(500, "Data is not save");
  }
};

export const loadCode = async (req, res) => {
  try {
    const {urlId} = req.body
    const existingcode = await Code.findOne({ _id: urlId });
    if(!existingcode){
        new ErrorHandler(404, "Do not have this code");
    }
    return res.status(200).send({fullCode:existingcode.fullCode})
  } catch (error) {
    new ErrorHandler(500, "Data is not load");
  }
}
