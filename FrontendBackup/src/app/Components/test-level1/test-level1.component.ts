import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { GetQuestionsService } from 'src/app/Services/get-questions.service';

@Component({
  selector: 'app-test-level1',
  templateUrl: './test-level1.component.html',
  styleUrls: ['./test-level1.component.css']
})
export class TestLevel1Component implements OnInit {

  testName
  showTest = true;
  level1;
  selectedOptions=[]
  
  totalMarks =0;

  countDown:Subscription;
  counter = 1200;
  tick = 1000;
  keypressCounter =0;

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
  showQ11 : boolean = false;
  showQ12 : boolean = false;
  showQ13 : boolean = false;
  showQ14 : boolean = false;
  showQ15 : boolean = false;
  showQ16 : boolean = false;
  showQ17 : boolean = false;
  showQ18 : boolean = false;
  showQ19 : boolean = false;
  showQ20 : boolean = false;




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

  checkq11o1=false
  checkq11o2=false
  checkq11o3=false
  checkq11o4=false

  checkq12o1=false
  checkq12o2=false
  checkq12o3=false
  checkq12o4=false

  checkq13o1=false
  checkq13o2=false
  checkq13o3=false
  checkq13o4=false

  checkq14o1=false
  checkq14o2=false
  checkq14o3=false
  checkq14o4=false

  checkq15o1=false
  checkq15o2=false
  checkq15o3=false
  checkq15o4=false

  checkq16o1=false
  checkq16o2=false
  checkq16o3=false
  checkq16o4=false

  checkq17o1=false
  checkq17o2=false
  checkq17o3=false
  checkq17o4=false

  checkq18o1=false
  checkq18o2=false
  checkq18o3=false
  checkq18o4=false

  checkq19o1=false
  checkq19o2=false
  checkq19o3=false
  checkq19o4=false

  checkq20o1=false
  checkq20o2=false
  checkq20o3=false
  checkq20o4=false

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
  addReview11 = false;
  addReview12 = false;
  addReview13 = false;
  addReview14 = false;
  addReview15 = false;
  addReview16 = false;
  addReview17 = false;
  addReview18 = false;
  addReview19 = false;
  addReview20 = false;

