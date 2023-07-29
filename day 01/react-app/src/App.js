import ExpenseItem from "./components/ExpenseItem";

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
    <ExpenseItem 
    title = {expenses[0].title}
    amount = {expenses[0].amount}
    date = {expenses[0].date}
    ></ExpenseItem>
    <ExpenseItem 
    title = {expenses[1].title}
    amount = {expenses[1].amount}
    date = {expenses[1].date}
    ></ExpenseItem>
    <ExpenseItem 
    title = {expenses[2].title}
    amount = {expenses[2].amount}
    date = {expenses[2].date}
    ></ExpenseItem>
    <ExpenseItem 
    title = {expenses[3].title}
    amount = {expenses[3].amount}
    date = {expenses[3].date}
    ></ExpenseItem>
   

    </div>
  );
}

export default App;
