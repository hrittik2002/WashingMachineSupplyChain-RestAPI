import Bom from "../../models/Bom";

// get all bom data
export const getAllBomData = async () => {
  try {
    const items = await Bom.findAll();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// create new dom data
export const createDomData = async (data) => {
  const bom = new Bom({
    SKU: req.body.SKU,
    componentName: req.body.componentName,
    componentDescription: req.body.componentDescription,
    unitOfMeasure: req.body.unitOfMeasure,
    cost: req.body.cost,
    isDefault: req.body.isDefault,
    leadTime: req.body.leadTime,
    supplierId: req.body.supplierId,
  });

  try {
    const newBom = await bom.save();
    res.status(201).json(newBom);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }  
};

// get dom data by id
export const getBomDataById = async(req , res) => {
    try {
        const bom = await Bom.findOne({
          _id: req.params.id,
        });
        if (!bom) {
          return res.status(404).json({ msg: "BOM not found" });
        }
        res.json(bom);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
}

// update the bom by id
export const updateBomDataById = async(req , res) => {
    const id = req.params.componentId;
    Bom.update({ _id: id }, { $set: req.body })
      .exec()
      .then(result => {
        console.log(result);
        res.status(200).json({ message: 'Bill of material updated' });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
}

// delete bom by id
export const deleteBomDataById = async(req , res) => {
    const id = req.params.id;
  Bom.remove({ _id : id })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json({ message: 'Bill of material deleted' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
}