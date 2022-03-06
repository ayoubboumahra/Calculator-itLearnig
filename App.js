import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import Header from './components/Header';
import tw from 'twrnc';
import { useContext } from 'react';
import CalculatorProvider from './context/CalculatorProvider';
import CalculatorContext from './context/CalculatorContext';
import ImageCalculator from "./assets/calculator.png";

export default function App() {
  return (
    <CalculatorProvider initial={'0'}>
      <CalculatorApp />
    </CalculatorProvider>
  );
}

const CalculatorApp = () => {

  const { text, num, changeNum, clickOperation, resetAll, equal, removeLast } = useContext(CalculatorContext);

  const { container, view } = styles;

  return (
    <SafeAreaView style={[container, tw`bg-indigo-200`]}>
      <View style={[view, tw`bg-indigo-200`]}>

        <View style={tw`mb-3 bg-indigo-500 px-2 py-4 flex flex-row items-center rounded`}>
          <Image source={ImageCalculator} style={{ width: 50, height: 50, marginRight: 5 }} />
          <Text style={tw`text-white text-3xl`}>Calculator</Text>
        </View>

          <Header 
            text = { text }
            number = { num }
          />

          <View
            style={tw`flex flex-row w-full justify-between mb-3`}
          >
            <Button 
              btn_style = { 'bg-indigo-500 shadow-lg shadow-indigo-500/50 px-7 py-4 border-3 rounded' }
              text_style = { 'text-white font-bold text-lg font-mono' }
              text = { '=' }
              onClick = { equal }
            />
            <Button 
              btn_style = { 'bg-indigo-500 shadow-lg shadow-indigo-500/50 px-7 w-17 py-4 border-3 rounded' }
              text_style = { 'text-white font-bold text-lg font-mono' }
              text = { 'C' }
              onClick = { resetAll }
            />
            <Button 
              btn_style = { 'bg-indigo-500 shadow-lg shadow-indigo-500/50 px-7 py-4 border-3 rounded' }
              text_style = { 'text-white font-bold text-lg font-mono' }
              text = { 'x' }
              onClick = { removeLast }
            />
            <Button 
              btn_style = { 'bg-indigo-500 shadow-lg shadow-indigo-500/50 px-7 py-4 border-3 rounded' }
              text_style = { 'text-white font-bold text-lg font-mono' }
              text = { '/' }
              onClick = { clickOperation }
            />
          </View>

          <View
            style={tw`flex flex-row w-full justify-between mb-3`}
          >
            <Button 
              btn_style = { 'bg-indigo-500 shadow-lg shadow-indigo-500/50 px-7 py-4 border-3 rounded' }
              text_style = { 'text-white font-bold text-lg font-mono' }
              text = { '7' }
              onClick = { changeNum }
            />
            <Button 
              btn_style = { 'bg-indigo-500 shadow-lg shadow-indigo-500/50 px-7 py-4 border-3 rounded' }
              text_style = { 'text-white font-bold text-lg font-mono' }
              text = { '8' }
              onClick = { changeNum }
            />
            <Button 
              btn_style = { 'bg-indigo-500 shadow-lg shadow-indigo-500/50 px-7 py-4 border-3 rounded' }
              text_style = { 'text-white font-bold text-lg font-mono' }
              text = { '9' }
              onClick = { changeNum }
            />
            <Button 
              btn_style = { 'bg-indigo-500 shadow-lg shadow-indigo-500/50 px-7 py-4 border-3 rounded' }
              text_style = { 'text-white font-bold text-lg font-mono' }
              text = { '*' }
              onClick = { clickOperation }
            />
          </View>

          <View
            style={tw`flex flex-row w-full justify-between mb-3`}
          >
            <Button 
              btn_style = { 'bg-indigo-500 shadow-lg shadow-indigo-500/50 px-7 py-4 border-3 rounded' }
              text_style = { 'text-white font-bold text-lg font-mono' }
              text = { '4' }
              onClick = { changeNum }
            />
            <Button 
              btn_style = { 'bg-indigo-500 shadow-lg shadow-indigo-500/50 px-7 py-4 border-3 rounded' }
              text_style = { 'text-white font-bold text-lg font-mono' }
              text = { '5' }
              onClick = { changeNum }
            />
            <Button 
              btn_style = { 'bg-indigo-500 shadow-lg shadow-indigo-500/50 px-7 py-4 border-3 rounded' }
              text_style = { 'text-white font-bold text-lg font-mono' }
              text = { '6' }
              onClick = { changeNum }
            />
            <Button 
              btn_style = { 'bg-indigo-500 shadow-lg shadow-indigo-500/50 px-7 py-4 border-3 rounded' }
              text_style = { 'text-white font-bold text-lg font-mono' }
              text = { '-' }
              onClick = { clickOperation }
            />
          </View>

          <View
            style={tw`flex flex-row w-full justify-between mb-3`}
          >
            <Button 
              btn_style = { 'bg-indigo-500 shadow-lg shadow-indigo-500/50 px-7 py-4 border-3 rounded' }
              text_style = { 'text-white font-bold text-lg font-mono' }
              text = { '1' }
              onClick = { changeNum }
            />
            <Button 
              btn_style = { 'bg-indigo-500 shadow-lg shadow-indigo-500/50 px-7 py-4 border-3 rounded' }
              text_style = { 'text-white font-bold text-lg font-mono' }
              text = { '2' }
              onClick = { changeNum }
            />
            <Button 
              btn_style = { 'bg-indigo-500 shadow-lg shadow-indigo-500/50 px-7 py-4 border-3 rounded' }
              text_style = { 'text-white font-bold text-lg font-mono' }
              text = { '3' }
              onClick = { changeNum }
            />
            <Button 
              btn_style = { 'bg-indigo-500 shadow-lg shadow-indigo-500/50 px-7 py-4 border-3 rounded' }
              text_style = { 'text-white font-bold text-lg font-mono' }
              text = { '+' }
              onClick = { clickOperation }
            />
          </View>
        </View>
        
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  view: {
    marginHorizontal: 40,
    marginVertical: 20
  },
});
