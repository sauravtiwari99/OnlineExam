import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { GetQuestionsService } from 'src/app/Services/get-questions.service';

@Component({
  selector: 'app-test-level3',
  templateUrl: './test-level3.component.html',
  styleUrls: ['./test-level3.component.css']
})
export class TestLevel3Component implements OnInit {
  testName
  showTest = true;
  level3;
  selectedOptions=[]
  
  totalMarks =0;

  countDown:Subscription;
  counter = 1200;
  tick = 1000;
  

  showQ1 : boolean = false;
  showQ2 : boolean = false;
  showQ3 : boolean = false;
  showQ4 : boolean = false;
  showQ5 : boolean = false;
  showQ6 : boolean = false;
  showQ7 : boolean = false;
  showQ8 : boolean = false;
  showQ9 : boolean = false;
  showQ10 : boolean = false;





  checkq1o1=false
  checkq1o2=false
  checkq1o3=false
  checkq1o4=false

  checkq2o1=false
  checkq2o2=false
  checkq2o3=false
  checkq2o4=false

  checkq3o1=false
  checkq3o2=false
  checkq3o3=false
  checkq3o4=false

  checkq4o1=false
  checkq4o2=false
  checkq4o3=false
  checkq4o4=false

  checkq5o1=false
  checkq5o2=false
  checkq5o3=false
  checkq5o4=false

  checkq6o1=false
  checkq6o2=false
  checkq6o3=false
  checkq6o4=false

  checkq7o1=false
  checkq7o2=false
  checkq7o3=false
  checkq7o4=false

  checkq8o1=false
  checkq8o2=false
  checkq8o3=false
  checkq8o4=false

  checkq9o1=false
  checkq9o2=false
  checkq9o3=false
  checkq9o4=false

  checkq10o1=false
  checkq10o2=false
  checkq10o3=false
  checkq10o4=false
  keypressCounter: number = 0;

  addReview1 = false;
  addReview2 = false;
  addReview3 = false;
  addReview4 = false;
  addReview5 = false;
  addReview6 = false;
  addReview7 = false;
  addReview8 = false;
  addReview9 = false;
  addReview10 = false;
  constructor(private route: ActivatedRoute, private router: Router,private service:GetQuestionsService) { }

