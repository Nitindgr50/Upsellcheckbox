import {ResourcePicker} from '@shopify/app-bridge-react';
import {  EmptyState, Page } from "@shopify/polaris";
import React, { useState } from 'react'
import ProductList from '../components/ProductList';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

function index() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([])
  function handleProductSelection(payload){
    setIsOpen(false);
    setProducts(payload.selection)
  }
  return (
    <>
      <ResourcePicker 
        resourceType="Product" 
        showVariants={false}
        open={isOpen} 
        onCancel={() => setIsOpen(false)}
        onSelection={handleProductSelection}
      />

    {products.length > 0 ? (
        <Page
          title="Product Selector"
          primaryAction={{
            content: "Select product",
            onAction: () => setIsOpen(true),
          }}>
        <ProductList products={products}/>
      </Page> ) : (
      <EmptyState
        heading='Select Product To Create Upsell!!'
        action={{
          content: "Select product",
          onAction: () => setIsOpen( true )
        }}
        image={img}
      ></EmptyState>
      )}
  </>
  )
}
 
export default index;
