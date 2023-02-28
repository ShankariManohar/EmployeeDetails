import React, { useState } from 'react';
import CustomerComponent from '../CustomerComponent/CustomerComponent';
import './CustomersComponent.css';

const CustomersComponent = ({ customers }) => {
    const [search, setSearch] = useState('');
    const [filterData, setFilteredDate] = useState(customers);
    const handleChange = (e) => {
        setSearch(e.target.value);
        let updateTable = customers.filter(i => i.firstName.toLowerCase().includes(search.toLowerCase()));
        if (e.target.value === '') {
            setFilteredDate(customers);
        }
        else {
            setFilteredDate(updateTable);
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
                        <th>ID</th>
                        <th>Name</th>
                        <th>Contact No</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {filterData.map(customer => <CustomerComponent key={customer.id} customer={customer} />)}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default CustomersComponent;