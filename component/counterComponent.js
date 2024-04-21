//import liraries
import React from 'react';
import {View, Text,  Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../Redux/Reducer';
// create a component
const CounterComponent = () => {
  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const handleCounterUpdate = action => {
    if (action === 'increment' || (action === 'decrement' && counter > 0)) {
      dispatch(action === 'increment' ? increment() : decrement());
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'aqua'}}>
      <Text style={{fontWeight: 'bold', fontSize: 40}}>Counter: {counter}</Text>
      <Button
        title="Increase Counter"
        onPress={() => handleCounterUpdate('increment')}
        color={'blue'}
      />
      <Button
        title="Decrease Counter"
        onPress={() => handleCounterUpdate('decrement')}
        color={'blue'}
        mode="contained"
      />
    </View>
  );
};

//make this component available to the app
export default CounterComponent;
