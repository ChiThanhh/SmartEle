import Dashboard from "../pages/backend/Dashboard";
import Brand from '../pages/backend/Brand/index';
// import BrandShow from '../pages/backend/Brand/BrandShow';
// import BrandCreate from '../pages/backend/Brand/BrandCreate';
// import BrandUpdate from '../pages/backend/Brand/BrandUpdate';
import Category from '../pages/backend/Category/index';
// import CategoryShow from '../pages/backend/Category/CategoryShow';
// import CategoryCreate from '../pages/backend/Category/CategoryCreate';
// import CategoryUpdate from '../pages/backend/Category/CategoryUpdate';
 import ProductList from '../pages/backend/Product/ProductList';
 import ProductImport from '../pages/backend/Product/ProductImport';
 import ProductShow from '../pages/backend/Product/ProductShow';
 import ProductCreate from '../pages/backend/Product/ProductCreate';
 import ProductEdit from '../pages/backend/Product/ProductEdit';
 import ProductSale from '../pages/backend/Product/ProductSale';
// import ContactList from '../pages/backend/Contact/ContactList';
// import ContactShow from '../pages/backend/Contact/ContactShow';
// import ContactUpdate from '../pages/backend/Contact/ContactUpdate';
// import MenuList from '../pages/backend/Menu/MenuList';
// import MenuShow from '../pages/backend/Menu/MenuShow';
// import MenuCreate from '../pages/backend/Menu/MenuCreate';
// import MenuUpdate from '../pages/backend/Menu/MenuUpdate';
import Order from '../pages/backend/Order/index';
import OrderShow from '../pages/backend/Order/OrderShow';
import OrderExport from '../pages/backend/Order/OrderExport';
 import Post from '../pages/backend/Post/index';
 import PostShow from '../pages/backend/Post/PostShow';
 import PostCreate from '../pages/backend/Post/PostCreate';
 import PostEdit from '../pages/backend/Post/PostEdit';
 import PostTrash from '../pages/backend/Post/PostTrash';
 import Page from '../pages/backend/Page/index';
 import PageShow from '../pages/backend/Page/PageShow';
 import PageCreate from '../pages/backend/Page/PageCreate';
 import PageEdit from '../pages/backend/Page/PageEdit';
 import PageTrash from '../pages/backend/Page/PageTrash';
// import SliderList from '../pages/backend/Slider/SliderList';
// import SliderShow from '../pages/backend/Slider/SliderShow';
// import SliderCreate from '../pages/backend/Slider/SliderCreate';
// import SliderUpdate from '../pages/backend/Slider/SliderUpdate';
 import Topic from '../pages/backend/Topic/index';
 import TopicShow from '../pages/backend/Topic/TopicShow';
 import TopicEdit from '../pages/backend/Topic/TopicEdit';
 import TopicTrash from '../pages/backend/Topic/TopicTrash';
// import UserList from '../pages/backend/User/UserList';
// import UserShow from '../pages/backend/User/UserShow';
// import UserCreate from '../pages/backend/User/UserCreate';
// import UserUpdate from '../pages/backend/User/UserUpdate';
import Customer from '../pages/backend/Customer/index';
import CustomerCreate from '../pages/backend/Customer/CustomerCreate';
import CustomerEdit from '../pages/backend/Customer/CustomerEdit';
import CustomerShow from '../pages/backend/Customer/CustomerShow';
import CustomerTrash from '../pages/backend/Customer/CustomerTrash';

const RouterPrivate = [
 { path: "/", component: Dashboard },
  { path: "/brand", component: Brand },
  // { path: "/admin/brand/show/:id", component: BrandShow },
  // { path: "/admin/brand/create", component: BrandCreate },
  // { path: "/admin/brand/update/:id", component: BrandUpdate },

  { path: "/category", component: Category },
  // { path: "/admin/category/show/:id", component: CategoryShow },
  // { path: "/admin/category/create", component: CategoryCreate },
  // { path: "/admin/category/update/:id", component: CategoryUpdate },

  { path: "/product", component: ProductList },
  { path: "/product/import", component: ProductImport },
  { path: "/product/show/:id", component: ProductShow },
  { path: "/product/create", component: ProductCreate },
  { path: "/product/edit/:id", component: ProductEdit },
  { path: "/product/sale", component: ProductSale },

  // { path: "/admin/contact", component: ContactList },
  // { path: "/admin/contact/show/:id", component: ContactShow },
  // { path: "/admin/contact/update/:id", component: ContactUpdate },

  // { path: "/admin/menu", component: MenuList },
  // { path: "/admin/menu/show/:id", component: MenuShow },
  // { path: "/admin/menu/create", component: MenuCreate },
  // { path: "/admin/menu/update/:id", component: MenuUpdate },

  { path: "/order", component: Order },
  { path: "/order/show/:id", component: OrderShow },
  { path: "/order/export", component: OrderExport },

  { path: "/post", component: Post },
  { path: "/post/show/:id", component: PostShow },
  { path: "/post/create", component: PostCreate },
  { path: "/post/edit/:id", component: PostEdit },
  { path: "/post/trash", component:  PostTrash},

  { path: "/page", component: Page },
  { path: "/page/show/:id", component: PageShow },
  { path: "/page/create", component: PageCreate },
  { path: "/page/edit/:id", component: PageEdit },
  { path: "/page/trash", component: PageTrash },

  // { path: "/admin/Slider", component: SliderList },
  // { path: "/admin/Slider/show/:id", component: SliderShow },
  // { path: "/admin/Slider/create", component: SliderCreate },
  // { path: "/admin/Slider/update/:id", component: SliderUpdate },
  
  { path: "/topic", component: Topic },
  { path: "/topic/show/:id", component: TopicShow },
  { path: "/topic/trash", component: TopicTrash},
  { path: "/topic/edit/:id", component: TopicEdit },

  // { path: "/admin/user", component: UserList },
  // { path: "/admin/user/show/:id", component: UserShow },
  // { path: "/admin/user/create", component: UserCreate },
  // { path: "/admin/user/update/:id", component: UserUpdate },

  { path: "/customer", component: Customer },
  { path: "/customer/show/:id", component: CustomerShow },
  { path: "/customer/create", component: CustomerCreate},
  { path: "/customer/edit/:id", component: CustomerEdit },
  { path: "/customer/trash", component: CustomerTrash },
  
];
export default RouterPrivate;