import SubProcessItem from "../../models/SubProcessItem.js";


// get all sub processes
export const getAllSubProcessItem = async(req , res) => {
    try {
        const subprocessesItem = await SubProcessItem.find({});
        res.status(200).send(subprocessesItem);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// add new sub process
export const addNewSubProcessItem = async(req , res) => {
    try {
        const subprocessItem = new SubProcessItem({
            componentId : req.body.componentId,
            componentName : req.body.componentName,
            componentDescription : req.body.componentDescription,
            unitOfMeasure : req.body.unitOfMeasure,
            requiredQuantity : req.body.requiredQuantity,
        });
        await subprocessItem.save();
        res.status(200).send(subprocessItem);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// get subProcess by id
export const getSubProcessItemById = async(req , res) => {
    try {
        const subprocessItem = await SubProcessItem.findById(req.params.id);
        res.status(200).send(subprocessItem);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// upadte subprocess
export const updateSubProcessItemById = async(req , res) => {
    try {
        const subprocessItem = await SubProcessItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(subprocessItem);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// delete subprocess
export const deleteSubProcessItemById = async(req, res) => {
    try {
        const subprocessItem = await SubProcessItem.findByIdAndDelete(req.params.id);
        res.status(200).send(subprocessItem);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}