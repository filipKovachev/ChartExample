import React from 'react';
import products from '../src/products.json';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { process } from '@progress/kendo-data-query';
import { Chart, ChartLegend, ChartSeries, ChartSeriesItem, ChartSeriesLabels } from '@progress/kendo-react-charts';
  import "hammerjs";

  
function SecondGrid() {
  const [dataState, setDataState] = React.useState({skip: 0, take: 4});
  const [result, setResult] = React.useState(process(products, dataState));
  
  const labelContent = e => e.category;


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
          <Column field="inStock" title="In stock"/>

          
          </Grid>

         <Chart>
          <ChartSeries>
           <ChartSeriesItem type="donut" data={result} categoryField="price" field="inStock">
             <ChartSeriesLabels color="#fff" background="none" content={labelContent} />
           </ChartSeriesItem>
         </ChartSeries>
         <ChartLegend visible={false} />
         </Chart>

        </div>
      );
}

export default SecondGrid;