import '@progress/kendo-theme-default/dist/all.css';
import './App.css';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import products from './products.json';

function App() {
  return (
    <div className="App">
      <Grid data={products}>
       
      <Column field="id" title="ID"/>
      <Column field="name" title="Name"/>
      <Column field="categoryName" title="Category Name" />
      <Column field="price" title="Price" />
      <Column field="inStock" title="In stock" />
    </Grid>
    </div>
  );
}

export default App;
