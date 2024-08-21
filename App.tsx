import React from 'react';
import { View, Text, TextInput, TouchableOpacity,Image,StyleSheet } from 'react-native';
import { useTailwind } from 'nativewind';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  

  return (
    <View className='flex-1 justify-center items-center bg-gray-300'>
      
   
      <LinearGradient colors={['#1eae97','#0175b2','#4b3d91']} start={{ x: 0, y: 0}} end={{ x: 1, y: 1 }} className='absolute top-0 w-full h-1/2  rounded-b-3xl' />

      
     
        
        <Image className='flex-1 h-24 w-24 rounded-full justify-center items-center'
            source={require('./assets/logo.png')}
           
            resizeMode='contain'
          />
        
      
      
      <View className='bg-white w-4/5 rounded-2xl p-8 z-10 mb-11'>
        <Text style={styles.text} className='text-black  mb-4 text-center'>LOGIN</Text>

        
        <View className='flex-row items-center mb-4 w-full bg-gray-200 rounded-2xl'>
          <LinearGradient colors={['#0175b2','#4b3d91']} className='h-10 w-10 rounded-full justify-center items-center mr-4'>
          const myIcon = <Icon name="rocket" size={30} color="#900" />;
          </LinearGradient>
          <TextInput 
           
            placeholder="Your Name"
            className='border-2xl  flex-1 pb-2 text-lg '
          />
        </View>

        
        <View className='flex-row items-center mb-4 w-full bg-gray-200 rounded-2xl'>
          <LinearGradient colors={['#0175b2','#4b3d91']} className='h-10 w-10 rounded-full justify-center items-center mr-4'>
           <Image  className='h-5 w-5 justify-center ' source={require('./assets/key.png')} resizeMode='contain'/>
          </LinearGradient>
          <TextInput 
           
            placeholder="Your Key"
            className='border-2xl  flex-1 pb-2 text-lg '
          />
        </View>

        
        <TouchableOpacity >
          <LinearGradient colors={['#0175b2','#4b3d91']} className=' py-3 rounded-full items-center' >
          <Text  className='text-white text-lg font-semibold '>LOGIN</Text>
          </LinearGradient>
        </TouchableOpacity>

      
        <TouchableOpacity className='mt-4'>
          <Text className='text-blue-500 text-center text-sm'>Change Your PIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  
  buttonText: {
   
  },

  text:{
    fontFamily:'18 Khebrat Musamim Regular',
   
    textAlign:'center',
    color:'black',
    fontSize: 25,

  }

})
export default App;
