
const { myblogs } = require('../public/myblogs')

const getAllBlog = (req, res) => {
    console.log("Get all blog")
    res.render('home', { blogs: myblogs })
}

const addBlog = (req, res) => {
    const data = {
        id: myblogs.length + 1,
        title: req.body.title,
        content: req.body.content,
        comments: []
    }
    myblogs.push(data)
    res.render('home', { blogs: myblogs })
    console.log("Added blog:", data);
}

const deleteBlog = (req, res) => {
    const id = req.params.id
    console.log("Deleted blog: ", id);
    const index = myblogs.findIndex(data => data.id === Number(id))
    myblogs.splice(index, 1);
    res.render('home', { blogs: myblogs })
}
module.exports = {
    getAllBlog,
    addBlog,
    deleteBlog
}