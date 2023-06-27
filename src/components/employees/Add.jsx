import * as React from 'react';
import { useEffect, useState } from 'react';
import './style.css'
import TableLayout from '../common/TableLayout';
import axios from 'axios';


export default function Add(){
const [myData, setMyData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/employees/');
        const data = await response.data;
        console.log(data)
        setMyData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
//   const records = JSON.parse(myData)
//   console.log(myData.json())
  const columns = [
    {
      label: 'ID',
    },
    {
      
      label: 'Name',
    },
    {
      
      label: 'NID',
    },
    {
      label: 'Phone',
    },
    {
      
      label: 'Email',
    },
    {
      
      label: 'Department',
    },
    {
      label: 'Position',
    },
    {
      
      label: 'Manufacturer',
    },
    {
      
      label: 'Model',
    },
    {
      label: "Serial Number"
    }
  ];

const rows = [
  {id:1,name: "Ishimwe Samanta", nid: "12000710913307", phone: "0788888888", email: "samanta@gmail.com", department: "Human resource", position: "Manager", manufacturer: "HP", model: "Envy", serialNumber: "3400" },
  {id:1,name: "Ishimwe Samanta", nid: "12000710913307", phone: "0788888888", email: "samanta@gmail.com", department: "Human resource", position: "Manager", manufacturer: "HP", model: "Envy", serialNumber: "3400" },
  {id:1,name: "Ishimwe Samanta", nid: "12000710913307", phone: "0788888888", email: "samanta@gmail.com", department: "Human resource", position: "Manager", manufacturer: "HP", model: "Envy", serialNumber: "3400" },
  {id:1,name: "Ishimwe Samanta", nid: "12000710913307", phone: "0788888888", email: "samanta@gmail.com", department: "Human resource", position: "Manager", manufacturer: "HP", model: "Envy", serialNumber: "3400" },
  {id:1,name: "Ishimwe Samanta", nid: "12000710913307", phone: "0788888888", email: "samanta@gmail.com", department: "Human resource", position: "Manager", manufacturer: "HP", model: "Envy", serialNumber: "3400" },
  {id:1,name: "Ishimwe Samanta", nid: "12000710913307", phone: "0788888888", email: "samanta@gmail.com", department: "Human resource", position: "Manager", manufacturer: "HP", model: "Envy", serialNumber: "3400" },
];
const data = myData.map((row, index)=> {
  return <tr key={index}>
    <td className="font" style={{ fontWeight: "bold"}}>{row.id}</td>
    <td className="font">{row.firstName} {row.lastName}</td>
    <td className="font">{row.nid}</td>
    <td className="font">{row.phone}</td>
    <td className="font">{row.email}</td>
    <td className="font">{row.department}</td>
    <td className="font">{row.position}</td>
    <td className="font">{row.manufacturer}</td>
    <td className="font">{row.model}</td>
    <td className="font">{row.serialNumber}</td>
  </tr>
})
return(
  <TableLayout  columns={columns} rowsContent={data}/>
)
}
