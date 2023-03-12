const Categories = require("../models/categories");

const categoriesController = {

  async createCategories(req, res){
      const { cat_name, cat_description} = req.body;

      const newCategory = await Categories.create({
        cat_name, 
        cat_description,
      });

      res.json(newCategory);
  },

  async getCategories(req, res){
      const listCategories = await Categories.findAll();

      res.json(listCategories);
  },

  async getCategoriesById(req, res){
      const { id } = req.params;

      const listCategoriesId = await Categories.findOne({
          where: {
              cat_id: id,
          },
      });

      if(listCategoriesId === null){
          return res.status(404).json("Id não encontrado");
      } else {
          res.json(listCategoriesId);
      }
      

  },

  async updateCategories(req, res){
      const { id } = req.params;
      const { cat_name, cat_description} = req.body;

      await Categories.update({
        cat_name, 
        cat_description,
      },
      {
          where: {
              cat_id: id,
          },
      }
      );

      res.status(200).json(req.body);
  },

  async deleteCategories(req, res){
      const { id } = req.params;
      
      const findCategory = await Catgories.findOne({
          where: {
              cat_id: id,
          }
      });

      if(findCategory === null){                                             
          res.status(404).json("Id não encontrado");
      } else{ 

          try {
              await Categories.destroy({
                  where: {
                      cat_id: id,  
                  } 
              });

              return res.status(204).json("Cadastro deletado!");

          } catch (error){
              if (error.name === 'SequelizeForeignKeyConstraintError') {
                  return res.status(400).json('Não é possível deletar a categoria pois ela possui produtos ativos')
              }
          }     
      }

},


}; 

module.exports = categoriesController;
