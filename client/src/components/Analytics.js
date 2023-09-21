import React from 'react';
import { Progress } from "antd";

const Analytics = ({ allTransection }) => {
    const totalTransaction = allTransection.length
    const totalIncomeTransactions = allTransection.filter(transaction => transaction.type === 'income');
    const totalExpenseTransactions = allTransection.filter(transaction => transaction.type === 'expense');
    const totalIncomePercent = (totalIncomeTransactions/totalTransaction) * 100;
    const totalExpensePercent = (totalExpenseTransactions/totalTransaction) *100;

  return (
    <>
       <div className="row">
           <div className="col-md-4">
             <div className="card">
                <div className="card-header">
                    Total Transaction : {totalTransaction}
                </div>
                <div className="card-body">
                    <h5>Income : {totalIncomeTransactions.length}</h5>
                    <h5>Expense : {totalExpenseTransactions.length}</h5>
                    <div>
                        <Progress type='circle' 
                             strokeColor={'green'} 
                             className='mx-2' 
                             percent={totalIncomePercent.toFixed(0)} 
                        />
                        <Progress type='circle' 
                             strokeColor={'red'} 
                             className='mx-2' 
                             percent={totalExpensePercent.toFixed(0)} 
                        />

                    </div>
                </div>
                
             </div>
           </div>

       </div>

        
    </>
  )
}

export default Analytics;