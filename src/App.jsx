
import { useEffect, useMemo, useState } from 'react';
import './app.css'
import { Quiz } from './components/quiz/Quiz';
import { Timer } from './components/timer/Timer';
import { Start } from './components/start/Start';

function App() {
  const [questionNumber,setQuestionNumber] = useState(1);
  const [userName, setUserName] = useState(null)
  const [stop,setStop] = useState(false);
  const [earned, setEarned] = useState('$ 0');

  const data = [
    {
      id: 1,
      question: "რომელი ფერის გამო ეწოდა 'წითელ ზღვას' სახელი?",
      answers: [
        {
          text: "ლურჯი",
          correct: false,
        },
        {
          text: "წითელი",
          correct: true,
        },
        {
          text: "მუტნი",
          correct: false,
        },
        {
          text: "ყაყაჩოსფერი",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "რა დროს დაფრინავენ ჩიტები ჩვეულებრივზე უფრო დაბლა?",
      answers: [
        {
          text: "როცა წვიმას აპირებს",
          correct: true,
        },
        {
          text: "როცა კვერცხის დადებას აპირებენ",
          correct: false,
        },
        {
          text: "არასდროს",
          correct: false,
        },
        {
          text: "როცა პრიატნად არიან",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "სერიალ ცხელ ძაღლში ვინ და როგორ მოკლა შორენა სითათაშვილი?",
      answers: [
        {
          text: "კალდუნამ მზერით",
          correct: false,
        },
        {
          text: "კოშკამ შეფურთხებით",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "სკლინტამ ჩაქუჩით",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "ვინ არის გამოსახული ოცლარიან კუპიურაზე?",
      answers: [
        {
          text: "დიდოსტატის მარჯვენა",
          correct: false,
        },
        {
          text: "ილია ჭავჭავაძე",
          correct: true,
        },
        {
          text: "ჯაყოს ხიზნები",
          correct: false,
        },
        {
          text: "მაგდანას ლურჯა",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "ქართული ანდაზის მიხედვით სად უნდა უძრახო მოყვარეს?",
      answers: [
        {
          text: "კეფაში",
          correct: false,
        },
        {
          text: "ქვედა ტანში",
          correct: false,
        },
        {
          text: "პირში",
          correct: true,
        },
        {
          text: "არსად",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "კენიის დედაქალაქი?",
      answers: [
        {
          text: "ვენა",
          correct: false,
        },
        {
          text: "მაპუტუ",
          correct: false,
        },
        {
          text: "დელი",
          correct: false,
        },
        {
          text: "ნაირობი",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "როგორი იყო ზაქარია?",
      answers: [
        {
          text: "დიდი მემამული",
          correct: false,
        },
        {
          text: "მხარგრძელი",
          correct: true,
        },
        {
          text: "ტუჩ მოკლე და კუდა გრძელი",
          correct: false,
        },
        {
          text: "არაფრით გამორჩეული",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "დაასრულეთ გამონათქვამი: ცხოვრება ...",
      answers: [
        {
          text: "გამოცანაა",
          correct: false,
        },
        {
          text: "მშვენიერია",
          correct: false,
        },
        {
          text: "დედამოტყნულია",
          correct: false,
        },
        {
          text: "ყველა პასუხი სწორია",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "რამდენი ბაბინა აქ ფიატ 500 აბარტს?",
      answers: [
        {
          text: "1",
          correct: false,
        },
        {
          text: "5",
          correct: false,
        },
        {
          text: "4",
          correct: true,
        },
        {
          text: "საერთოდ არ აქ ბაბინა",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "რა არის ქალში მთავარი?",
      answers: [
        {
          text: "დუშა",
          correct: false,
        },
        {
          text: "ბუნება",
          correct: false,
        },
        {
          text: "ტრაკი და ძუძუ",
          correct: true,
        },
        {
          text: "შრომისმოყვარეობა",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "დაასახელეთ ცნობილი მკვლევარის და გეორაფის ჯეიმსის გვარი?",
      answers: [
        {
          text: "სუნი",
          correct: false,
        },
        {
          text: "ჩაჯმა",
          correct: false,
        },
        {
          text: "ატლასი",
          correct: false,
        },
        {
          text: "კუკი",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "რომელი აიფონის ჩუქების შემთხვევაში აკეთებენ გოგოები მინეტს?",
      answers: [
        {
          text: "7",
          correct: false,
        },
        {
          text: "აიფონ სე",
          correct: false,
        },
        {
          text: "12 პრო",
          correct: false,
        },
        {
          text: "ყველა პასუხი სწორია",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "საიდან იზომება ხის სიმაღლე?",
      answers: [
        {
          text: "ფესვებიდან",
          correct: true,
        },
        {
          text: "ფოთლებიდან",
          correct: false,
        },
        {
          text: "მეორე ხის ბოლოდან",
          correct: false,
        },
        {
          text: "ყველა პასუხი სწორია",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "დაასრულეთ ფრაზა ცხელი ძაღლიდან: ქალი ...?",
      answers: [
        {
          text: "ადამიანზე მეტია",
          correct: false,
        },
        {
          text: "ქალია",
          correct: false,
        },
        {
          text: "ადამიანი არ არის",
          correct: true,
        },
        {
          text: "ყველა პასუხი სწორია",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "რა მოუვიდა კუკარაჩას?",
      answers: [
        {
          text: "დააყაჩაღეს",
          correct: false,
        },
        {
          text: "მოტყნეს",
          correct: false,
        },
        {
          text: "მოკლეს",
          correct: true,
        },
        {
          text: "სახლი დაუწვეს",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "სად არის თამარის საფლავი?",
      answers: [
        {
          text: "სუფსაში",
          correct: true,
        },
        {
          text: "სამხრეთ საქართველოში",
          correct: false,
        },
        {
          text: "ტანძიაში",
          correct: false,
        },
        {
          text: "გელათში",
          correct: false,
        },
      ],
    },
  ];


  const moneyPyramid = useMemo(()=>
    [
      {id:1,amount:'$ 100'},
      {id:2,amount:'$ 200'},
      {id:3,amount:'$ 300'},
      {id:4,amount:'$ 500'},
      {id:5,amount:'$ 1000'},
      {id:6,amount:'$ 2000'},
      {id:7,amount:'$ 4000'},
      {id:8,amount:'$ 8000'},
      {id:9,amount:'$ 16000'},
      {id:10,amount:'$ 32000'},
      {id:11,amount:'$ 64000'},
      {id:12,amount:'$ 125000'},
      {id:13,amount:'$ 250000'},
      {id:14,amount:'$ 500000'},
      {id:15,amount:'$ 1000000'},
    ].reverse()
  ,[]) 

  useEffect(()=>{
    questionNumber > 1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber -1).amount);
  },[moneyPyramid,questionNumber])

  return (
    <div className="app" >
      {userName ? (
        <>
          <div className="main">
        {stop ? <h2 className='endText'>you earned:{earned}</h2> : (
          <>
            <div className="top">
              <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber}/></div>
            </div>
            <div className="bottom">
            <Quiz data={data} setStop={setStop}
           setQuestionNumber={setQuestionNumber}
           questionNumber={questionNumber}
           />
        </div>
          </>

        )}
        
      </div>
      <div className="pyramid">
        <ul className='moneyList'>
          {moneyPyramid.map((m)=>(
            <li className={questionNumber === m.id ? 'moneyListItem active' : 'moneyListItem'}>
            <span className='moneyListItemNumber'>{m.id}</span>
            <span className='moneyListItemAmount'>{m.amount}</span>
          </li>
          ))} 
        </ul>
      </div>
        </>
      ) : <Start setUserName={setUserName}/>}
      
    </div>
  );
}

export default App;
