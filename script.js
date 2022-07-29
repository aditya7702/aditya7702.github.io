const start_btn=document.querySelector(".start_quiz");
const quiz_box=document.querySelector(".quiz_box");
const que_text=document.querySelector(".que_text");
const options_box=document.querySelector(".options");
const next_btn=document.querySelector(".next-btn");
const mark_check=`<i class="fa fa-check"></i>`;
const mark_wrong=`<i class="fa fa-times"></i>`;
const count_que = document.querySelector(".quiz-footer .count_que");
const total_q=document.querySelector(".quiz_footer .total_que");
const result_box=document.querySelector(".result-box");
const total_que_r=document.querySelector(".total-que span");
const right_ans_r=document.querySelector(".right-ans span");
const wrong_ans_r=document.querySelector(".wrong-ans span");
const percentage=document.querySelector(".percentage span");
const again_quiz = document.querySelector(".result-footer .again-quiz");
const exit = document.querySelector(".result-footer .exit");






start_btn.onclick=()=>{
    quiz_box.classList.remove("inactive");
    start_btn.classList.add("inactive");
}
total_que_r.innerText=questions.length;
//total_q.innerText=questions.length;
var que_index=0;
//count_que.innerText=que_index+1;
var right_answers=0;
var wrong_answers=0;
ShowQuestion(que_index);
function ShowQuestion(que_index){
    que_text.innerText =questions[que_index].num+" . "+ questions[que_index].question;
var option_statement="";
for(var i=0; i<questions[que_index].options.length; i++)
{
    option_statement += `<div class="option">${questions[que_index].options[i]}</div>`;
}

options_box.innerHTML=option_statement;
var Alloptions= options_box.querySelectorAll(".option");
    for(var j=0;j<Alloptions.length;j++)
    {
        Alloptions[j].setAttribute("onclick","useranswer(this)");
    }
    next_btn.classList.add("inactive");
}
next_btn.onclick=()=>{
    que_index++;
     
    if(questions.length>que_index){
        count_que.innerText=que_index+1;
        ShowQuestion(que_index);

    }else{
        console.log("You have finished test");
        quiz_box.classList.add("inactive");
        result_box.classList.remove("inactive"); 
        right_ans_r.innerText=right_answers;
       // wrong_ans_r.innerText=wrong _answers;
       wrong_ans_r.innerText=wrong_answers;
       percentage.innerText = ((right_answers*100)/questions.length).toFixed(2)+"%";
       
    }
    if(questions.length-1==que_index){
        next_btn.innerText="Finish";
    }

}
function useranswer(answer)
{
    console.log(answer.innerText);
    let userans=answer.innerText;
    let correctans=questions[que_index].answer;
    var AllOptions2=options_box.querySelectorAll(".option");
    next_btn.classList.remove("inactive");
    if(userans==correctans){
        console.log("%c right answer","color:green");
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend",mark_check);
        right_answers++;

    }
    else
    {
        console.log("%c wrong answer","color:red");
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend",mark_wrong);
        wrong_answers++;
        for(var i=0;i<AllOptions2.length;i++)
        {
           if( AllOptions2[i].innerText==correctans)
           {
            AllOptions2[i].classList.add("correct");
            AllOptions2[i].insertAdjacentHTML("beforeend",mark_check);
           }
        }
    }
   
    for(var j=0; j<AllOptions2.length; j++){
        AllOptions2[j].classList.add("disabled");
    }

}
again_quiz.onclick=()=>{
    quiz_box.classList.remove("inactive");
    result_box.classList.add("inactive");
    reset();

}

exit.onclick=()=>{
    start_btn.classList.remove("inactive");
    result_box.classList.add("inactive");

   reset();
}

function reset(){
    que_index = 0;
    right_answers = 0;
    wrong_answers = 0;
    next_btn.innerText = "Next Question";
   count_que.innerText = que_index+1;
   ShowQuestion(que_index);
}






