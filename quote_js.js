function quote(){
  var selector=[1,2,3,4,5,6,7]
  var random = selector[Math.floor(Math.random()*7)];
  while(random==selector[0]){
    selector.splice(0,1)
    document.getElementById('quote').innerHTML="Be yourself; everyone else is already taken.";
    document.getElementById('writer').innerHTML="--oscar wilde";
    console.log(selector);
  }
  while(random==selector[1]){
    selector.splice(1,1)
    document.getElementById('quote').innerHTML="Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.";
    document.getElementById('writer').innerHTML="--Albert Einstien";
    console.log(selector);
  }
  while(random==selector[2]){
    selector.splice(2,1)
    document.getElementById('quote').innerHTML="A room without books is like a body without a soul.";
    document.getElementById('writer').innerHTML="-- Marcus Tullius Cicero";
    console.log(selector);
  }
  while(random==selector[3]){
    selector.splice(3,1)
    document.getElementById('quote').innerHTML=`You've gotta dance like there's nobody watching
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth."`;
    document.getElementById('writer').innerHTML="--William W. Purkey";
    console.log(selector);
  }
  while(random==selector[4]){
    selector.splice(4,1)
    document.getElementById('quote').innerHTML="You know you're in love when you can't fall asleep because reality is finally better than your dreams.";
    document.getElementById('writer').innerHTML="--Dr. Seuss";
    console.log(selector);
  }
  while(random==selector[5]){
    selector.splice(5,1)
    document.getElementById('quote').innerHTML="If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.";
    document.getElementById('writer').innerHTML="--J.K. Rowling, Harry Potter and the Goblet of Fire";
    console.log(selector);
  }
  while(random==selector[6]){
    selector.splice(6,1)
    document.getElementById('quote').innerHTML="If you tell the truth, you don't have to remember anything.";
    document.getElementById('writer').innerHTML="-- Mark Twain";
    console.log(selector);
  }
}
  /*
if (random==selector[0]){
    document.getElementById('quote').innerHTML="Be yourself; everyone else is already taken.";
    document.getElementById('writer').innerHTML="--oscar wilde";
    console.log(selector);
}  
  else if(random==selector[1]){
    document.getElementById('quote').innerHTML="Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.";
    document.getElementById('writer').innerHTML="--Albert Einstien";
    
    console.log(selector);
   }
    
   else if(random==selector[2]){
    document.getElementById('quote').innerHTML="A room without books is like a body without a soul.";
    document.getElementById('writer').innerHTML="-- Marcus Tullius Cicero";
   
    console.log(selector);
    }
    else if(random==selector[3]){
    document.getElementById('quote').innerHTML=`You've gotta dance like there's nobody watching
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth."`;
    document.getElementById('writer').innerHTML="--William W. Purkey";
    
    console.log(selector);
    }
    else if(random==selector[4]){
    document.getElementById('quote').innerHTML="You know you're in love when you can't fall asleep because reality is finally better than your dreams.";
    document.getElementById('writer').innerHTML="--Dr. Seuss";
    console.log(selector);
    }
    else if(random==selector[5]){
    document.getElementById('quote').innerHTML="If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.";
    document.getElementById('writer').innerHTML="--J.K. Rowling, Harry Potter and the Goblet of Fire";
    console.log(selector);
    }
    
    else if(random==selector[6]){
    document.getElementById('quote').innerHTML="If you tell the truth, you don't have to remember anything.";
    document.getElementById('writer').innerHTML="-- Mark Twain";
    console.log(selector);
}

}
/*
“Be yourself; everyone else is already taken.”
oscar wilde
“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
 Albert Einstein
 “A room without books is like a body without a soul.”
― Marcus Tullius Cicero
“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”
― William W. Purkey
“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
― Dr. Seuss
“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”
― J.K. Rowling, Harry Potter and the Goblet of Fire
“If you tell the truth, you don't have to remember anything.”
― Mark Twain

switch(random){
  case 1:
    document.getElementById('quote').innerHTML="Be yourself; everyone else is already taken."
    document.getElementById('writer').innerHTML="--oscar wilde"
    break;
    case 2:
    document.getElementById('quote').innerHTML="Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    document.getElementById('writer').innerHTML="--Albert Einstien"
    break;
    case 3:
    document.getElementById('quote').innerHTML="A room without books is like a body without a soul."
    document.getElementById('writer').innerHTML="-- Marcus Tullius Cicero"
    break;
    case 4:
    document.getElementById('quote').innerHTML=`You've gotta dance like there's nobody watching
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth."`
    document.getElementById('writer').innerHTML="--William W. Purkey"
    break;
    case 5:
    document.getElementById('quote').innerHTML="You know you're in love when you can't fall asleep because reality is finally better than your dreams."
    document.getElementById('writer').innerHTML="--Dr. Seuss"
    break;
    case 6:
    document.getElementById('quote').innerHTML="If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."
    document.getElementById('writer').innerHTML="--J.K. Rowling, Harry Potter and the Goblet of Fire"
    break;
    case 7:
    document.getElementById('quote').innerHTML="If you tell the truth, you don't have to remember anything."
    document.getElementById('writer').innerHTML="-- Mark Twain"
}

}

*/
