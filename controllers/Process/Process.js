import Process from "../../models/Process.js";

// get all process
export const getAllProcessData = async(req , res) => {
    try{
        const processes = await Process.findAll();
        res.status(200).json(processes);
    }
    catch(err){
        res.status(500).json(err)
    }
}

// get process by id
export const getProcessById = async(req , res) => {
    try{
        const processes = await Process.find({ _id : req.params.id });
        res.status(200).json(processes);
    }
    catch(err){
        res.status(500).json(err)
    }
}

// add new process
export const addProcessData = async(req , res) => {
    try{
        const process = new Process({
            orderId: req.body.orderId,
            setupTime: req.body.setupTime,
            runTime: req.body.runTime,
            resourceId: req.body.resourceId
          });
          await process.save();
          res.status(200).json(process);
    }
    catch(err){
        res.status(500).json({error : err})
    }
}

// update process
export const updateProcessData = async(req , res) => {
    try{
        const process = await Process.findByIdAndUpdate(req.params.id, {
            orderId: req.body.orderId,
            setupTime: req.body.setupTime,
            runTime: req.body.runTime,
            resourceId: req.body.resourceId
          }, { new: true });
          if (!process) return res.status(404).send('The process with the given ID was not found');
          res.status(200).json(process);
    }
    catch(err){
        res.status(500).json({error : err})
    }
}

// delete process
export const deleteProcess = async(req, res) => {
    try{
        const process = await Process.findByIdAndRemove(req.params.id);
        if (!process) return res.status(404).send('The process with the given ID was not found');
        res.status(200).json(process);
    }
    catch(err){
        res.status(500).json({error : err})
    }
}