  constructor(private service:GetQuestionsService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.countDown = timer(0, this.tick)
    .subscribe(() =>{ --this.counter 
      if(this.counter == 0){
        this.submitTest();
      }
    });

  this.testName = this.route.snapshot.paramMap.get('test');
  this.service.getLevelOne({ "subject" : this.testName,"set" : "1"}).subscribe(
    data=>{
      this.level1 = data;
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
    this.showQ11 =false;
    this.showQ12 =false;
    this.showQ13 =false;
    this.showQ14 =false;
    this.showQ15 =false;
    this.showQ16 =false;
    this.showQ17 =false;
    this.showQ18 =false;
    this.showQ19 =false;
    this.showQ20 =false;
  
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
    this.showQ11 =false;
    this.showQ12 =false;
    this.showQ13 =false;
    this.showQ14 =false;
    this.showQ15 =false;
    this.showQ16 =false;
    this.showQ17 =false;
    this.showQ18 =false;
    this.showQ19 =false;
    this.showQ20 =false;
  
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
    this.showQ11 =false;
    this.showQ12 =false;
    this.showQ13 =false;
    this.showQ14 =false;
    this.showQ15 =false;
    this.showQ16 =false;
    this.showQ17 =false;
    this.showQ18 =false;
    this.showQ19 =false;
    this.showQ20 =false;
  
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
    this.showQ11 =false;
    this.showQ12 =false;
    this.showQ13 =false;
    this.showQ14 =false;
    this.showQ15 =false;
    this.showQ16 =false;
    this.showQ17 =false;
    this.showQ18 =false;
    this.showQ19 =false;
    this.showQ20 =false;
  
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
    this.showQ11 =false;
    this.showQ12 =false;
    this.showQ13 =false;
    this.showQ14 =false;
    this.showQ15 =false;
    this.showQ16 =false;
    this.showQ17 =false;
    this.showQ18 =false;
    this.showQ19 =false;
    this.showQ20 =false;
  
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
    this.showQ11 =false;
    this.showQ12 =false;
    this.showQ13 =false;
    this.showQ14 =false;
    this.showQ15 =false;
    this.showQ16 =false;
    this.showQ17 =false;
    this.showQ18 =false;
    this.showQ19 =false;
    this.showQ20 =false;
  
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
    this.showQ11 =false;
    this.showQ12 =false;
    this.showQ13 =false;
    this.showQ14 =false;
    this.showQ15 =false;
    this.showQ16 =false;
    this.showQ17 =false;
    this.showQ18 =false;
    this.showQ19 =false;
    this.showQ20 =false;
  
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
    this.showQ11 =false;
    this.showQ12 =false;
    this.showQ13 =false;
    this.showQ14 =false;
    this.showQ15 =false;
    this.showQ16 =false;
    this.showQ17 =false;
    this.showQ18 =false;
    this.showQ19 =false;
    this.showQ20 =false;
  
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
    this.showQ11 =false;
    this.showQ12 =false;
    this.showQ13 =false;
    this.showQ14 =false;
    this.showQ15 =false;
    this.showQ16 =false;
    this.showQ17 =false;
    this.showQ18 =false;
    this.showQ19 =false;
    this.showQ20 =false;
  
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
    this.showQ11 =false;
    this.showQ12 =false;
    this.showQ13 =false;
    this.showQ14 =false;
    this.showQ15 =false;
    this.showQ16 =false;
    this.showQ17 =false;
    this.showQ18 =false;
    this.showQ19 =false;
    this.showQ20 =false;
  
  }
  
  pressedQ11(){
    this.showQ1 =false;
    this.showQ2 =false;
    this.showQ3 =false;
    this.showQ4 =false;
    this.showQ5 =false;
    this.showQ6 =false;
    this.showQ7 =false;
    this.showQ8 =false;
    this.showQ9 =false;
    this.showQ10 =false;
    this.showQ11 =true;
    this.showQ12 =false;
    this.showQ13 =false;
    this.showQ14 =false;
    this.showQ15 =false;
    this.showQ16 =false;
    this.showQ17 =false;
    this.showQ18 =false;
    this.showQ19 =false;
    this.showQ20 =false;
  
  }
  
  
  pressedQ12(){
    this.showQ1 =false;
    this.showQ2 =false;
    this.showQ3 =false;
    this.showQ4 =false;
    this.showQ5 =false;
    this.showQ6 =false;
    this.showQ7 =false;
    this.showQ8 =false;
    this.showQ9 =false;
    this.showQ10 =false;
    this.showQ11 =false;
    this.showQ12 =true;
    this.showQ13 =false;
    this.showQ14 =false;
    this.showQ15 =false;
    this.showQ16 =false;
    this.showQ17 =false;
    this.showQ18 =false;
    this.showQ19 =false;
    this.showQ20 =false;
  
  }
  
  
  pressedQ13(){
    this.showQ1 =false;
    this.showQ2 =false;
    this.showQ3 =false;
    this.showQ4 =false;
    this.showQ5 =false;
    this.showQ6 =false;
    this.showQ7 =false;
    this.showQ8 =false;
    this.showQ9 =false;
    this.showQ10 =false;
    this.showQ11 =false;
    this.showQ12 =false;
    this.showQ13 =true;
    this.showQ14 =false;
    this.showQ15 =false;
    this.showQ16 =false;
    this.showQ17 =false;
    this.showQ18 =false;
    this.showQ19 =false;
    this.showQ20 =false;
  
  }
  
  
  pressedQ14(){
    this.showQ1 =false;
    this.showQ2 =false;
    this.showQ3 =false;
    this.showQ4 =false;
    this.showQ5 =false;
    this.showQ6 =false;
    this.showQ7 =false;
    this.showQ8 =false;
    this.showQ9 =false;
    this.showQ10 =false;
    this.showQ11 =false;
    this.showQ12 =false;
    this.showQ13 =false;
    this.showQ14 =true;
    this.showQ15 =false;
    this.showQ16 =false;
    this.showQ17 =false;
    this.showQ18 =false;
    this.showQ19 =false;
    this.showQ20 =false;
  
  }
  
  
  pressedQ15(){
    this.showQ1 =false;
    this.showQ2 =false;
    this.showQ3 =false;
    this.showQ4 =false;
    this.showQ5 =false;
    this.showQ6 =false;
    this.showQ7 =false;
    this.showQ8 =false;
    this.showQ9 =false;
    this.showQ10 =false;
    this.showQ11 =false;
    this.showQ12 =false;
    this.showQ13 =false;
    this.showQ14 =false;
    this.showQ15 =true;
    this.showQ16 =false;
    this.showQ17 =false;
    this.showQ18 =false;
    this.showQ19 =false;
    this.showQ20 =false;
  
  }
  
  pressedQ16(){
    this.showQ1 =false;
    this.showQ2 =false;
    this.showQ3 =false;
    this.showQ4 =false;
    this.showQ5 =false;
    this.showQ6 =false;
    this.showQ7 =false;
    this.showQ8 =false;
    this.showQ9 =false;
    this.showQ10 =false;
    this.showQ11 =false;
    this.showQ12 =false;
    this.showQ13 =false;
    this.showQ14 =false;
    this.showQ15 =false;
    this.showQ16 =true;
    this.showQ17 =false;
    this.showQ18 =false;
    this.showQ19 =false;
    this.showQ20 =false;
  
  }
  
  pressedQ17(){
    this.showQ1 =false;
    this.showQ2 =false;
    this.showQ3 =false;
    this.showQ4 =false;
    this.showQ5 =false;
    this.showQ6 =false;
    this.showQ7 =false;
    this.showQ8 =false;
    this.showQ9 =false;
    this.showQ10 =false;
    this.showQ11 =false;
    this.showQ12 =false;
    this.showQ13 =false;
    this.showQ14 =false;
    this.showQ15 =false;
    this.showQ16 =false;
    this.showQ17 =true;
    this.showQ18 =false;
    this.showQ19 =false;
    this.showQ20 =false;
  
  }
  
  
  pressedQ18(){
    this.showQ1 =false;
    this.showQ2 =false;
    this.showQ3 =false;
    this.showQ4 =false;
    this.showQ5 =false;
    this.showQ6 =false;
    this.showQ7 =false;
    this.showQ8 =false;
    this.showQ9 =false;
    this.showQ10 =false;
    this.showQ11 =false;
    this.showQ12 =false;
    this.showQ13 =false;
    this.showQ14 =false;
    this.showQ15 =false;
    this.showQ16 =false;
    this.showQ17 =false;
    this.showQ18 =true;
    this.showQ19 =false;
    this.showQ20 =false;
  
  }
  
  
  pressedQ19(){
    this.showQ1 =false;
    this.showQ2 =false;
    this.showQ3 =false;
    this.showQ4 =false;
    this.showQ5 =false;
    this.showQ6 =false;
    this.showQ7 =false;
    this.showQ8 =false;
    this.showQ9 =false;
    this.showQ10 =false;
    this.showQ11 =false;
    this.showQ12 =false;
    this.showQ13 =false;
    this.showQ14 =false;
    this.showQ15 =false;
    this.showQ16 =false;
    this.showQ17 =false;
    this.showQ18 =false;
    this.showQ19 =true;
    this.showQ20 =false;
  
  }
  
  
  pressedQ20(){
    this.showQ1 =false;
    this.showQ2 =false;
    this.showQ3 =false;
    this.showQ4 =false;
    this.showQ5 =false;
    this.showQ6 =false;
    this.showQ7 =false;
    this.showQ8 =false;
    this.showQ9 =false;
    this.showQ10 =false;
    this.showQ11 =false;
    this.showQ12 =false;
    this.showQ13 =false;
    this.showQ14 =false;
    this.showQ15 =false;
    this.showQ16 =false;
    this.showQ17 =false;
    this.showQ18 =false;
    this.showQ19 =false;
    this.showQ20 =true;
  
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
  
  keepChecked11(option){
    if(option == '1'){
      
    this.checkq11o1=true
    this.checkq11o2=false
    this.checkq11o3=false
    this.checkq11o4=false
    }
    else if(option == '2'){
      
      this.checkq11o1=false
      this.checkq11o2=true
      this.checkq11o3=false
      this.checkq11o4=false
      }
  
    else if(option == '3'){
    
      this.checkq11o1=false
      this.checkq11o2=false
      this.checkq11o3=true
      this.checkq11o4=false
      }
  
    else if(option == '4'){
  
      this.checkq11o1=false
      this.checkq11o2=false
      this.checkq11o3=false
      this.checkq11o4=true
      }
  }
  
  keepChecked12(option){
    if(option == '1'){
      
    this.checkq12o1=true
    this.checkq12o2=false
    this.checkq12o3=false
    this.checkq12o4=false
    }
    else if(option == '2'){
      
      this.checkq12o1=false
      this.checkq12o2=true
      this.checkq12o3=false
      this.checkq12o4=false
      }
  
    else if(option == '3'){
    
      this.checkq12o1=false
      this.checkq12o2=false
      this.checkq12o3=true
      this.checkq12o4=false
      }
  
    else if(option == '4'){
  
      this.checkq12o1=false
      this.checkq12o2=false
      this.checkq12o3=false
      this.checkq12o4=true
      }
  }
  
  keepChecked13(option){
    if(option == '1'){
      
    this.checkq13o1=true
    this.checkq13o2=false
    this.checkq13o3=false
    this.checkq13o4=false
    }
    else if(option == '2'){
      
      this.checkq13o1=false
      this.checkq13o2=true
      this.checkq13o3=false
      this.checkq13o4=false
      }
  
    else if(option == '3'){
    
      this.checkq13o1=false
      this.checkq13o2=false
      this.checkq13o3=true
      this.checkq13o4=false
      }
  
    else if(option == '4'){
  
      this.checkq13o1=false
      this.checkq13o2=false
      this.checkq13o3=false
      this.checkq13o4=true
      }
  }
  
  keepChecked14(option){
    if(option == '1'){
      
    this.checkq14o1=true
    this.checkq14o2=false
    this.checkq14o3=false
    this.checkq14o4=false
    }
    else if(option == '2'){
      
      this.checkq14o1=false
      this.checkq14o2=true
      this.checkq14o3=false
      this.checkq14o4=false
      }
  
    else if(option == '3'){
    
      this.checkq14o1=false
      this.checkq14o2=false
      this.checkq14o3=true
      this.checkq14o4=false
      }
  
    else if(option == '4'){
  
      this.checkq14o1=false
      this.checkq14o2=false
      this.checkq14o3=false
      this.checkq14o4=true
      }
  }
  
  keepChecked15(option){
    if(option == '1'){
      
    this.checkq15o1=true
    this.checkq15o2=false
    this.checkq15o3=false
    this.checkq15o4=false
    }
    else if(option == '2'){
      
      this.checkq15o1=false
      this.checkq15o2=true
      this.checkq15o3=false
      this.checkq15o4=false
      }
  
    else if(option == '3'){
    
      this.checkq15o1=false
      this.checkq15o2=false
      this.checkq15o3=true
      this.checkq15o4=false
      }
  
    else if(option == '4'){
  
      this.checkq15o1=false
      this.checkq15o2=false
      this.checkq15o3=false
      this.checkq15o4=true
      }
  }
  
  keepChecked16(option){
    if(option == '1'){
      
    this.checkq16o1=true
    this.checkq16o2=false
    this.checkq16o3=false
    this.checkq16o4=false
    }
    else if(option == '2'){
      
      this.checkq16o1=false
      this.checkq16o2=true
      this.checkq16o3=false
      this.checkq16o4=false
      }
  
    else if(option == '3'){
    
      this.checkq16o1=false
      this.checkq16o2=false
      this.checkq16o3=true
      this.checkq16o4=false
      }
  
    else if(option == '4'){
  
      this.checkq16o1=false
      this.checkq16o2=false
      this.checkq16o3=false
      this.checkq16o4=true
      }
  }
  
  keepChecked17(option){
    if(option == '1'){
      
    this.checkq17o1=true
    this.checkq17o2=false
    this.checkq17o3=false
    this.checkq17o4=false
    }
    else if(option == '2'){
      
      this.checkq17o1=false
      this.checkq17o2=true
      this.checkq17o3=false
      this.checkq17o4=false
      }
  
    else if(option == '3'){
    
      this.checkq17o1=false
      this.checkq17o2=false
      this.checkq17o3=true
      this.checkq17o4=false
      }
  
    else if(option == '4'){
  
      this.checkq17o1=false
      this.checkq17o2=false
      this.checkq17o3=false
      this.checkq17o4=true
      }
  }
  
  keepChecked18(option){
    if(option == '1'){
      
    this.checkq18o1=true
    this.checkq18o2=false
    this.checkq18o3=false
    this.checkq18o4=false
    }
    else if(option == '2'){
      
      this.checkq18o1=false
      this.checkq18o2=true
      this.checkq18o3=false
      this.checkq18o4=false
      }
  
    else if(option == '3'){
    
      this.checkq18o1=false
      this.checkq18o2=false
      this.checkq18o3=true
      this.checkq18o4=false
      }
  
    else if(option == '4'){
  
      this.checkq18o1=false
      this.checkq18o2=false
      this.checkq18o3=false
      this.checkq18o4=true
      }
  }
  
  keepChecked19(option){
    if(option == '1'){
      
    this.checkq19o1=true
    this.checkq19o2=false
    this.checkq19o3=false
    this.checkq19o4=false
    }
    else if(option == '2'){
      
      this.checkq19o1=false
      this.checkq19o2=true
      this.checkq19o3=false
      this.checkq19o4=false
      }
  
    else if(option == '3'){
    
      this.checkq19o1=false
      this.checkq19o2=false
      this.checkq19o3=true
      this.checkq19o4=false
      }
  
    else if(option == '4'){
  
      this.checkq19o1=false
      this.checkq19o2=false
      this.checkq19o3=false
      this.checkq19o4=true
      }
  }
  
  keepChecked20(option){
    if(option == '1'){
      
    this.checkq20o1=true
    this.checkq20o2=false
    this.checkq20o3=false
    this.checkq20o4=false
    }
    else if(option == '2'){
      
      this.checkq20o1=false
      this.checkq20o2=true
      this.checkq20o3=false
      this.checkq20o4=false
      }
  
    else if(option == '3'){
    
      this.checkq20o1=false
      this.checkq20o2=false
      this.checkq20o3=true
      this.checkq20o4=false
      }
  
    else if(option == '4'){
  
      this.checkq20o1=false
      this.checkq20o2=false
      this.checkq20o3=false
      this.checkq20o4=true
      }
      
  }
  submitTest(){
    for(var i =0; i < this.level1.length ; i++){
      if(this.selectedOptions[i]==this.level1[i].correct_option){
        this.totalMarks +=2;
      }
    }
    console.log(this.totalMarks);
    this.showTest = false;
  
    //Store the user ID in session storage as soon as user logs in and send it in the parameter below so its dynamic
    this.service.storeLevelOne({"user_id":"1","subject":this.testName,"level1_score":this.totalMarks}).subscribe(
      data=>{
        sessionStorage.setItem("report_id",data.toString());
      }
    )
  }
  goToLevel2(){
  // Add Router link here for level 2 component.
  //In Level 2 component while sending data to insert in db using storeLevel2 or storeLevel3 Service, send jSon in following format
  
  
  this.router.navigate(['testL2',{test:this.testName,si:true}])
  
  
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
