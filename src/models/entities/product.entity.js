// src\models\entities\product.entity.js - logicinfo.com.br
class ProductEntity {
  constructor({ id, name, price, categoryid }) {
    this.id = id
    this.name = name
    this.price = price
    this.categoryid = categoryid
  }
}

export default ProductEntity