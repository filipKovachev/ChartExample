import React from 'react';
import products from '../src/products.json';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";


function SecondGrid() {
    const [skip, setSkip] = React.useState(0);
    const [take, setTake] = React.useState(2);

    const onPageChange = (event) => {
        setSkip(event.page.skip);
        setTake(event.page.take);
    }

    return (
      
        <div>
      
         
          <Grid data={products.slice(skip, skip + take)}
           pageable={true}
           skip={skip}
           take={take}
           onPageChange={onPageChange}
           total={products.length}
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