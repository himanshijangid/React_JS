import ExpenseItem from "./components/ExpenseItem";
import Expenses from './components/Expenses';

const expenses = [
  {id : 'e1' ,title : 'Rice' , amount : 100, date : new Date(2023,7,26)},
  {id : 'e2' ,title : 'Wheat' , amount : 200, date : new Date(2023,8,27)},
  {id : 'e3' ,title : 'Sugar' , amount : 300, date : new Date(2023,9,28)},
  {id : 'e4' ,title : 'Oil' , amount : 400, date : new Date(2023,10,29)},
  {id : 'e5' ,title : 'Ghee' , amount : 500, date : new Date(2023,11,30)}
]

function App() {

  const para =
   document.createElement("p");
  para.textContent = 'This is also visible.'
  document.getElementById('root').append(para);
  return (
    <div>
    <h1>Let's get started</h1>
    <Expenses items = {expenses} />
   

    </div>
  );
}

export default App;
