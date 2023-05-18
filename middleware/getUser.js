const { User } = require('../db/models');

// middleware - запускается при каждом запросе
async function getUser(req, res, next) {
  const { userId } = req.session;
  if(userId){
    // const user = await User.findByPk(req.session.user);
    // res.locals.user = { name: user.name, id: user.id };
      // если пользователь авторизован получаем его из БД
   
  // res.locals - хранилище запроса (существует только во время исполнения одного запроса)
    res.locals.user = userId && (await User.findByPk(userId));
  // console.log(res.locals.user);
  }
  next();
}

module.exports = getUser;