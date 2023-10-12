import { useState, useEffect } from "react";
import { useContext } from 'react';
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import ProductDetail from "../../Components/ProductDetail";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import { ShoppingCartContext } from '../../Context';
function Home() {
  
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.filteredItems?.length>0){
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item}/>
        )))
    }else {
      return (
        <div className="flex text-center justify-between text-lg w-full text-red-400">No hay productos</div>
      )
    }
  }
  return (
    <>
      <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4 ">
          <h1 className=" font-medium text-xl"> Productos exclusivos</h1>
        </div>
        <input className="grid gap-4 grid-cols-4 w-full max-w-screen-lg rounded-lg border border-black w- p-4 mb-4 focus:outline-none" 
          type="text" 
          placeholder="Buscar producto"
          onChange={(event)=> context.setSearchByTitle(event.target.value)}></input>
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {
            renderView()
          }
        </div>
        <ProductDetail/>
        <CheckoutSideMenu/>
      </Layout>
    </>
  )
}

export default Home