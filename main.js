// each
function each(coll, f) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                f(coll[i], i); 
          } 
    } else { 
          for (var key in coll) { 
                f(coll[key], key); 
          } 
    } 
}


// map
function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
}


// filter
function filter(array, predicate) {
    var acc = [];
    each(array, function(element) {
        if (predicate(element)) {
            acc.push(element);
        }
    });
    return acc;
}


//reduce
 function reduce(array, f, acc) { 
       if (acc === undefined) { 
             acc = array[0]; 
             array = array.slice(1); 
       } 
       each(array, function(element, i) { 
             acc = f(acc, element, i); 
       }); 
       return acc; 
 }

 $(".pick").click(function() {
    var userPick = $(this).attr("id")
    $(this).css("opacity","1")
    timer(userPick)
    $("#user").attr("src","rock.jpg")
    $("#cpu").attr("src","rock.jpg")
})


function changer(x){
    if(x === "rock"){
        $("#user").attr("src","rock.jpg")
    }else if(x === "paper"){
        $("#user").attr("src","paper.png")
    }else{
        $("#user").attr("src","sec.png")
    }
}


function timer(userPick){
    setTimeout(function(){
        changer(userPick)
    var computerPick = generateCpu()
    var winner = result(userPick,computerPick)
        $("#res").text(winner +" is the winner ")
        $(".pick").css("opacity","0.5")
    },3000)
}

function generateCpu(){
x = Math.floor(Math.random() * 2) + 1
if(x === 0 ){
    return "rock"
}else if(x === 1){
    $("#cpu").attr("src","paper.png")
    return "paper"
}else{
    $("#cpu").attr("src","sec.png")
    return "scissors"
}
}


function result(user,cpu){
    if(user === cpu ){
        return "No One "
   }else
   if (((user==="rock")&&(cpu ==="scissors"))||((user==="paper")&&(cpu ==="rock"))||((user==="scissors")&&(cpu ==="paper"))){
       
       return "The user"
   }else
        return "Cpu"

}
