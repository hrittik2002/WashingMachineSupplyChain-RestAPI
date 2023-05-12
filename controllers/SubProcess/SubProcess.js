import SubProcess from "../../models/SubProcess.js";

// get all sub processes
export const getAllSubProcess = async(req , res) => {
    try {
        const subprocesses = await SubProcess.find({});
        res.status(200).send(subprocesses);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// add new sub process
export const addNewSubProcess = async(req , res) => {
    try {
        const subprocess = new SubProcess({
            processId : req.body.processId,
            resourceId : req.body.resourceId,
            machineOrToolUsed : req.body.machineOrToolUsed,
            operatorName : req.body.operatorName,
            operatorId : req.body.operatorId
        });
        await subprocess.save();
        res.status(200).send(subprocess);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// get subProcess by id
export const getSubProcessById = async(req , res) => {
    try {
        const subprocess = await SubProcess.findById(req.params.id);
        res.status(200).send(subprocess);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// upadte subprocess
export const updateSubProcessById = async(req , res) => {
    try {
        const subprocess = await SubProcess.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(subprocess);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// delete subprocess
export const deleteSubProcessById = async(req, res) => {
    try {
        const subprocess = await SubProcess.findByIdAndDelete(req.params.id);
        res.status(200).send(subprocess);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}