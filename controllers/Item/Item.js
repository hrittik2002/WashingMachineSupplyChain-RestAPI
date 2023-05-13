import Item from "../../models/Item.js";

export const getAllItems = async(req , res) =>{
    try {
        const items = await Item.find({});
        res.json(items);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }    
}
export const postItem = async(req , res) =>{
 const item = new Item({
    unitOfMeasure: req.body.unitOfMeasure,
    weight: req.body.weight,
    dimensions: req.body.dimensions,
    price: req.body.price,
    supplierId: req.body.supplierId,
    leadTime: req.body.leadTime,
    safetyStockLevel: req.body.safetyStockLevel
  });

  try {
    const newItem = await item.save();

    res.status(200).json({
      messege : "item saved successfully"
  })
  } catch (err) {
    res.status(404).json({
      error: err.message,
  })
  }

}