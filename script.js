// Html control
   const allBtns =document.getElementById("allBtns");
   const allBtnsB =document.getElementById("allBtnsB");
   const btnOpen =document.getElementById("open");
   const doorL =document.getElementById("doorL");
   const doorR =document.getElementById("doorR");
   const doorLB =document.getElementById("doorLB");
   const doorRB =document.getElementById("doorRB");

   const btnUpElevA= document.getElementById("btnUp");
   const btnDownElevA= document.getElementById("btnDown");

   const btnUpElevB= document.getElementById("btnUpB");
   const btnDownElevB= document.getElementById("btnDownB");

   const elevAEmergency=document.getElementById("emergency");  
   elevAEmergency.addEventListener("click",callEmergency);
   const elevAEmergencyB=document.getElementById("emergencyB");  
   elevAEmergencyB.addEventListener("click",callEmergencyB);

   function callEmergency(){
    const myFloorName1= getFloorsName();
    myFloorName1.floor.elevatorA.emergency();
   }
    function callEmergencyB(){
        const myFloorName1= getFloorsName();
        myFloorName1.floor.elevatorB.emergency();
    }
    const elevARest=document.getElementById("rest"); 
    elevARest.addEventListener("click",restEvelatorA)
    const elevBRest=document.getElementById("restB");  

    function restEvelatorA(){
        const myFloorName1= getFloorsName();
        console.log(myFloorName1);
        myFloorName1.floor.elevatorA.reset();
       }


//Function to closs the doors
   function doorClose(AorB){
       if(AorB==="ElevatorA"){
           
           doorL.style.width="161px" ;
              doorR.style.width="161px" ;
              allBtns.style.display="none";
              doorOpen=false;
       }
       else{
        doorLB.style.width="161px" ;
        doorRB.style.width="161px" ;
        allBtnsB.style.display="none";
        doorOpenB=false;
       }
   }

    const floorsName=document.querySelectorAll(".li");
    floorsName.forEach(li => {
       
        li.addEventListener("click",setName);
    });
    //Function to set name to label when choossed the floor
    function setName(e){
        let listFloName=e.target.textContent;
        let classFirst=document.querySelectorAll(".first");
        classFirst.forEach(e=>e.style.visibility="visible");
        let classSecond=document.querySelectorAll(".second");
        classSecond.forEach(e=>e.style.visibility="visible");

        document.getElementById("btnUpB").style.visibility="visible";
        document.getElementById("btnUp").style.visibility="visible";
        
        document.getElementById("btnDownB").style.visibility="visible";

      let floorN= listFloName.charAt( listFloName.length-1);
      if(floorN==="y"){
       
          floorN=0;
      }else if(floorN==="t"){
        document.getElementById("btnDownB").style.visibility="hidden";
       document.getElementById("btnUp").style.visibility="hidden";

        let classFirst=document.querySelectorAll(".first");
        classFirst.forEach(e=>e.style.visibility="hidden");
        
          floorN=-1;
      }else if(floorN==="e"){
          document.getElementById("btnUp").style.visibility="hidden";
        document.getElementById("btnUpB").style.visibility="hidden";
        document.getElementById("btnDownB").style.visibility="hidden";

        let classSecond=document.querySelectorAll(".second");
        classSecond.forEach(e=>e.style.visibility="hidden");

          floorN=10;
      }
      document.getElementById("floorName").textContent=listFloName;


      if(floorN==cabinAAA){
          openDoor("ElevatorA");
      }else{

          doorClose("ElevatorA");
      }
      if(floorN==cabinBBB){
          openDoor("ElevatorB");
      }else{

          doorClose("ElevatorB");
      }
      
    }
    
   //Function to open the doors
    function openDoor(AorB){
        console.log(AorB);
        if(AorB==="ElevatorA"){
            
            doorL.style.width="9px" ;
            doorL.style.transition="1s" ;
            doorR.style.width="9px" ;
            doorR.style.transition="1s" ;
            allBtns.style.display="block";
        }else if(AorB==="ElevatorB"){
            doorLB.style.width="9px" ;
            doorLB.style.transition="1s" ;
            doorRB.style.width="9px" ;
            doorRB.style.transition="1s" ;
            allBtnsB.style.display="block";
        }
       }
