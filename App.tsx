
import React from 'react';
import { View, Text, TextInput, TouchableOpacity,Image,StyleSheet, StatusBar } from 'react-native';
import { useTailwind } from 'nativewind';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
const App = () => {
  

  
  
  var textfields = [];

	for(let i = 0; i < 5; i++){

		textfields.push(
			<TextInput 
       className='border-b-2  p-0  text-red  m-[6] text-center '
       maxLength={1}
       key={i}
      />
				
				
		)
	}


  return (
    <View className='flex-1 justify-center items-center bg-gray-300'>
      
   
      <LinearGradient colors={['#1eae97','#0175b2','#4b3d91']} start={{ x: 0, y: 0}} end={{ x: 1, y: 1 }} className='absolute top-0 w-full h-[270]  rounded-b-3xl' />

      
     
        
        <Image className='flex-1 h-24 w-24 rounded-full justify-center items-center'
            source={require('./assets/logo.png')}
           
            resizeMode='contain'
          />
        
      
      
      <View className='bg-white w-4/5 rounded-2xl p-8 z-10 mb-20'>
        <Text style={styles.text} className='text-black  mb-4 text-center'>LOGIN</Text>

        
        <View className='flex-row items-center mb-4 w-full bg-gray-200 rounded-3xl'>
          <LinearGradient colors={['#0175b2','#4b3d91']} className='h-10 w-10 rounded-full justify-center items-center ml-[2]'>
           <Icon  name="person" size={27} color="#ffff" />
          </LinearGradient>
          <TextInput 
           
            placeholder="Your Name"
            className='border-2xl  flex-1 pb-2 text-lg '
          />
        </View>

        
        <View className='flex-row items-center mb-4 w-full bg-gray-200 rounded-3xl'>
          <LinearGradient colors={['#0175b2','#4b3d91']} className='h-10 w-10 rounded-full justify-center items-center ml-[2]'>
           <Icon name="key" size={25} color="#ffff"/>
          </LinearGradient>
          <View className='flex-row  ' >
            
            {textfields}
            
            </View>
        </View>

        
        <TouchableOpacity >
          <LinearGradient colors={['#0175b2','#4b3d91']} className=' py-3 rounded-full items-center' >
          <View className=' font-semibold items-center flex-row mr-2'><Text  ><Icon name="login" size={20} color="#ffff" />
          
         </Text><Text className='text-white ml-2 text-xs'>LOGIN</Text></View>
          </LinearGradient>
        </TouchableOpacity>

      
        <TouchableOpacity className='mt-4'>
        <View className='flex-row items-center'>
  <View className='flex-[1] h-[0.5] border-b bg-black ml-7' />
  <View>
    <Text style={styles.changepin} className="text-blue-900 w-24 text-center ">Change Your PIN</Text>
  </View>
  <View  className='flex-[1]  border-b h-[0.5] bg-black mr-7' />
</View>
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
  , changepin:{
    fontFamily:'Poppins-Bold',
   
    textAlign:'center',
    fontSize: 10,
  
   

  }

})
export default App;
