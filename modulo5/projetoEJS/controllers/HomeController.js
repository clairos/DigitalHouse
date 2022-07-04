const HomeController = {
    index: (req,res) => {
        let info = {
            group: 'LOONA',
            members: ['heejin', 'choerry', 'gowon']
        };

        return res.render('index', info);
    }
};

module.exports = HomeController;