function digging(count) {
    //function gets called when D and P clicked
    switch(count) {
      case 1:
        plant1.visible = true;
        break;    
      case 2:
        plant2.visible = true;
        break;  
      case 3:
        plant3.visible = true;
        break;    
      case 4:
        plant4.visible = true;
        break;         
      case 5 :
        plant5.visible = true;
        break;        
      case 6:
        plant6.visible = true;
        break;         
      default:
        break;
  
    }
  
}

function planting(count) {
    //function gets called when D and P clicked
    //console.log(count === 1 && plant1.visible);
    switch(count) { 
      case 1 :
        seed1.visible = true;
        break;    
      case 2:
        seed2.visible = true;
        break;  
      case 3:
        seed3.visible = true;
        break;    
      case 4:
        seed4.visible = true;
        break;         
      case 5 :
        seed5.visible = true;
        break;        
      case 6:
        seed6.visible = true;
        break;         
      default:
        break;
  
    }
  
}