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
      category: "0-14",
      value: 0.2545,
    },
    {
      category: "15-24",
      value: 0.1552,
    },
    {
      category: "25-54",
      value: 0.4059,
    },
    {
      category: "55-64",
      value: 0.0911,
    },
    {
      category: "65+",
      value: 0.0933,
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
    </Grid>
    

    <div className="chart-container">
    <Chart>
    <ChartTitle text="Items in stock by quantity" />
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
