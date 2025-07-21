export const BASE_URL = "http://localhost:3000/" ;
export const URL_UPLOAD = "http://localhost:3000/uploads/"
export const BASE_API_URL = "http://localhost:3000/api"

export const API_URLS ={
    auth:{
    //Auth API
    register:`${BASE_API_URL}/auth/register`,
    login:`${BASE_API_URL}/auth/login`,
    },


    //Users API
    users:{
    allusers:`${BASE_API_URL}/users/allusers/`,
    getUserById:`${BASE_API_URL}/users/user/`,
    editUser:`${BASE_API_URL}/users/editUser/`,
    deleteUser:`${BASE_API_URL}/users/deleteUser/`,
    getVideoFavsByUserId:`${BASE_API_URL}/users/videoFav/`,
     },

    category:{
    //Categories API
    addCategory:`${BASE_API_URL}/categories/create/`,
    allCategories:`${BASE_API_URL}/categories/`,
    editCategory:`${BASE_API_URL}/categories/`,
    deleteCategory:`${BASE_API_URL}/categories/`,
    getCategoryById:`${BASE_API_URL}/categories/`
    },

    subcategory:{
    //subCategories API
    addSubCategory:`${BASE_API_URL}/subcategories/create/`,
    allSubCategories:`${BASE_API_URL}/subcategories/`,
    editSubCategory:`${BASE_API_URL}/subcategories/`,
    deleteSubCategory:`${BASE_API_URL}/subcategories/`,
    getSubCategoryById:`${BASE_API_URL}/subcategories/`
    },
    
    product:{
    //Product API
    addProduct:`${BASE_API_URL}/products/create/`,
    allproducts:`${BASE_API_URL}/products/`,
    editProduct:`${BASE_API_URL}/products/`,
    deleteProduct:`${BASE_API_URL}/products/`,
    getProductById:`${BASE_API_URL}/products/`
    },

    seller:{
    //Seller API
    addSeller:`${BASE_API_URL}/sellers/create/`,
    allSellers:`${BASE_API_URL}/sellers/`,
    editSeller:`${BASE_API_URL}/sellers/`,
    deleteSeller:`${BASE_API_URL}/sellers/`,
    getSellerById:`${BASE_API_URL}/sellers/`
    },

    offer:{
    //Offer API
    addOffer:`${BASE_API_URL}/offers/create/`,
    allOffers:`${BASE_API_URL}/offers/`,
    editOffer:`${BASE_API_URL}/offers/`,
    deleteOffer:`${BASE_API_URL}/offers/`,
    getOfferById:`${BASE_API_URL}/offers/`
    },
   
}
