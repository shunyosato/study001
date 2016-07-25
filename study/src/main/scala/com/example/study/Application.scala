package com.example.study

import com.example.study.services.{Amazon, Rakuten}
import models.Cart
import models.Product

import scala.collection.mutable.ListBuffer

object Application {

  def run(args: Array[String]): Unit = {
    println("application started!")

    // ここにコードを書く
    val product = ListBuffer.empty[Product]
    val cart = new Cart(product)      //Cartのインスタンス化

    //商品1つ追加
    val product1 = new Product("bike": String,200: Int)
    cart.add1(product1)
    println(product(0).name + " " + product(0).price)

    //商品複数追加
    val product2 = new Product("tv",600)
    val product3 = new Product("glasses",200)
    val product4 = new Product("pen",500)
    cart.add2(product2,product3,product4)

    //商品名、価格を表示
    println()
    println(cart.products.map(x => x.name + " " + x.price))

    //商品を削除
    cart.remove(3)

    //削除後の商品名、価格を表示
    println()
    println(cart.products.map(x => x.name + " " + x.price))


    println("amazon   " + Amazon.accouting(cart))
    println("rakuten  " + Rakuten.accouting(cart))
  }
}