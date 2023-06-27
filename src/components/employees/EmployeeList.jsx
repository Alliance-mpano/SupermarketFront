import * as React from 'react';
import './style.css'
import TableLayout from '../common/TableLayout';


export default function MyTable(){

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
const data = rows.map((row, index)=> {
  return <tr key={index}>
    <td className="font" style={{ fontWeight: "bold"}}>{row.id}</td>
    <td className="font">{row.name}</td>
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