  ngOnInit(): void {
    this.countDown = timer(0, this.tick)
    .subscribe(() =>{ --this.counter 
      if(this.counter == 0){
        this.submitTest();
      }
    });

  this.testName = this.route.snapshot.paramMap.get('test');
  this.service.getLevelThree({ "subject" : this.testName,"set" : "1"}).subscribe(
    data=>{
      this.level3 = data;
    });
  }
  showSelectedOptions(){
    console.log(this.selectedOptions);
  }

pressedQ1(){
  this.showQ1 =true;
  this.showQ2 =false;
  this.showQ3 =false;
  this.showQ3 =false;
  this.showQ4 =false;
  this.showQ5 =false;
  this.showQ6 =false;
  this.showQ7 =false;
  this.showQ8 =false;
  this.showQ9 =false;
  this.showQ10 =false;

}

pressedQ2(){
  this.showQ1 =false;
  this.showQ2 =true;
  this.showQ3 =false;
  this.showQ4 =false;
  this.showQ5 =false;
  this.showQ6 =false;
  this.showQ7 =false;
  this.showQ8 =false;
  this.showQ9 =false;
  this.showQ10 =false;


}


pressedQ3(){
  this.showQ1 =false;
  this.showQ2 =false;
  this.showQ3 =true;
  this.showQ4 =false;
  this.showQ5 =false;
  this.showQ6 =false;
  this.showQ7 =false;
  this.showQ8 =false;
  this.showQ9 =false;
  this.showQ10 =false;


}


pressedQ4(){
  this.showQ1 =false;
  this.showQ2 =false;
  this.showQ3 =false;
  this.showQ4 =true;
  this.showQ5 =false;
  this.showQ6 =false;
  this.showQ7 =false;
  this.showQ8 =false;
  this.showQ9 =false;
  this.showQ10 =false;


}


pressedQ5(){
  this.showQ1 =false;
  this.showQ2 =false;
  this.showQ3 =false;
  this.showQ4 =false;
  this.showQ5 =true;
  this.showQ6 =false;
  this.showQ7 =false;
  this.showQ8 =false;
  this.showQ9 =false;
  this.showQ10 =false;


}

pressedQ6(){
  this.showQ1 =false;
  this.showQ2 =false;
  this.showQ3 =false;
  this.showQ4 =false;
  this.showQ5 =false;
  this.showQ6 =true;
  this.showQ7 =false;
  this.showQ8 =false;
  this.showQ9 =false;
  this.showQ10 =false;


}


pressedQ7(){
  this.showQ1 =false;
  this.showQ2 =false;
  this.showQ3 =false;
  this.showQ4 =false;
  this.showQ5 =false;
  this.showQ6 =false;
  this.showQ7 =true;
  this.showQ8 =false;
  this.showQ9 =false;
  this.showQ10 =false;


}

pressedQ8(){
  this.showQ1 =false;
  this.showQ2 =false;
  this.showQ3 =false;
  this.showQ4 =false;
  this.showQ5 =false;
  this.showQ6 =false;
  this.showQ7 =false;
  this.showQ8 =true;
  this.showQ9 =false;
  this.showQ10 =false;


}

pressedQ9(){
  this.showQ1 =false;
  this.showQ2 =false;
  this.showQ3 =false;
  this.showQ4 =false;
  this.showQ5 =false;
  this.showQ6 =false;
  this.showQ7 =false;
  this.showQ8 =false;
  this.showQ9 =true;
  this.showQ10 =false;
}

pressedQ10(){
  this.showQ1 =false;
  this.showQ2 =false;
  this.showQ3 =false;
  this.showQ4 =false;
  this.showQ5 =false;
  this.showQ6 =false;
  this.showQ7 =false;
  this.showQ8 =false;
  this.showQ9 =false;
  this.showQ10 =true;
}
keepChecked1(option){
  if(option == '1'){
    
  this.checkq1o1=true
  this.checkq1o2=false
  this.checkq1o3=false
  this.checkq1o4=false
  }
  else if(option == '2'){
    
    this.checkq1o1=false
    this.checkq1o2=true
    this.checkq1o3=false
    this.checkq1o4=false
    }

  else if(option == '3'){
  
    this.checkq1o1=false
    this.checkq1o2=false
    this.checkq1o3=true
    this.checkq1o4=false
    }

  else if(option == '4'){

    this.checkq1o1=false
    this.checkq1o2=false
    this.checkq1o3=false
    this.checkq1o4=true
    }
}


keepChecked2(option){
  if(option == '1'){
    
  this.checkq2o1=true
  this.checkq2o2=false
  this.checkq2o3=false
  this.checkq2o4=false
  }
  else if(option == '2'){
    
    this.checkq2o1=false
    this.checkq2o2=true
    this.checkq2o3=false
    this.checkq2o4=false
    }

  else if(option == '3'){
  
    this.checkq2o1=false
    this.checkq2o2=false
    this.checkq2o3=true
    this.checkq2o4=false
    }

  else if(option == '4'){

    this.checkq2o1=false
    this.checkq2o2=false
    this.checkq2o3=false
    this.checkq2o4=true
    }
}

keepChecked3(option){
  if(option == '1'){
    
  this.checkq3o1=true
  this.checkq3o2=false
  this.checkq3o3=false
  this.checkq3o4=false
  }
  else if(option == '2'){
    
    this.checkq3o1=false
    this.checkq3o2=true
    this.checkq3o3=false
    this.checkq3o4=false
    }

  else if(option == '3'){
  
    this.checkq3o1=false
    this.checkq3o2=false
    this.checkq3o3=true
    this.checkq3o4=false
    }

  else if(option == '4'){

    this.checkq3o1=false
    this.checkq3o2=false
    this.checkq3o3=false
    this.checkq3o4=true
    }
}

keepChecked4(option){
  if(option == '1'){
    
  this.checkq4o1=true
  this.checkq4o2=false
  this.checkq4o3=false
  this.checkq4o4=false
  }
  else if(option == '2'){
    
    this.checkq4o1=false
    this.checkq4o2=true
    this.checkq4o3=false
    this.checkq4o4=false
    }

  else if(option == '3'){
  
    this.checkq4o1=false
    this.checkq4o2=false
    this.checkq4o3=true
    this.checkq4o4=false
    }

  else if(option == '4'){

    this.checkq4o1=false
    this.checkq4o2=false
    this.checkq4o3=false
    this.checkq4o4=true
    }
}

keepChecked5(option){
  if(option == '1'){
    
  this.checkq5o1=true
  this.checkq5o2=false
  this.checkq5o3=false
  this.checkq5o4=false
  }
  else if(option == '2'){
    
    this.checkq5o1=false
    this.checkq5o2=true
    this.checkq5o3=false
    this.checkq5o4=false
    }

  else if(option == '3'){
  
    this.checkq5o1=false
    this.checkq5o2=false
    this.checkq5o3=true
    this.checkq5o4=false
    }

  else if(option == '4'){

    this.checkq5o1=false
    this.checkq5o2=false
    this.checkq5o3=false
    this.checkq5o4=true
    }
}

keepChecked6(option){
  if(option == '1'){
    
  this.checkq6o1=true
  this.checkq6o2=false
  this.checkq6o3=false
  this.checkq6o4=false
  }
  else if(option == '2'){
    
    this.checkq6o1=false
    this.checkq6o2=true
    this.checkq6o3=false
    this.checkq6o4=false
    }

  else if(option == '3'){
  
    this.checkq6o1=false
    this.checkq6o2=false
    this.checkq6o3=true
    this.checkq6o4=false
    }

  else if(option == '4'){

    this.checkq6o1=false
    this.checkq6o2=false
    this.checkq6o3=false
    this.checkq6o4=true
    }
}

keepChecked7(option){
  if(option == '1'){
    
  this.checkq7o1=true
  this.checkq7o2=false
  this.checkq7o3=false
  this.checkq7o4=false
  }
  else if(option == '2'){
    
    this.checkq7o1=false
    this.checkq7o2=true
    this.checkq7o3=false
    this.checkq7o4=false
    }

  else if(option == '3'){
  
    this.checkq7o1=false
    this.checkq7o2=false
    this.checkq7o3=true
    this.checkq7o4=false
    }

  else if(option == '4'){

    this.checkq7o1=false
    this.checkq7o2=false
    this.checkq7o3=false
    this.checkq7o4=true
    }
}

keepChecked8(option){
  if(option == '1'){
    
  this.checkq8o1=true
  this.checkq8o2=false
  this.checkq8o3=false
  this.checkq8o4=false
  }
  else if(option == '2'){
    
    this.checkq8o1=false
    this.checkq8o2=true
    this.checkq8o3=false
    this.checkq8o4=false
    }

  else if(option == '3'){
  
    this.checkq8o1=false
    this.checkq8o2=false
    this.checkq8o3=true
    this.checkq8o4=false
    }

  else if(option == '4'){

    this.checkq8o1=false
    this.checkq8o2=false
    this.checkq8o3=false
    this.checkq8o4=true
    }
}

keepChecked9(option){
  if(option == '1'){
    
  this.checkq9o1=true
  this.checkq9o2=false
  this.checkq9o3=false
  this.checkq9o4=false
  }
  else if(option == '2'){
    
    this.checkq9o1=false
    this.checkq9o2=true
    this.checkq9o3=false
    this.checkq9o4=false
    }

  else if(option == '3'){
  
    this.checkq9o1=false
    this.checkq9o2=false
    this.checkq9o3=true
    this.checkq9o4=false
    }

  else if(option == '4'){

    this.checkq9o1=false
    this.checkq9o2=false
    this.checkq9o3=false
    this.checkq9o4=true
    }
}

keepChecked10(option){
  if(option == '1'){
    
  this.checkq10o1=true
  this.checkq10o2=false
  this.checkq10o3=false
  this.checkq10o4=false
  }
  else if(option == '2'){
    
    this.checkq10o1=false
    this.checkq10o2=true
    this.checkq10o3=false
    this.checkq10o4=false
    }

  else if(option == '3'){
  
    this.checkq10o1=false
    this.checkq10o2=false
    this.checkq10o3=true
    this.checkq10o4=false
    }

  else if(option == '4'){

    this.checkq10o1=false
    this.checkq10o2=false
    this.checkq10o3=false
    this.checkq10o4=true
    }
}
submitTest(){
  console.log("in submit")
  for(var i =0; i < this.level3.length ; i++){
    if(this.selectedOptions[i]==this.level3[i].correct_option){
      this.totalMarks +=2;
    }
  }
  console.log(this.totalMarks);
  this.showTest = false;
  console.log(this.showTest)
  //Store the user ID in session storage as soon as user logs in and send it in the parameter below so its dynamic
  this.service.storeLevelThree({"report_id":sessionStorage.getItem("report_id"),"level3_score":this.totalMarks}).subscribe(
    data=>{
      
    }
  )
}

endTest(){
  window.close();
}

@HostListener('window:keyup', ['$event'])
keyEvent(event: KeyboardEvent) {
   console.log(event);
   

   this.keypressCounter+=1;
   if(this.keypressCounter == 1){
     alert("If you press again test will be closed");
   }
   else if(this.keypressCounter == 2){
    alert("You pressed key twice, test will be auto submitted now");
    this.submitTest();
   }
}

@HostListener('window:contextmenu', ['$event'])
onRightClick(event) {
  event.preventDefault();
}
    
  ngOnDestroy(){
    this.countDown=null;
  }


}
