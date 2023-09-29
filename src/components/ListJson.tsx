import { Table } from "antd";
import React, { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import axios from "axios";

// const Collectiondata=[{
//     "CustomerNAme":"First Name",
//     "Site":"Bole",
//     "PhoneNumber":"0967847565",
//     "Email":"example@gmail.com",
//     "approved":"true"
//   },{
//     "CustomerNAme":"Metu",
//     "Site":"Piassa",
//     "PhoneNumber":"0967847565",
//     "Email":"sample@gmail.com",
//     "approved":"false"
//     }]

function DisplayList() {

    const [collectionData, setCollectionData] = useState([] as any[])
    const getallCcustomers = async () => {

        const token = localStorage.getItem('token')

        try {
            const response = await axios.get("http://198.199.80.48:3000/customer/all",{ headers: { 'Authorization': `Bearer ${token}` } });


            console.log(response);

            if (response) {
                setCollectionData(response.data.data);
            }
        } catch (e) { alert(e); }


    }

    useEffect(() => {

        getallCcustomers();
    }, []);



    return (
        <>
            <table className="tableOfCustomers" style={{
                fontFamily: 'Arial',
                width: '100%',
                margin: '40px',
            }} >
                <tr style={{

                    fontWeight: 'none',
                    color: 'grey',
                }}><th>Customer Name</th><th>Site</th><th>Phone Number</th><th>Email</th><th>Status</th></tr>
                {

                    collectionData.map((data, index) => {

                        return (
                            <>
                                <tr className="eachrow">
                                    <td key={index}>{data.customername}</td>
                                    <td key={index}>{data.site}</td>
                                    <td key={index}>{data.phone}</td>
                                    <td key={index}>{data.email}</td>
                                    <td key={index}>{data.approved === "true" ? (<button className="approvalaccept">Approved</button>) : (<button className="approvaldenied">Pending..</button>)}</td>
                                </tr>
                                <br />
                            </>
                        )
                    })

                }
            </table>
        </>
    );

}
export default DisplayList;