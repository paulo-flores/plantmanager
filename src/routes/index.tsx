import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import StackRoutes from "./stack.routes";
import { StatusBar } from "react-native";

const Routes = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="white"></StatusBar>
    <StackRoutes />
  </NavigationContainer>
);

export default Routes;