//************************** Control code ********************/
let cabinAAA=0;
let cabinBBB=0;
let doorOpen=false;
let doorOpenB=false;
class Building{

constructor(floorNumb){
    //this.cabinA=cabinA;
    //this.cabinB=cabinB;
    this.floorNumb=floorNumb;
    //this.doorOpen=doorOpen;
    // this.cabinA=0;
    /*  this.cabinB=4; 
     this.floorNumb=0;*/
     //this.doorOpen=false;
}
 floor={up:(elevat,fN) =>{
           
        console.log("The evelator A on the way");
        console.log("current floor cabin A "+ cabinAAA);
        console.log(elevat);
          if(elevat==="ElevatorA"){
            if(fN>9){
                console.log("The elevator A does't go to the Penthouse");
            }else{
                let duration=fN-cabinAAA;
                if(fN<cabinAAA){
                    duration=cabinAAA-fN;
                    console.log("Duration after is "+duration);
                    }
                setTimeout(() => {    
                // console.log("floor number current  "+ fN);
                    cabinAAA=fN;
                    let floorText=`Evelator A on ${cabinAAA}`;
                    
                if(cabinAAA===0){
                    floorText=" Evelator A on Looby";
                            
                }else if(cabinAAA===-1){
                        floorText=" Evelator A on Basement";
                }else if(cabinAAA===10){
                    floorText=" Evelator A on Penthouse";
                        };
                        
                    document.getElementById("elevatorAName").textContent=floorText;
                    console.log("current cabin "+ cabinAAA);
                    console.log(`The ${elevat} at floor ${fN}`);
                    console.log("The door is open ");
                    //console.log("cabin A "+cabinAAA);
                    doorOpen=true;
                    openDoor(elevat);
                            
                }, duration*1000);
                    }
                    }else{
                        if(fN<0){
                            console.log("The elevator B does't  go to the Basement");
                        }else{

                       /*  console.log("The evelator B on the way");
                        console.log("current floor cabin B "+ cabinBBB); */
                        let duration=fN-cabinBBB;
                        console.log("Duration before is "+duration);
                       
                            if(fN<cabinBBB){
                                duration=cabinBBB-fN;
                                console.log("Duration after is "+duration);
                            }
                        setTimeout(() => {    
                           // console.log("floor number current  "+ fN);
                           cabinBBB=fN;
                           let floorText=`Evelator B on ${cabinBBB}`;
                           if(cabinBBB===0){
                            floorText=" Evelator B on Looby";
                            
                           }else if(cabinBBB===-1){
                            floorText=" Evelator B on Basement";
                           }else if(cabinBBB===10){
                            floorText=" Evelator B on Penthouse";
                              };
                        document.getElementById("elevatorBName").textContent=floorText;
                            console.log("current cabin "+ cabinBBB);
                            console.log(`The ${elevat} at floor ${fN}`);
                            console.log("The door is open ");
                            //console.log("cabin A "+cabinAAA);
                            doorOpenB=true;
                            openDoor(elevat);
                            
                        }, duration*1000);
                        }
                            }
                                
                            },
        down:(elevat,fN) =>{
                console.log("The evelator A on the way");
                console.log("current floor cabin "+ cabinAAA);
                let duration=fN-cabinAAA;
                console.log("Duration before is "+duration);
                if(elevat==="ElevatorA"){
                    if(fN<cabinAAA){
                        duration=cabinAAA-fN;
                        console.log("Duration after is "+duration);
                        }
                    setTimeout(() => {    
                                       // console.log("floor number current  "+ fN);
                        cabinAAA=fN;
                        console.log("current cabin "+ cabinAAA);
                        console.log(`The ${elevat} at floor ${fN}`);
                        console.log("The door is open ");
                      //console.log("cabin A "+cabinAAA);
                        doorOpen=true;
                        openDoor(elevat);
                                        
                    }, duration*1000);
                }else{
                    console.log("The evelator A on the way");
                    console.log("current floor cabin "+ cabinBBB);
                    let duration=fN-cabinBBB;
                    console.log("Duration before is "+duration);
                        if(elevat==="ElevatorA"){
                            if(fN<cabinBBB){
                                duration=cabinBBB-fN;
                                console.log("Duration after is "+duration);
                            }
                        setTimeout(() => {    
                            // console.log("floor number current  "+ fN);
                            cabinBBB=fN;
                            console.log("current cabin "+ cabinBBB);
                            console.log(`The ${elevat} at floor ${fN}`);
                            console.log("The door is open ");
                            //console.log("cabin A "+cabinAAA);
                            doorOpenB=true;
                            openDoor(elevat);
                            
                        }, duration*1000);
                    }
                            }
                    },
        elevatorA:{emergency:()=>{
                        if(cabinAAA>1){
                            cabinAAA =cabinAAA -1;
                            console.log(`Emergency call , the elvelator goes to ${cabinAAA}`);
                            doorClose("ElevatorA");
                            setTimeout(() => {
                                console.log(` the elvelator att the floor ${cabinAAA}`);
                                openDoor("ElevatorA");
                                
                            }, (cabinAAA-(cabinAAA-1))*1000);
                        }else{
                            cabinAAA =cabinAAA +1;
                            console.log(`Emergency call , the elvelator goes to ${cabinAAA}`);
                            doorClose("ElevatorA");
                            setTimeout(() => {
                                console.log(` the elvelator att the floor ${cabinAAA}`);
                                openDoor("ElevatorA");
                                
                            }, cabinAAA*1000);
                        }
                        },
                    reset:()=>{
                            openDoor("ElevatorA");
                            console.log("Elevatore A ,door is open");
                                },
                    goTo:(num)=>{
                        if(num>9){
                            console.log("The elevator B does't go to the Penthouse");
                        } else{
                        console.log("The evelator on the way");
                        let duration=(num)-cabinAAA;
                        console.log("Duration before is "+duration);
                        if(num<cabinAAA){
                            duration=cabinAAA-num;
                            console.log("Duration after is "+duration);
                        }
                            setTimeout(() => {
                            cabinAAA=num;
                            let floorText=`Evelator A on ${num}`;
                            if(cabinAAA===0){
                                floorText=" Evelator A on Looby";
                                
                                }else if(cabinAAA===-1){
                                floorText=" Evelator A on Basement";
                                }else if(cabinAAA===10){
                                floorText=" Evelator A on Penthouse";
                                    };
                            document.getElementById("elevatorAName").textContent=floorText;
                            console.log(`The evelator A on floor ${num}`);
                            
                            console.log( cabinAAA);
                            setFloorsName(cabinAAA);
                            openDoor("ElevatorA");
                        }, duration*1000);
                    }
                }
                }, 
        elevatorB:{emergency:()=>{
            if(cabinBBB>1){
                        cabinBBB =cabinBBB -1;
                        console.log(`Emergency call , the elvelator goes to ${cabinBBB}`);
                        doorClose("ElevatorB");
                        setTimeout(() => {
                            console.log(` the elvelator att the floor ${cabinBBB}`);
                            openDoor("ElevatorB");
                            
                        }, (cabinBBB-(cabinBBB-1))*1000);
                    }else{
                        cabinBBB =cabinBBB +1;
                        console.log(`Emergency call , the elvelator goes to ${cabinBBB}`);
                        doorClose("ElevatorB");
                        setTimeout(() => {
                            console.log(` the elvelator att the floor ${cabinBBB}`);
                            openDoor("ElevatorB");
                            
                        }, cabinBBB*1000);
                    }
                            },
                   reset:()=>{
                            openDoor("ElevatorB");
                            console.log("Elevatore B ,door is open");
                                },
                   goTo:(num)=>{
                            if(num<0){
                                console.log("The elevator B does't  go to the Basement");
                            } else{
                            console.log("The evelator on the way");
                                let duration=(num)-cabinBBB;
                                console.log("Duration before is "+duration);
                                if(num<cabinBBB){
                                    duration=cabinBBB-num;
                                    console.log("Duration after is "+duration);
                                }
                                setTimeout(() => {
                                    cabinBBB=num;
                                    let floorText=`Evelator B on ${num}`;
                                    if(cabinBBB===0){
                                        floorText=" Evelator A on Looby";
                                        
                                        }else if(cabinBBB===-1){
                                        floorText=" Evelator A on Basement";
                                        }else if(cabinBBB===10){
                                        floorText=" Evelator A on Penthouse";
                                            };
                                    document.getElementById("elevatorBName").textContent=floorText;
                                    console.log(`The evelator B on floor ${num}`);
                                    console.log( cabinBBB);
                                    setFloorsName(cabinBBB);
                                    openDoor("ElevatorB");
                                }, duration*1000);
                            }
                        }
                    }          
        }

    }   

    class Floors extends Building{
        constructor(cabinA,cabinB,floorNumb,doorOpen){
            super(cabinA,cabinB,floorNumb,doorOpen);
            
        }
    }
  
