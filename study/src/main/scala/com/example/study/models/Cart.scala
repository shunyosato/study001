package com.example.study.models

/**
  * Created by shunyo.sato on 2016/06/16.
  */
import scala.collection.mutable.ListBuffer

class Cart(val products: ListBuffer[Product]) {

  //商品1つ追加
  def add1(p1: Product) = {
    products += p1
  }

  //商品を複数追加
  def add2(ph: Product*) = {
    products ++= ph
  }

  //商品を削除
  def remove(x: Int) {
    products.remove(x)
  }
}
