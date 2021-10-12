import '@progress/kendo-theme-default/dist/all.css';
import './App.css';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartTitle,
} from "@progress/kendo-react-charts";
import products from './products.json';

function App() {



  const series = [
    {
      category: "Last Month",
      value: 10,
    },
    {
      category: "Current Moment",
      value: 98,
    },
  ];
  
  
  return (
    <div className="App">
      <Grid data={products}>
       
      <Column field="id" title="ID"/>
      <Column field="name" title="Name"/>
      <Column field="categoryName" title="Category Name" />
      <Column field="price" title="Price" />
      <Column field="inStock" title="In stock" />
      <Column field="lastMonth" title="In stock last month"/>
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
