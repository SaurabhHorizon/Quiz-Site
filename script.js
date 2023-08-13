const quizDB = [
    {
        level: "Easy",
        question:"Q1:Which is first Indian cricket tournament?",
        a:"Pepsi Cup",
        b:"Bombay Triangular",
        c:"Bombay Series",
        d:"Oriental Cricket Club",
        ans:"ans2",
        u:'option2'
    },
    {
        level: "Easy",
        question:"Q2: Indian played first test match against ________ ?",
        a:"Pakistan",
        b:"England",
        c:"Australia",
        d:"South Africa",
        ans:"ans3",
        u:"option3"
    },
    {
        level: "Easy",
        question:"Q3: Currect Captain of India team",
        a:"Virat Kohli",
        b:"MS Dhoni",
        c:"Rohit Sharma",
        d:"Sachin",
        ans:"ans3"
        ,u:"option3"
    },
    {
        level: "Easy",
        question:"Q4: Who was first test captain of Indian cricket team ?",
        a:"Ajit Wadekar",
        b:"Vijay Hazare",
        c:" CK Nayudu",
        d:"Bapu Nadkarni",
        ans:"ans1",
        u:"option1"
    },
    {
        level: "Easy",
        question:"Q5: Who was first ODI captain of Indian cricket team ?",
        a:"Vijay Hazare",
        b:"Ajit Wadekar",
        c:"CK Nayudu",
        d:"Bapu Nadkarni",
        ans:"ans2"
        ,u:"option2"
    },


    {
        level: "Medium",
        question:"Q6: India won first ODI in ______ against _______",
        a:"None of these",
        b:"1975, East Africa",
        c:"1974, Pakistan",
        d:"1974, England",
        ans:"ans4"
        ,u:"option4"
    },
    {
        level: "Medium",
        question:"Q7: India got First Test Series Victory in _______ against _________",
        a:"1952 , England",
        b:"1952 , Australia",
        c:"None of these",
        d:"1952 , Pakistan",
        ans:"ans4"
        ,u:"option4"
    },
    {
        level: "Medium",
        question:"Q8: Which of the following is first Indian to score century in ODI ?",
        a:"Mohammad Nissar",
        b:"Sachin Tendulkar",
        c:"Imran Khan",
        d:"Kapil Dev",
        ans:"ans4"
        ,u:"option4"
    },
    {
        level: "Medium",
        question:"Q9: Which of the following is first Indian to score double century in ODI?",
        a:"Rohit Sharma",
        b:"Sachin Tendulkar",
        c:"Ravindra Jadeja",
        d:"MS Dhoni",
        ans:"ans2"
        ,u:"option2"
    },
    {
        level: "Medium",
        question:"Q10: Who recorded first hat-trick in Test Match?",
        a:"Harbhajan Singh",
        b:"Chetan Sharma",
        c:"Kapil Dev",
        d:"Bhuvneshvar Kumar",
        ans:"ans1"
        ,u:"option1"
    },
    {
        level: "Hard",
        question:"Q11: Which of the following is first Indian bowler to record hat-trick in ODI Match ?",
        a:"Harbhajan Singh",
        b:"Chetan Sharma",
        c:"Kapil Dev",
        d:"Bhuvneshvar Kumar",
        ans:"ans2"
        ,u:"option2"
    },
    {
        level: "Hard",
        question:"Q12: Who is first Indian Bowler to take all 10 wickets in an innings ?",
        a:"Anil Kumble",
        b:"Chetan Sharma",
        c:"Kapil Dev",
        d:"Bapu Nakarni",
        ans:"ans1"
        ,u:"option1"
    },
    {
        level: "Hard",
        question:"Q13: Who is First Indian Batsman to score two duck in same test match ?",
        a:"Vijay Hazare",
        b:"Saurav Ganguly",
        c:"Rahul Dravid",
        d:"Sachin Tendulkar",
        ans:"ans1"
        ,u:"option1"
    },
    {
        level: "Hard",
        question:"Q14: Which is first Indian bowler to take Wicket on the first bowl of carrier in ODI ?",
        a:"Ashish Nehra",
        b:"S Ramesh",
        c:"L Balaji",
        d:"R Ashwin",
        ans:"ans2"
        ,u:"option2"
    },
    {
        level: "Hard",
        question:"Q15: Who is first Indian batsman to score 20 ducks?",
        a:"Zaheer Khan",
        b:"Sachin Tendulkar",
        c:"Jawagal Shrinath",
        d:"Yuvraj Singh",
        ans:"ans2"
        ,u:"option2"
    }
];

const level=document.querySelector('.level');
const question=document.getElementById('question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit= document.querySelector('#check');
const next= document.querySelector('#next');
const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');
let questionCount=0;
let count=0;
const loadQuestion=() => {
    const questionlist=quizDB[questionCount];
    question.innerHTML= questionlist.question;
    level.innerHTML=questionlist.level;
    option1.innerHTML=questionlist.a;
    option2.innerText=questionlist.b;
    option3.innerText=questionlist.c;
    option4.innerText=questionlist.d;
};

loadQuestion();

const getCheckAnswer=()=>{
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
    return answer;
};
submit.addEventListener('click', () =>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizDB[questionCount].ans)
    {
        document.getElementById(quizDB[questionCount].u).style.color='green';
        document.querySelector('.inner-div').style.boxShadow="10px 20px 30px green";
        if(questionCount<=4)
        {
        count=count+2;
        }
        if(questionCount>4 && questionCount<=9)
        {
        count=count+3;
        }
        if(questionCount>9 && questionCount<=15)
        {
        count=count+5;
        }
    }
    else{
        document.querySelector('.inner-div').style.boxShadow="10px 20px 30px red";
    }
});
next.addEventListener('click', () =>{
    const checkedAnswer=getCheckAnswer();
    document.getElementById(quizDB[questionCount].u).style.color='black';
    questionCount++;
    if(questionCount<quizDB.length){
        loadQuestion();
    }
/// `  `  --> temp literals
else{
    showScore.innerHTML=`
        <h3 style="font-size:160% ; color='red'"> Score ${count}/${50} </h3>    
        <button class="bnt" onclick="location.reload()">Play Again </button>
    `;
    showScore.classList.remove('scoreArea');
}
});
