import React from 'react';
import CustomerComponent from '../CustomerComponent/CustomerComponent';
import './CustomersComponent.css';

const CustomersComponent = ({ customers }) => {
    // const [search, setSearch] = useState('');
    // const [filterData, setFilteredDate] = useState(customers);
    // const handleChange = (e) => {
    //     setSearch(e.target.value);
    //     let updateTable = customers.filter(i => i.firstName.toLowerCase().includes(search.toLowerCase()))
    //     setFilteredDate(updateTable);
    // }
    return (
        <React.Fragment>
            {/* <input value={search} type="text" onChange={handleChange} /> */}
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
                    {customers.map(customer => <CustomerComponent key={customer.id} customer={customer} />)}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default CustomersComponent;