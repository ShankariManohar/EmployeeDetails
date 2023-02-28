import React, { useState } from 'react';
import CustomerComponent from '../CustomerComponent/CustomerComponent';
import './CustomersComponent.css';

const columns = [
    { label: "ID", accessor: "id"},
    { label: "Name", accessor: "name"},
    { label: "Contact No", accessor: "contactNo"},
    { label: "Address", accessor: "address"}
];

const CustomersComponent = ({ customers }) => {
    const [search, setSearch] = useState('');
    const [filterData, setFilteredDate] = useState(customers);
    const [noData, setNoData] =  useState(false);
    
    const handleChange = (e) => {
        setSearch(e.target.value);
        setNoData(false);
        let updateTable = customers.filter(i => i.firstName.toLowerCase().includes(search.toLowerCase()));
        if (e.target.value === '') {
            setFilteredDate(customers);
        }
        else if(updateTable.length > 0){
            setFilteredDate(updateTable);
        }
        else{
            setNoData(true);
        }
        

    }

    return (
        <React.Fragment>
            <div className="Customers-searchContainer">
                <input className="Search-input" value={search} type="text" onChange={handleChange} placeholder="Search by name"/>
            </div>
            <table className="Customers-table">
                <thead>
                    <tr>
                        {columns.map((heading)=> <th key={heading.accessor}>{heading.label}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {noData ? "No search value available" : 
                    filterData.map(customer => <CustomerComponent key={customer.id} customer={customer} />)}
                    
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default CustomersComponent;