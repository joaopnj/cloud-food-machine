module.exports = (app) => {
    const machineDao = app.dao.machineDao;

    // HTTP methods, GET, POST, PUT , DELETE
    app.post ('/pickproduct',    machineDao.pickproduct);
}