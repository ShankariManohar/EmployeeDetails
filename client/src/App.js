import React,{useEffect, useState} from 'react';
import './App.css';
import CustomersComponent from './component/CustomersComponent/CustomersComponent';
import HeaderComponent from './component/HeaderComponent/HeaderComponent';
import ZerostateComponent from './component/ZerostateComponent/ZerostateComponent'

const initialState = {
  customerData: [],
  isLoading:true,
  isError:true
}

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    fetch('./sample-data.json')
      .then(response => response.json())
      .then(data => {
        setCustomers(JSON.parse(JSON.stringify(data)));
        setLoading(false);
      })
      .catch(err => {
        console.log(err)
      });
  },[]);

  return(
    <React.Fragment>
      <div className="App-container">
        {customers && !loading ? (
          <>
            <HeaderComponent headerDetails={customers.companyInfo}/> 
            <CustomersComponent customers={customers.employees}/>
          </>
        ) : (<ZerostateComponent />)}
      </div>
      
    </React.Fragment>
  )

}
export default App;