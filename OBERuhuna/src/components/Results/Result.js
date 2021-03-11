import "ka-table/style.scss";
import './style.scss';
import React, { useState } from 'react';
import { Route, BrowserRouter,Link,Switch} from 'react-router-dom';
import { CSVLink } from 'react-csv';
import { kaReducer, Table } from 'ka-table';
import { hideNewRow, saveNewRow, showNewRow } from 'ka-table/actionCreators';
import { DataType,EditingMode } from 'ka-table/enums';
import { kaPropsUtils } from 'ka-table/utils';
import Logo from './logo.jpg';
const dataArray = [
  { id: 1, name: 'EG/2017/3000', lo1: 20, lo2: 15 ,lo3: 20, lo4: 15 ,total:70},
  { id: 2, name: 'EG/2017/3001', lo1: 15, lo2: 15,lo3: 10, lo4: 15 ,total:55  },
  { id: 3, name: 'EG/2017/3002',lo1: 18, lo2: 12, lo3: 15, lo4: 10,total:55 },
  { id: 4, name: 'EG/2017/3003', lo1: 25, lo2: 10 ,lo3: 20, lo4: 15,total:70 },
  { id: 5, name: 'EG/2017/3004', lo1: 25, lo2: 25 ,lo3: 10, lo4: 10,total:70 },
  { id: 6, name: 'EG/2017/3005', lo1: 15, lo2: 15,lo3: 20, lo4: 15,total:65  },
];

let maxValue = Math.max(...dataArray.map(i => i.id));
const generateNewId = () => {
  maxValue++;
  return maxValue;
};





const tablePropsInit = {
  columns: [
    { key: 'name', title: 'REG NO', dataType: DataType.String, style: { width: '30%' } },
    { key: 'lo1', title: 'LO1(25)', dataType: DataType.Number, style: { width: '10%' } },
    { key: 'lo2', title: 'LO2(30)', dataType: DataType.Number, style: { width: '10%' }},
    { key: 'lo3', title: 'LO3(25)', dataType: DataType.Number, style: { width: '10%' }},
    { key: 'lo4', title: 'LO4(20)', dataType: DataType.Number, style: { width: '10%' }},
    { key: 'total', title: 'TOTAL', dataType: DataType.Number, style: { width: '10%' }},

    {
      key: 'addColumn',
      style: {width: 53}
    },
  ],

  data: dataArray,


  rowKeyField: 'id',
};




const Result = () => {
  const [tableProps, changeTableProps] = useState(tablePropsInit);
  const dispatch = (action) => {
    changeTableProps((prevState) => kaReducer(prevState, action));
  };

  

  return (
    <div className='add-row-demo'>
      <div class= "header">
          <img src={Logo} alt ='weblogo' />
          <h1>
              <Link className="header" to='/'  >
                  Faculty of Engineering University of Ruhuna
              </Link>
          </h1>
                            
          <h2>Outcome Based Education System</h2>

        </div>


<div style={{
        marginBottom: 20,
        marginLeft: 20
      }}>
        <CSVLink
          data={kaPropsUtils.getData(tableProps)}
          headers={tableProps.columns.map(c => ({ label: c.title, key: c.key }))}
          filename='Result Sheet.csv'>
          Download .csv
        </CSVLink>
      </div>
      <Table
        {...tableProps}
      
        dispatch={dispatch}
      />
    </div>
  );
};

export default Result;