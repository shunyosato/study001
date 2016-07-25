package com.example.study.services


import com.example.study.models.Product
import com.example.study.models.Cart

trait Service{
  val name: String
  val tax: Int

  def accouting(cart: Cart): Double = {
    val p = new Product(name = "pen",  price = 100)
    val z = p.price +1
    // ListBuffer[Product] -> Double
    // Product(name: String, price: Int)

    // cart.products
    // --- loop products -> product.price
    //   price += price + (price / service.tax) -> sum: Double
    // ---

    // List(1, 2, 3) -> sum
    val sum: Double = cart.products.foldLeft(0)((x,y) => x + y.price)
    //(sum) + ((sum / 100)* tax)
    println(sum)
    println(sum * tax /100)
    sum + (sum * tax / 100)

  }
}

object Amazon extends Service {
  val name = "amazon"
  val tax = 10
}

object Rakuten extends Service {
  val name = "rakuten"
  val tax = 20
}


