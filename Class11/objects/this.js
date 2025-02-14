// console.log(this);

// window.console.log("{With use of window object");

// this.console.log("With uise of this as window object");

let obj = {
  whatsThis: this,
};

// console.log(obj.whatsThis);

//try it with function

function testFnc() {
  console.log(this);
}

// testFnc();

let obj2 = {
  whatsThis: this,
  whatIsThisInMethod: function () {
    console.log(this);
  },
};

// obj2.whatIsThisInMethod();

function Pet(name) {
  console.log(this);
  this.name = name;

  this.eat = function () {
    console.log(this);
  };
}

// let a = new Pet("Lusi");
// a.eat();

let obj3 = {
  self: this,
  name: "Leon",
  whatIsThis: () => {
    console.log(this.name);
  },
};

obj3.whatIsThis();

function testFnc2() {
  obj3.whatIsThis();
}

testFnc2();
