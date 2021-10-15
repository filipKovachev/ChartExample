import React from 'react';
import products from '../src/products.json';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { process } from '@progress/kendo-data-query';
import { Chart, ChartLegend, ChartSeries, ChartSeriesItem, ChartSeriesLabels } from '@progress/kendo-react-charts';
  import "hammerjs";


const allInEdit = products.map((item) =>
Object.assign(
  {
    inEdit: true,
  },
  item
 )
);

function SecondGrid() {
  const [dataState, setDataState] = React.useState({skip: 0, take: 4});
  const [result, setResult] = React.useState(process(allInEdit, dataState));
  const [data, setData] = React.useState(allInEdit);


  const labelContent = e => e.category;


  const onDataStateChange = (event) => {
    setDataState(event.dataState);
    setResult(process(allInEdit, event.dataState));
  }

  const itemChange = (e) => {
    let newData = data.map((item) => {
      if (item.id=== e.dataItem.id) {
        item[e.field || ""] = e.value;
      }

      return item;
    });
    setData(newData);
  };


    return (
      
        <div>
    
          <Grid 
           data={result}
           filterable={true}
           pageable={true}
           total={products.length}
           editField="inEdit"
           onItemChange={itemChange}
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
           <ChartSeriesItem type="donut" data={data} categoryField="price" field="inStock">
             <ChartSeriesLabels color="#fff" background="none" content={labelContent} />
           </ChartSeriesItem>
         </ChartSeries>
         <ChartLegend visible={false} />
         </Chart>

        </div>
      );
}

export default SecondGrid;