const { myblogs } = require('../public/myblogs')

const addComment = (req, res) => {
    const idBlog = req.body.idBlog
    console.log("Add comment ", idBlog);
    const data = myblogs.filter(b => b.id === Number(idBlog))[0];
    console.log(data);
    const dataComment = {
        id: data.comments.length + 1,
        content: req.body.contentComment
    }
    const result = {
        ...data,
        comments: data.comments.push(dataComment)
    }
    myblogs.forEach(data => {
        if (data.id === idBlog) {
            data = result
        }
    })
    res.render('comment', { blogs: myblogs })
}

module.exports = {
    addComment
}