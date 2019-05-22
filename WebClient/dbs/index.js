const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/mobileShop')

require('../models/product');