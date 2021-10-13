import React from 'react';
import products from '../src/products.json';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { Circle as CircleGeometry } from "@progress/kendo-drawing/geometry";
import { Layout, Text } from "@progress/kendo-drawing";
import { process } from '@progress/kendo-data-query';
import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
  } from "@progress/kendo-react-charts";
  import "hammerjs";

  

function SecondGrid() {
  const [dataState, setDataState] = React.useState({skip: 0, take: 4});
  const [result, setResult] = React.useState(process(products, dataState));

  let center;
  let radius;
  
  const labelContent = (e) => e.category;
  
  const visualHandler = (e) => {
    center = e.center;
    radius = e.innerRadius;
    return e.createVisual();
  };

  const onRender = (e) => {
    const circleGeometry = new CircleGeometry(center, radius);
    const bbox = circleGeometry.bbox();
    const heading = new Text("22.5%", [0, 0], {
      font: "28px Verdana,Arial,sans-serif",
    });
    const line1 = new Text("of which", [0, 0], {
      font: "16px Verdana,Arial,sans-serif",
    });
    const line2 = new Text("renewables", [0, 0], {
      font: "16px Verdana,Arial,sans-serif",
    });
    const layout = new Layout(bbox, {
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      spacing: 5,
    });
    layout.append(heading, line1, line2);
    layout.reflow();
    e.target.surface.draw(layout);
  };
  

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
          <Chart onRender={onRender}>
    <ChartSeries>
      <ChartSeriesItem
        type="donut"
        data={result}
        categoryField="kind"
        field="share"
        visual={visualHandler}
        
      >
        <ChartSeriesLabels
          color="#fff"
          background="none"
          content={labelContent}
        />
      </ChartSeriesItem>
    </ChartSeries>
    <ChartLegend visible={false} />
  </Chart>
        </div>
      );
}

export default SecondGrid;