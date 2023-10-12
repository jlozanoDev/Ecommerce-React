import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();
export const ShoppingCartProvider= ({children}) =>{
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    const [searchByTitle, setSearchByTitle] = useState(null);
    const [searchByCategory, setSearchByCategory] = useState(null);
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
          .then(response => response.json())
          .then(data=> setItems(data))
      },[]);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) =>{
        if (searchType == 'BY_TITLE'){
            return filteredItemsByTitle(items,searchByTitle);
        }
        if (searchType == 'BY_CATEGORY'){
            return filteredItemsByCategory(items,searchByCategory);
        }
        if (searchType == 'BY_TITLE_CATEGORY'){
            return filteredItemsByCategory(items,searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
        }
        if (!searchType){
            return items;
        }
    }
    useEffect(()=>{
        
        if (searchByTitle && !searchByCategory){
            setFilteredItems(filterBy('BY_TITLE',items, searchByTitle, searchByCategory))
        }
        if (searchByCategory && !searchByTitle){
            setFilteredItems(filterBy('BY_CATEGORY',items, searchByTitle, searchByCategory))
        }
        if (!searchByCategory && !searchByTitle){
            setFilteredItems(filterBy(null,items, searchByTitle, searchByCategory))
        }
        if (searchByCategory && searchByTitle){
            setFilteredItems(filterBy('BY_TITLE_CATEGORY',items, searchByTitle, searchByCategory))
        }
      },[items, searchByTitle, searchByCategory]);

    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const [cartProducts, setCartProducts] = useState([]);
    const [productToShow, setProductToShow] = useState({});

    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => {
        setIsProductDetailOpen(false)
    };

    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    const addProductsToCart = (productData) =>{

        const index = cartProducts.findIndex(objeto => objeto.id === productData.id);
        if (index !== -1) {
            cartProducts[index].quantity++;
        }else{
            productData.quantity = 1;
            setCartProducts([...cartProducts,productData]);
        }

        setIsProductDetailOpen(false);
        setCount(count + 1);
        setIsCheckoutSideMenuOpen(true);
    }

    const [order, setOrder] = useState([]);
    
    return (
        <ShoppingCartContext.Provider value={{
            items, //productos
            setItems,
            searchByTitle, 
            setSearchByTitle,
            searchByCategory, 
            setSearchByCategory,
            filteredItems,
            

            count,
            setCount,
            
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,

            productToShow,
            setProductToShow,

            cartProducts,
            setCartProducts,

            addProductsToCart,

            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,

            order, 
            setOrder,
        }}>
            {children}
        </ShoppingCartContext.Provider>
        
    )
}