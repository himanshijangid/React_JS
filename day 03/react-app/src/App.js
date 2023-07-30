import Expenses from './components/Expenses/Expenses';
import React from 'react';



const App = () => {
  const expenses = [
    {id : 'e1' ,title : 'Rice' , amount : 100, date : new Date(2023,7,26)},
    {id : 'e2' ,title : 'Wheat' , amount : 200, date : new Date(2023,8,27)},
    {id : 'e3' ,title : 'Sugar' , amount : 300, date : new Date(2023,9,28)},
    {id : 'e4' ,title : 'Oil' , amount : 400, date : new Date(2023,10,29)},
    {id : 'e5' ,title : 'Ghee' , amount : 500, date : new Date(2023,11,30)}
  ]
  
  return (
    <div>
   
    <Expenses items = {expenses} />
   

    </div>
  );
}

export default App;
