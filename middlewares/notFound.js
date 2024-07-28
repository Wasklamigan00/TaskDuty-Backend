const notFound = (req, res) =>{
    res.json({
        title: "Routes Not Found"
    })
}
module.exports = notFound