// Implementations of Building in our case 12 floors
let basement=new Building(-1);
let looby=new Building(0);
let floor1=new Building(1);
let floor2=new Building(2);
let floor3=new Building(3);
let floor4=new Building(4);
let floor5=new Building(5);
let floor6=new Building(6);
let floor7=new Building(7);
let floor8=new Building(8);
let floor9=new Building(9);
let penthouse=new Building(10);


let building=new Building;


 //************* Set codes to buttons */

 var allLi = document.querySelectorAll('.numFloor');
 allLi.forEach(li => {
     li.addEventListener("click",gotToSelected)
     //console.log(typeof li.textContent);
 });
 var allLiB = document.querySelectorAll('.numFloorB');
 allLiB.forEach(li => {
     li.addEventListener("click",gotToSelectedB)
     //console.log(typeof li.textContent);
 });
 

 function gotToSelected(e){
    const currentFloor=parseInt(e.target.textContent);
   const floorName= getFloorsName();
   //console.log(floorName.floor);
   floorName.floor.elevatorA.goTo(currentFloor);

    doorClose("ElevatorA");
} 
 function gotToSelectedB(e){
    const currentFloor=parseInt(e.target.textContent);
   const floorName= getFloorsName();
   //console.log(floorName.floor);
   floorName.floor.elevatorB.goTo(currentFloor);
    doorClose("ElevatorB");
} 

