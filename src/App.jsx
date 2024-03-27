import ClickCounter from "./components/ClickCounter";
import ConditionalRendering from "./components/ConditionalRendering";
import CounterApp from "./components/CounterApp";
import Form from "./components/Form";
import FunctionalComponent from "./components/FunctionalComponenet";
import HoverCounter from "./components/HoverCounter";
import List from "./components/List";
import RegistrationForm from "./components/RegistrationForm";
import RenderProps from "./components/RenderProps";
import SubConponent from "./components/SubConponent";
import CssStyle from "./components/cssstyle/CssStyle";
import ComplexCounter from "./components/hooks/ComplexCounter";
import FetchApi from "./components/hooks/FetchApi";
import FetchApiWithourReducer from "./components/hooks/FetchApiWithoutReducer";
import TimeComponent from "./components/hooks/TimeComponent";
import UseEffectHook from "./components/hooks/UseEffectHook";
import UseRef from "./components/hooks/UseRef";
import UserReducer from "./components/hooks/UserReducer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import OrderConfirmation from "./components/pages/OrderConfirmation";
import PostDetails from "./components/pages/PostDetails";
import PostList from "./components/pages/PostList";
import NavBar from "./components/pages/navbar/NavBar";
import FeaturedProduct from "./components/pages/nested_route/FeaturedProduct";
import NewProduct from "./components/pages/nested_route/NewProduct";
import Product from "./components/pages/nested_route/Product";
import ComponentOne from "./context_api/ComponentOne";
// import "./App.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <p>Welcome to the program</p>
      <SubConponent />
      <FunctionalComponent /> */}

      {/* <ConditionalRendering /> */}
      {/* <List /> */}
      {/* <CounterApp /> */}
      {/* <Form /> */}

      {/* <RegistrationForm /> */}
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}
      {/* <RenderProps course={(isRendered) => (isRendered ? "React" : "HTML")} /> */}
      {/* <ComponentOne course="ReactJS" /> */}

      {/* <UseEffectHook /> */}
      {/* <TimeComponent /> */}
      {/* <FetchApi /> */}
      {/*  <UseRef />
      <UserReducer />
      <ComplexCounter /> */}
      {/* <FetchApiWithourReducer /> */}
      {/* <CssStyle /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="postlist" element={<PostList />} />
        <Route path="post/:postId" element={<PostDetails />} />
        <Route path="order_confirmation" element={<OrderConfirmation />} />
        <Route path="product" element={<Product />}>
          <Route path="featured" element={<FeaturedProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
