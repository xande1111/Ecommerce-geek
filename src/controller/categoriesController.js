const Categories = require("../models/categories");

exports.create = (req, res) => {
  // valddiar request
  if (!req.body.cat_name) {
    res.status(400).send({ message: "Campo deve ser preenchido!" });
    return;
  }

  const category = {
    cat_name: req.body.cat_name,
    cat_description: req.body.cat_description,
  };


  Categories.create(category)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Erro encontrado ao criar categoria.",
      });
    });
};

exports.findAll = (req, res) => {
  Categories.findAll()
    .then((categories) => {
      res.send(categories);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Ocorreu algum erro ao recuperar categoria",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Categories.findByPk(id)
    .then((category) => {
      res.send(category);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao recuperar a categoria com id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Categories.update(req.body, {
    where: { cat_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "A categoria foi atualizada com êxito.",
        });
      } else {
        res.send({
          message: `Não é possível atualizar a categoria com id=${id}. Talvez a categoria não tenha sido encontrada ou campo esteja vazio!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating category with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Categories.destroy({
    where: { cat_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "A categoria foi excluída com êxito!",
        });
      } else {
        res.send({
          message: `Não é possível excluir a categoria com id=${id}. Talvez a categoria não tenha sido encontrada!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Não foi possível excluir a categoria com id=" + id,
      });
    });
};
