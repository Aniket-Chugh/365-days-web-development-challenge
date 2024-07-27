

function yoyo(name,age){

   
this.name = name;
this.age = 34;

// making function with this!

this.new = function(){
    console.log("i am the funtion new ")

}

}

var yoyo = new yoyo('aniket' , 18);

console.log(yoyo);
yoyo.new();


// what is called object literal -- >

var cat = {
    name : false,
    num : false,
    news : function(){
        console.log("i am the news function ")

    },

    fiew : function(){
console.log("i am the fiew function !")
    }
};


cat.name = "black pussy";
cat.num = 34;

console.log(cat)

cat.news();
cat.fiew();


