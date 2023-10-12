import './style.css';
import { useContext } from 'react';
import { ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import OrderCard from './../../Components/OrderCard';
import { totalPrice } from '../../Utils';
import { Link } from 'react-router-dom';
import moment from 'moment';


const CheckoutSideMenu = () => {
   
    const context = useContext(ShoppingCartContext);
    const handleDelete = (id) =>{
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts);
        if (filteredProducts.length == 0){
            context.closeCheckoutSideMenu();
        }
    };
    const handleCheckout = () =>{
        const totalProducts = context.cartProducts.map(product => product.quantity).reduce((accumulator, quantity) => accumulator + quantity, 0);
        
        const orderToAdd = {
            date: moment().format('DD/MM/YYYY HH:mm'),
            products: context.cartProducts,
            totalProducts: totalProducts,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
        context.setCount(0);
        context.setSearchByTitle(null);

    };
    return (
        
        <aside className={ `${context.isCheckoutSideMenuOpen ? 'checkout-side-menu-open':'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-gray-300 rounded-md bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className='font-medium text-xl m-2'>Mi carrito</h2>
                <div>
                    <XMarkIcon 
                      className="h-6 w-6 text-black-500 cursor-pointer"
                      onClick={context.closeCheckoutSideMenu}
                      />
                </div>
            </div>
            
            <div className="flex justify-between items-center p-2 m-2">
                <div>Cant.</div>
                <div> </div>
                <div>Descripcion</div>
                <div>Precio</div>
            </div>
            <div className=' h-full p-2 m-2 overflow-y-auto'>
                {
                    context.cartProducts.map(product=>(
                        <OrderCard 
                            key = {product.id}
                            id = {product.id}
                            quantity = {product.quantity}
                            title={product.title} 
                            price={parseFloat(product.price).toFixed(2)+"€"} 
                            imageUrl={product.images}
                            handleDelete={handleDelete}></OrderCard>
                    ))
                }
            </div>
            
            <div className='px-6'>
                <p className='flex justify-between items-center'>
                    <span className=' font-light'>Total:</span>
                    <span className=' font-medium text-2xl'>{parseFloat(totalPrice(context.cartProducts)).toFixed(2)} €</span>
                </p>
                <div >
                    <Link className='flex justify-between items-center' to='/my-orders/last'>
                        <button className='flex justify-center items-center w-full bg-red-400 py-3 mb-4 rounded-md  text-white' onClick={() => handleCheckout()}>
                            <ShoppingBagIcon className="h-6 w-6 text-black-500"/>  Comprar
                        </button>
                    </Link>
                    
                </div>
                
            </div>
            
        </aside>
    )
}
export default CheckoutSideMenu