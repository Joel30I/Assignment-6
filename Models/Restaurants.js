const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RestaurantSchema = new Schema({
    _id : { type : String, required : true},        //1
    name : { type : String, required : true },      //2
    city_name : {  type : String,   required : true }, //3
    city : { type : Number, required : true},   //4
    area : {type : Number, required : true},    
    address : {type : String,required : true},
    locality : { type : String, required : true},
    thumb : {type : String, required : true},
    cost : {type : Number,required : true},
    contact_number : { type : String,  required : false},
    type : [{mealtype : Number,name : String }],
    Cuisine : [{cuisine : Number,name : String }]});     //12--
module.exports = mongoose.model('Restaurants',RestaurantSchema, "Restaurants");