const jwt = require("jsonwebtoken");

class responce {
  REST(res, sucess, status, message, object) {
    res.status(status).json({
      sucess: sucess,
      message: message,
      object,
    });
  }
  utils_check(func) {
    try {
      func();
    } catch (error) {
      res.status(500).send("some internal server error");
    }
  }
  create_jwt(res, user , secure,message) {
      const data = {
        user: {
          id: user.id,
        },
    };
    const authToken = jwt.sign(data, secure);
      return res.status(200).json({
        sucess: true,
        message: message,
        authToken,
      });
    };
  }
module.exports = { responce };
