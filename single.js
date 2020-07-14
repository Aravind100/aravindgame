	function sp()
    {
    var total=0,onum,mynum,on,ofinal,mfinal ;
    var oname = prompt("Enter yr name");
    var mname = "computer";

    onum = prompt("Enter yr no =");
    on = parseInt(onum);
    if(on<1 || on>10){
    alert("your no. should in between 1-10");
    return false;
    }
    else if(on == 1){
    alert("You are close to win the game");
    return false;
    }
    else{
    var total = total+on;
    alert("Total is ="+total);
    mynum = 12-total;
    alert("Mine is ="+mynum);

    total = total+mynum;
    alert("total is = "+total);
    
        //second attempt
       
    onum = prompt("Enter yr no =");
    on = parseInt(onum);
    if(on<0 || on>10){
    alert("your no. should in between 1-10");
    return false;
    }
    var total = total+on;
     alert("Total is ="+total);

    mynum = 23-total;
    alert("Mine is ="+mynum);

    total = total+mynum;
    alert("total is = "+total);
        
        //third attempt
    onum = prompt("Enter yr no =");
    on = parseInt(onum);
    if(on<0 || on>10){
    alert("your no. should in between 1-10");
    return false;
    }
    var total = total+on;
    alert("Total is ="+total);

    mynum = 34-total;
    alert("Mine is ="+mynum);

    total = total+mynum;
    alert("total is = "+total);
        
    //forth attempt
    onum = prompt("Enter yr no =");
    on = parseInt(onum);
    if(on<0 || on>10){
    alert("your no. should in between 1-10");
    return false;
    }
    var total = total+on;
    alert("Total is ="+total);

    mynum = 45-total;
    alert("Mine is ="+mynum);

    total = total+mynum;
    alert("total is = "+total);
        
        //fifth attempt
    onum = prompt("Enter yr no =");
    on = parseInt(onum);
    if(on<0 || on>10){
    alert("your no. should in between 1-10");
    return false;
    }
    var total = total+on;
    alert("Total is ="+total);

    mynum = 56-total;
    alert("Mine is ="+mynum);

    total = total+mynum;
    alert("total is = "+total);

    //sixth attempt
    onum = prompt("Enter yr no =");
    on = parseInt(onum);
    if(on<0 || on>10){
    alert("your no. should in between 1-10");
    return false;
    }
    var total = total+on;
    alert("Total is ="+total);

    mynum = 67-total;
    alert("Mine is ="+mynum);

    total = total+mynum;
    alert("total is = "+total);

        //seventh attempt
    onum = prompt("Enter yr no =");
    on = parseInt(onum);
    if(on<0 || on>10){
    alert("your no. should in between 1-10");
    return false;
    }
    var total = total+on;
    alert("Total is ="+total);

    mynum = 78-total;
    alert("Mine is ="+mynum);

    total = total+mynum;
    alert("total is = "+total);

    //eigth attempt
    onum = prompt("Enter yr no =");
    on = parseInt(onum);
    if(on<0 || on>10){
    alert("your no. should in between 1-10");
    return false;
    }
    var total = total+on;
    alert("Total is ="+total);

    mynum = 89-total;
    alert("Mine is ="+mynum);

    total = total+mynum;
    alert("total is = "+total);
    //ninth attemp

    onum = prompt("Enter yr no =");
    on = parseInt(onum);
    if(on<0 || on>10){
    alert("your no. should in between 1-10");
    return false;
    }
    var total = total+on;
    ofinal = total;
    alert("Total is ="+total);

    mynum = 100-total;
    alert("Mine is ="+mynum);

    total = total+mynum;
    mfinal = total;
    alert("total is = "+total);

        //winner

    if(mfinal == 100){
    alert("Sorry, you lose the game");
     return false;
    }

    else{
    alert("you win the game");
    return false;
        }

}
}
    