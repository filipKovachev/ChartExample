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
      category: "Dairy",
      value: 2,
    },
    {
      category: "Meat",
      value: 2,
    },
    {
      category: "Seafood",
      value: 4,
    },
    {
      category: "condiments",
      value: 1,
    },
    {
      category: "pastry",
      value: 1,
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
