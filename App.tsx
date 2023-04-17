import Game from "./src/components/Game";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

const App = (): JSX.Element => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar hidden />
      <Game />
    </GestureHandlerRootView>
  );
}

export default App;