const question = [{
    'que':'Which of the followings is a markup languages?',
    'a':'HTML',
    'b':'CSS',
    'c':'JAVASCRIPT',
    'd':'PHP',
    'Correct':'a'
  
  },
  {
      'que':'What year was javascript launched?',
      'a':'1996',
      'b':'1995',
      'c':'1994',
      'd':'None of the above',
      'Correct':'b'
    
    },
    {
      'que':'What does css stands for?',
      'a':'Hypertext markup languages',
      'b':'Cascading style sheat',
      'c':'joson object Notation',
      'd':'Helicopters Terminals Motorbotats Languages',
      'Correct':"b",
    
    },
    {
      'que':'Performs simple math for CPU??',
      'a':'DIMM',
      'b':'BUS',
      'c':'ALU',
      'd':'Register',
      'Correct':"c",
    
    },
    {
      'que':'Information travels between the components of the motherboard through?',
      'a':'Peripherals',
      'b':'Flash memory',
      'c':'CMOS',
      'd':'BUS',
      'Correct':"d",
    
    },
    {
      'que':'What is the process of dividing a disk into tracks and sectors?',
      'a':'Crashing',
      'b':'Tracking',
      'c':'Formatting',
      'd':'Dicing',
      'Correct':"c",
    
    },
    {
      'que':'File system is permanently stored in?',
      'a':'Device',
      'b':'Primary',
      'c':'Secondary',
      'd':'Direct Memory',
      'Correct':"c",
    
    },
    {
      'que':'Communication controls for the entire computer system?',
      'a':'Motherboard',
      'b':'Processor',
      'c':'Semi conductor',
      'd':'coprocessor',
      'Correct':"a",
    
    },
    {
      'que':'Which of the following is not an OS?',
      'a':'DOS',
      'b':'MUS',
      'c':'UNIX',
      'd':'None of the above',
      'Correct':"b",
    
    },
  
  ];
  let index=0;
   let total=question.length;
   let right=0,
      wrong=0;
      let answer;
   let option=document.querySelectorAll('.input')
  
  function loadQuestion(){
    if(index === total){
      return andquiz();
    }
    reset();
      let data = question[index];
      console.log(data);
      let h2=document.querySelector('h2');
      h2.innerText= `${index+1}${data.que}`;
      option[0].nextElementSibling.innerText=data.a;
      option[1].nextElementSibling.innerText=data.b;
      option[2].nextElementSibling.innerText=data.c;
      option[3].nextElementSibling.innerText=data.d;
  
       let button=document.querySelector('button')
      button.onclick = () =>{
        const data=question[index];
        const ans= getAnswer();
          if(ans == data.Correct){
            right++;
          } else{
            wrong++;
          }
          index++;
          loadQuestion();
          return;
      }
  
       let getAnswer = () =>{
         let answer
       option.forEach(
       (input) => {
          if(input.checked){
            answer = input.value;
          } 
          } 
         
           )
           
           return answer;   
     }
    
     
  }
  
   const reset=() =>{
    option.forEach(
      (input) =>{
        input.checked=false;
      }
    )
   }
  
   const andquiz =() =>{
    document.querySelector('.mainbox').innerHTML= `<h3> thank you for playing the quiz</h3> 
    <div style="text.align:center">
     <h2> ${right} correct / ${total} Total question </h3>
     </div>
    `
    
  
   }
  loadQuestion();