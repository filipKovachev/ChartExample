import React from 'react';
import products from '../src/products.json';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { process } from '@progress/kendo-data-query';


function SecondGrid() {
  const [dataState, setDataState] = React.useState({skip: 0, take: 2});
  const [result, setResult] = React.useState(process(products, dataState));

 const onDataStateChange = (event) => {
     setDataState(event.dataState);
     setResult(process(products, event.dataState))
 }
    return (
      
        <div>
    
          <Grid 
           data={result}
           filterable={true}
           pageable={true}
           total={products.length}
           onDataStateChange={onDataStateChange}
           {...dataState}
          >
           
          <Column field="id" title="ID"/>
          <Column field="name" title="Name"/>
          <Column field="categoryName" title="Category Name"/>
          <Column field="price" title="Price" />
          <Column field="inStock" title="In stock (Click on cell to update the pie chart)"/>
        </Grid>
        
    
        <div className="chart-container">
        </div>
    
        </div>
      );
}

export default SecondGrid;