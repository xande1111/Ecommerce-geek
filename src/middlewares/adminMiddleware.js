function adminMiddleware(req, res, next) {
    // verifique se o user_type do usuário é admin
    if (req.user && req.user.user_type === "admin") {
      // se for admin, chame a próxima rota/middleware
      next();
    } else {
      // se não for admin, envie uma resposta de erro
      res.status(403).send("Acesso Negado");
    }
  }

  module.exports = adminMiddleware;
