const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
  ma:String,
  ten:String,
  gia:String,
  manHinh:String,
  cameraTruoc:String,
  cameraSau:String,
  cpu:String,
  ram:String,
  rom:String,
  theNho:String,
  sim:String,
  hinhAnh:String
})

mongoose.model('product',productSchema);