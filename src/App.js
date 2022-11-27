import Home from "./routes/home/home.component.jsx";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import Authentication from "./routes/authentication/authentication.component.jsx";
import CheckOut from "./routes/checkout/checkout.component.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkUserSession } from "./store/user/user.action.js";
import IsUserLoggedIn from "./utils/helpers/is-user-logged-in.js";
import { selectCurrentUser } from "./store/user/user.selector.js";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route exact path="/" element={<IsUserLoggedIn user={user} />}>
          <Route path="/auth" element={<Authentication />} />
        </Route>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
