class Product {
  constructor() {
    this.userLoggedIn = false;
    this.userDiscount = 0;
    this.moreThanOneProduct = false;
  }
setUserLoggedIn() {
    this.userLoggedIn = true;
    return this;
  }

setUserDiscount() {
    this.userDiscount = 10;
    return this;
  }

setMoreThanOneProduct() {
    this.moreThanOneProduct = true;
    this.userDiscount = 20;
    return this;
  }

build() {
    return {
      userLoggedIn: this.userLoggedIn,
      userDiscount: this.userDiscount,
      moreThanOneProduct: this.moreThanOneProduct
    };
  }
}