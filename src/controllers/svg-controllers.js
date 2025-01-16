const moduleSvg = require("../module/module-svg")

module.exports = {
    getData: async (req, res) => {
        try {
            const data = await moduleSvg.find();
            res.status(200).json({
                message: "Data get data successfully",
                data: data
            });
        } catch (error) {
            res?.send(500).json({ message: "Internal server error" });
        }
    },

    getDataById: async (req, res) => {
        try {
            console.log(req?.params?.id)
            const getData = await moduleSvg.findById({ _id: req?.params.id });
            res.status(200).json({
                message: "Data get specificate data successfully",
                data: getData
            });
        } catch (error) {
            console.log(error)
            res?.send(500).json({ message: "Internal server error" });
        }
    },

    insertData: async (req, res) => {
        try {
            const newData = req?.body
            const dataToSave = new moduleSvg({
                shape: newData?.shape,
                rectangle: JSON.parse(newData?.rectangles),
                dotPosition: JSON.parse(newData?.dotPositions),
                offset: JSON.parse(newData?.offset),
                img: req?.file?.filename || req?.body?.img
            })

            const savedData = await dataToSave.save(); // Save the data to the database

            // Return the saved data
            res.status(200).json({
                message: "Data saved successfully",
                data: savedData
            });
        } catch (error) {
            res?.send(500).json({ message: "Internal server error", errorMsg: error.message });
        }
    },

    updateData: async (req, res) => {
        try {
            const newData = req?.body
            const dataToSave = {
                shape: newData?.shape,
                rectangle: JSON.parse(newData?.rectangles),
                dotPosition: JSON.parse(newData?.dotPositions),
                offset: JSON.parse(newData?.offset),
                img: req?.file?.filename || req?.body?.img
            }

            console.log(req?.body)
            console.log(req?.params)

            const updateData = await moduleSvg.updateOne({ _id: req?.params?.id }, { $set: dataToSave });

            // Return the updated data
            res.status(200).json({
                message: "Data updated successfully",
                data: updateData
            });
        } catch (error) {
            res?.send(500).json({ message: "Internal server error", errorMsg: error.message });
        }
    },

    deleteData: async (req, res) => {
        try {
            const deleteData = await moduleSvg.deleteOne({ _id: req?.params.id });
            res.status(200).json({
                message: "Delete data successfully",
                data: deleteData
            });
        } catch (error) {
            res?.send(500).json({ message: "Internal server error" });
        }
    }
}