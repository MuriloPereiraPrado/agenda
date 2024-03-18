import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Agenda from "./src/screens/agenda";
import Agendados from "./src/screens/agendados";

const Tab = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown:false
      }}>
        <Tab.Screen name="Agenda" component={Agenda}/>
        <Tab.Screen name="Agendados" component={Agendados}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}