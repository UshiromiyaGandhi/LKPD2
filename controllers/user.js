const User = require('../models/Users')

module.exports = {
    index: async (req, res) => {
        try {
            const users = await User.find()
            if (users.length > 0) {
                res.status(200).json({
                    status: true,
                    data: users,
                    method: req.method,
                    url: req.url
                })
            } else {
                res.json({
                    status: false,
                    message: "Data masih kosong"
                })
            }
        } catch (error) {
            res.status(400).json({success: false})
        }
    },
    show: async (req, res) => {
        try{
            const user = await User.findById(req.params.id)
            res.status(200).json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "Data berhasil didapat"
            })
        } catch (e) {
            res.status(400).json({success: false, message: e.toString()})
        }
    },
    store: async (req, res) => {
        try{
            const user = await User.create(req.body)
            res.status(200).json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambahkan"
            })
        } catch (e) {
            res.status(400).json({success: false})
        }
    },
    update: async (req, res) => {
        try{
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.status(200).json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "Data berhasil diubah"
            })
        } catch (e) {
            res.status(400).json({success: false, message: e.toString()})
        }
    },
    delete: async (req, res) => {
        try{
            await User.findByIdAndDelete(req.params.id, )
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Data berhasil dihapus"
            })
        } catch (e) {
            res.status(400).json({success: false, message: e.toString()})
        }
    }
}