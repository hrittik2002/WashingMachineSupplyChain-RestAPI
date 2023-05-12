import Department from "../../models/Department.js";


// create a new department
export const createDepartment = async(req , res) => {
    try{
        console.log(req)
        const { departmentName } = req.body;

        // find the department in the database by using email
        const department = await Department.findOne({ departmentName });
         
        if(department){
            res.status(404).send(" Department already exists");
        }

        const newDepartment = new Department({
            departmentName : departmentName,
        })
        try{
            await newDepartment.save();
            res.status(200).json({
                deptId : newDepartment._id,
                deptName : newDepartment.name
            })
        }
        catch(err){
            res.status(404).json({
                error: err.message
            })
        }
    }
    catch(err){
        res.status(404).json({
            error: err.message
        })
    }
}