const category = require("../models/category.schema")

const create = async (req, res) => {
    try {
        
        const newCategory = new category(req.body);

        const result = await newCategory.save();

        console.log("Category saved successfully:", result);

        res.redirect('/category');
    } catch (error) {
        console.error("Error saving category:", error);
        res.status(500).send("Error saving category to the database");
    }
};

const update = async (req, res) => {
    try {
        let { id } = req.params;
        let cat = await category.findById(id);
        cat.subCategoryId = req.body.subId;
        await cat.save();
        res.send(cat);
    } catch (error) {
        console.error("Error updating category:", error);
        res.status(500).send("Error updating category in the database");
    }
};


const getCat = async (req, res) => {

    // let data = await category.find().populate({
    //     path: "subCategoryId",
    //     populate: {
    //         path: "extraCategoryId"
    //     }
    // });
    // res.send(data);
    let data = await category.find({})
    res.render('category',{data:data});
}

module.exports = { create, update, getCat };