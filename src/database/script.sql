-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema desafio.final.gama
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `desafio.final.gama` ;

-- -----------------------------------------------------
-- Schema desafio.final.gama
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `desafio.final.gama` DEFAULT CHARACTER SET utf8mb3 ;
USE `desafio.final.gama` ;

-- -----------------------------------------------------
-- Table `desafio.final.gama`.`tb_categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `desafio.final.gama`.`tb_categories` (
  `cat_id` INT NOT NULL AUTO_INCREMENT,
  `cat_name` VARCHAR(50) NOT NULL,
  `cat_description` VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (`cat_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

CREATE UNIQUE INDEX `cat_id_UNIQUE` ON `desafio.final.gama`.`tb_categories` (`cat_id` ASC) VISIBLE;

CREATE UNIQUE INDEX `cat_name_UNIQUE` ON `desafio.final.gama`.`tb_categories` (`cat_name` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `desafio.final.gama`.`tb_users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `desafio.final.gama`.`tb_users` (
  `user_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(70) NOT NULL,
  `user_email` VARCHAR(100) NOT NULL,
  `user_password` VARCHAR(246) NOT NULL,
  `user_type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

CREATE UNIQUE INDEX `id_usuarios_UNIQUE` ON `desafio.final.gama`.`tb_users` (`user_id` ASC) VISIBLE;

CREATE UNIQUE INDEX `user_email_UNIQUE` ON `desafio.final.gama`.`tb_users` (`user_email` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `desafio.final.gama`.`tb_orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `desafio.final.gama`.`tb_orders` (
  `order_id` INT NOT NULL AUTO_INCREMENT,
  `order_total` INT NOT NULL,
  `created_at` DATE NOT NULL,
  `updated_at` DATE NULL DEFAULT NULL,
  `tb_users_user_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`order_id`),
  CONSTRAINT `fk_tb_orders_tb_users1`
    FOREIGN KEY (`tb_users_user_id`)
    REFERENCES `desafio.final.gama`.`tb_users` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

CREATE UNIQUE INDEX `order_id_UNIQUE` ON `desafio.final.gama`.`tb_orders` (`order_id` ASC) VISIBLE;

CREATE INDEX `fk_tb_orders_tb_users1_idx` ON `desafio.final.gama`.`tb_orders` (`tb_users_user_id` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `desafio.final.gama`.`tb_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `desafio.final.gama`.`tb_products` (
  `product_id` INT NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(50) NOT NULL,
  `product_photo` BLOB NOT NULL,
  `product_description` VARCHAR(200) NOT NULL,
  `tb_categories_cat_id` INT NOT NULL,
  PRIMARY KEY (`product_id`),
  CONSTRAINT `fk_tb_products_tb_categories`
    FOREIGN KEY (`tb_categories_cat_id`)
    REFERENCES `desafio.final.gama`.`tb_categories` (`cat_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

CREATE UNIQUE INDEX `product_id_UNIQUE` ON `desafio.final.gama`.`tb_products` (`product_id` ASC) VISIBLE;

CREATE INDEX `fk_tb_products_tb_categories_idx` ON `desafio.final.gama`.`tb_products` (`tb_categories_cat_id` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `desafio.final.gama`.`tb_order_items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `desafio.final.gama`.`tb_order_items` (
  `order_item_id` INT NOT NULL AUTO_INCREMENT,
  `order_item_quantity` INT NOT NULL,
  `tb_orders_order_id` INT NOT NULL,
  `tb_products_product_id` INT NOT NULL,
  PRIMARY KEY (`order_item_id`),
  CONSTRAINT `fk_tb_order_items_tb_orders1`
    FOREIGN KEY (`tb_orders_order_id`)
    REFERENCES `desafio.final.gama`.`tb_orders` (`order_id`),
  CONSTRAINT `fk_tb_order_items_tb_products1`
    FOREIGN KEY (`tb_products_product_id`)
    REFERENCES `desafio.final.gama`.`tb_products` (`product_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

CREATE INDEX `fk_tb_order_items_tb_orders1_idx` ON `desafio.final.gama`.`tb_order_items` (`tb_orders_order_id` ASC) VISIBLE;

CREATE INDEX `fk_tb_order_items_tb_products1_idx` ON `desafio.final.gama`.`tb_order_items` (`tb_products_product_id` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


