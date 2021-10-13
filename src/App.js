import '@progress/kendo-theme-default/dist/all.css';
import './App.css';
import products from './products.json';

import React, { useState } from 'react';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartTitle,
} from "@progress/kendo-react-charts";


function App() {

  let [data, setData] = useState(0);
  const DataContext = React.createContext(products);


  let series = [
    {
      category: "Last Month",
      value: 10,
    },
    {
      category: "Current Moment",
      value: data,
    },
  ];

  const CustomCell = (props) => {
    const field = props.field || "";
    const value = props.dataItem[field];
    return (
      <td
      className="hover"
      onClick={() => setData( data = value)}
      >
       {value}
      </td>
    );
  };


  <DataContext.Provider>
    <CustomCell
    myProp={products}
    />
  </DataContext.Provider>

  return (
    <div className="App">
      <Grid data={products}>
       
      <Column field="id" title="ID"/>
      <Column field="name" title="Name"/>
      <Column field="categoryName" title="Category Name"/>
      <Column field="price" title="Price" />
      <Column field="inStock" title="In stock (Click on cell to update the pie chart)"  cell={CustomCell}/>
    </Grid>
    

    <div className="chart-container">
    <Chart>
    <ChartTitle text="Items in stock In comparison with last month" />
    <ChartLegend position="bottom" />
    <ChartSeries>
      <ChartSeriesItem
        type="pie"
        data={series}
        field="value"
        categoryField="category"

      />
    </ChartSeries>
    </Chart>
    </div>

    </div>
  );
}

export default App;