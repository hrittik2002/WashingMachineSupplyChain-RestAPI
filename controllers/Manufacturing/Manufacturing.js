import Manufacturing from "../../models/Manufacturing.js";

export const getAllManufacturingData = async (req, res) => {
  try {
    const manufacturingOrders = await Manufacturing.findAll();
    res.json(manufacturingOrders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export const getManufacturingDataById = async (req, res) => {
  try {
    const manufacturingOrder = await Manufacturing.findOne({
      _id: req.params.id,
    });
    if (!manufacturingOrder) {
      return res.status(404).json({ msg: "Manufacturing order not found" });
    }
    res.json(manufacturingOrder);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export const addManufacturingData = async (req, res) => {
  const {
    SKU,
    startDate,
    endDate,
    productionQuantity,
    productionCost,
    scrapPercentage,
  } = req.body;
  try {
    const newOrder = await Manufacturing.create({
      SKU,
      startDate,
      endDate,
      productionQuantity,
      productionCost,
      scrapPercentage,
    });
    res.json(newOrder);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
