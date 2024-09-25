var world ="Hello World";
var count=0;

var storing = world.toLowerCase();
var egshig = 'aeiouAEIOU';

for (var i =0; i < world.length; i++){
    if (egshig.includes(world[i])){
        count++
    }
}

console.log('нийт эгшгийн тэнцүү: '+ count);