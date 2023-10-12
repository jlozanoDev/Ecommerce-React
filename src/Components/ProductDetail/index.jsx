import './style.css';
import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);
    const product = context.productToShow;
    const addProduct = ()=>{
        context.addProductsToCart(product);
    }
    return (
        <aside className={ `${context.isProductDetailOpen ? 'product-detail-open':'hidden'} product-detail flex flex-col fixed right-0 border border-gray-300 rounded-md bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className='font-medium text-xl m-2'>Detalle</h2>
                <div>
                    {context.isProductDetailOpen}
                    <XMarkIcon 
                      className="h-6 w-6 text-black-500 cursor-pointer"
                      onClick={context.closeProductDetail}
                      />
                </div>
            </div>
            
            { context.isProductDetailOpen &&
                <figure className='px-0'>
                    <img className='w-full h-full' 
                        src={context.productToShow.images[0]} 
                        alt={context.productToShow.title}/>
                </figure>
            }
            <p className='flex flex-col p-6'>
                
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
                <div className='font-medium text-2xl mb-2 text-right' >{parseFloat(context.productToShow.price).toFixed(2)}€</div>
            </p>
            <div className="flex flex-col items-center">
                <div className=' justify-between items-center'>
                    <button onClick={addProduct}  className="flex bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"> 
                        <ShoppingBagIcon className="h-6 w-6 text-black-500 pr-2"/> Añadir
                    </button>
                </div>
                
                
            </div>
        </aside>
    )
}
export default ProductDetail;