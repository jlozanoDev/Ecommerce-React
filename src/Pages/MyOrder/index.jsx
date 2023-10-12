import Layout from "../../Components/Layout";
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCard from './../../Components/OrderCard';
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function MyOrder() {
  const context = useContext(ShoppingCartContext);
  let { orderId } = useParams();
  orderId = (orderId==='last' || orderId === undefined)? context.order?.length -1 : orderId;
  return (
    <>
      
      <Layout>
      <div className="flex w-80 relative items-center justify-center mb-6">
        
          <Link to='/my-orders' className=" absolute left-0" >
            <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer w-3"/>
          </Link>
          <h1> Mi Pedido #{ orderId }</h1>
        </div>
        <div className=' h-full p-2 m-2 overflow-y-auto'>
            {
                
                context.order?.[orderId]?.products.map(product=>(
                    <OrderCard 
                        key = {product.id}
                        id = {product.id}
                        quantity = {product.quantity}
                        title={product.title} 
                        price={parseFloat(product.price).toFixed(2)+"€"} 
                        imageUrl={product.images}
                        ></OrderCard>
                ))
            }
        </div>
      </Layout>
      
    </>
  )
}

export default MyOrder