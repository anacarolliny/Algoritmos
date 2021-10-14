const value = 0


const a = {

 value: 1,

 get: function () {

 return this.value

 }

}


const b = {

 value: 2,

 get: a.get

}


const c = a.get

const d = b.get


console.log(a.get(), b.get(), c(), d())