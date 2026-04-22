const db = require('../utils/database');

module.exports = class Product {
    constructor(productName, price, rating, location, discount, image, Id){
        this.productName = productName;
        this.price = price;
        this.rating = rating;
        this.location = location;
        this.discount = discount;
        this.image = image;
        this.Id = Id;
    };

    save(){
        return db.execute('INSERT INTO productlist (productName, price, rating, location, discount, image) VALUES (?, ?, ?, ?, ?, ?)', [this.productName, this.price, this.rating, this.location, this.discount, this.image])
    }

    static fetchAll(){
        return db.execute('SELECT * FROM novamart.productlist');
    }

    static findById(Id){
        return db.execute('SELECT * FROM novamart.productlist WHERE Id = ?', [Id]);
    }

    static deleteById(Id){
        return db.execute('DELETE FROM productList WHERE Id = ?', [Id]);
    };
}