//  Move elevator with buttoms up & down   
 


//***************  Function to get floor name */ 
 function getFloorsName(){
    let floorName=document.getElementById("floorName").textContent;
    let myFloorName;
   
    if(floorName==="Floor 9"){
        myFloorName=floor9;
    }
     if(floorName==="Floor 8"){
       myFloorName=floor8;
    }
     if(floorName==="Floor 7"){
        myFloorName=floor7;
    }
     if(floorName==="Floor 6"){
        myFloorName=floor6;
    }
     if(floorName==="Floor 5"){
        myFloorName=floor5;
    }
     if(floorName==="Floor 4"){
        myFloorName=floor4;
    }
     if(floorName==="Floor 3"){
        myFloorName=floor3;
    }
     if(floorName==="Floor 2"){
        myFloorName=floor2;
    }
     if(floorName==="Floor 1"){
        myFloorName=floor1;
    }
     if(floorName==="Penthouse"){
        myFloorName=penthouse;
    }
     if(floorName==="Looby"){
        myFloorName=looby;
    }
     if(floorName==="Basement"){
        myFloorName=basement;
    }

    return myFloorName;
 }

 //***************  Function to set floor name to the label in Html */ 
function setFloorsName(fname){
    let floorName=document.getElementById("floorName").textContent;
    let myFloorName;
    console.log(floorName);
    
    if(fname===9){
        document.getElementById("floorName").textContent="Floor 9";
    }
     if(fname===8){
        document.getElementById("floorName").textContent="Floor 8";
    }
     if(fname===7){
        document.getElementById("floorName").textContent="Floor 7";
    }
     if(fname===6){
        document.getElementById("floorName").textContent="Floor 6";
    }
     if(fname===5){
        document.getElementById("floorName").textContent="Floor 5";
    }
     if(fname===4){
        document.getElementById("floorName").textContent="Floor 4";
    }
     if(fname===3){
        document.getElementById("floorName").textContent="Floor 3";
    }
     if(fname===2){
        document.getElementById("floorName").textContent="Floor 2";
    }
     if(fname===1){
        document.getElementById("floorName").textContent="Floor 1";
    }
     if(fname===10){
        document.getElementById("floorName").textContent="Penthouse";
    }
     if(fname===0){
        document.getElementById("floorName").textContent="Looby";
    }
     if(fname===-1){
        document.getElementById("floorName").textContent="Basement";
    }
   
    return floorName;
 }


//****************************** the buttons control ********************************/

// Function to go up Elevator A   */ 
function upElevA(){
   const myFloorName1= getFloorsName();
    
    if(!doorOpen){
        myFloorName1.floor.up("ElevatorA",myFloorName1.floorNumb);
    }else{
       console.log("The elevator is already on the same floor");
   }
}
//  Function to go down Elevator A   */ 
function downElevA(){
    const myFloorName1= getFloorsName();
    
    if(!doorOpen){
        myFloorName1.floor.up("ElevatorA",myFloorName1.floorNumb);
    }else{
       console.log("The elevator is already on the same floor");
   }
}



// Function to go up Elevator B   */ 
function upElevB(){
   const myFloorName1= getFloorsName();
    
    if(!doorOpenB){
        myFloorName1.floor.up("ElevatorB",myFloorName1.floorNumb);
        
    }else{
       console.log("The elevator is already on the same floor");
   }
}
//  Function to go down Elevator B   */ 
function downElevB(){
    const myFloorName1= getFloorsName();
    
    if(!doorOpenB){
        myFloorName1.floor.up("ElevatorB",myFloorName1.floorNumb);
    }else{
       console.log("The elevator is already on the same floor");
   }
}




//********************* The buttons as called the functons up and down */
btnUpElevA.addEventListener("click",upElevA);

btnDownElevA.addEventListener("click",downElevA);

btnUpElevB.addEventListener("click",upElevB);

btnDownElevB.addEventListener("click",downElevB);

//********************************************************************** */