import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from 'react-native';

const App = () => {
  const [item, setItem] = useState('');
  const [date, setDate] = useState('');
  const [list, setList] = useState([]);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    item && date ? setDisable(false) : setDisable(true);
  }, [item, date]);

  const addItem = () => {
    setList([...list, {key: Math.random().toString(), data: item, date}]);
    setItem('');
    Keyboard.dismiss();
    console.info(list);
  };

  const deleteAll = () => {
    setList([]);
  };

  const viewDate = x => {
    setDate(x);
  };
  const renderList = ({item, index}) => (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'green',
        width: '80%',
        margin: 10,
        borderRadius: 50,
        justifyContent: 'space-between',
        alignSelf: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          margin: 5,
        }}>
        {index + 1} {item.data} , {item.date}
      </Text>
    </View>
  );
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'green'}}>
          Event Planner App
        </Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'green',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              margin: 15,
            }}>
            M
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              margin: 15,
            }}>
            T
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              margin: 15,
            }}>
            W
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              margin: 15,
            }}>
            T
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              margin: 15,
            }}>
            F
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              margin: 15,
            }}>
            S
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              margin: 15,
            }}>
            S
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity
          onPress={() => {
            viewDate('1');
          }}>
          <Text style={{fontSize: 18, color: 'black', marginLeft: 120}}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('2');
          }}>
          <Text style={{fontSize: 18, color: 'black'}}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('3');
          }}>
          <Text style={{fontSize: 18, color: 'black'}}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('4');
          }}>
          <Text style={{fontSize: 18, color: 'black'}}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('5');
          }}>
          <Text style={{fontSize: 18, color: 'black', marginRight: 25}}>5</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity
          onPress={() => {
            viewDate('6');
          }}>
          <Text style={{fontSize: 18, color: 'black', marginLeft: 39}}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('7');
          }}>
          <Text style={{fontSize: 18, color: 'black', marginLeft: 9.2}}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('8');
          }}>
          <Text style={{fontSize: 18, color: 'black', marginLeft: 9.5}}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('9');
          }}>
          <Text style={{fontSize: 18, color: 'black', marginLeft: 8}}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('10');
          }}>
          <Text style={{fontSize: 18, color: 'black'}}>10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('11');
          }}>
          <Text style={{fontSize: 18, color: 'black'}}>11</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('12');
          }}>
          <Text style={{fontSize: 18, color: 'black', marginRight: 25.75}}>
            12
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity
          onPress={() => {
            viewDate('13');
          }}>
          <Text style={{fontSize: 18, color: 'black', marginLeft: 28}}>13</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('14');
          }}>
          <Text style={{fontSize: 18, color: 'black'}}>14</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('15');
          }}>
          <Text style={{fontSize: 18, color: 'black'}}>15</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('16');
          }}>
          <Text style={{fontSize: 18, color: 'black'}}>16</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('17');
          }}>
          <Text style={{fontSize: 18, color: 'black'}}>17</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('18');
          }}>
          <Text style={{fontSize: 18, color: 'black'}}>18</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('19');
          }}>
          <Text style={{fontSize: 18, color: 'black', marginRight: 25}}>
            19
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity
          onPress={() => {
            viewDate('20');
          }}>
          <Text style={{fontSize: 18, color: 'black', marginLeft: 28}}>20</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('21');
          }}>
          <Text style={{fontSize: 18, color: 'black'}}>21</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('22');
          }}>
          <Text style={{fontSize: 18, color: 'black'}}>22</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('23');
          }}>
          <Text style={{fontSize: 18, color: 'black'}}>23</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('24');
          }}>
          <Text style={{fontSize: 18, color: 'black'}}>24</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('25');
          }}>
          <Text style={{fontSize: 18, color: 'black'}}>25</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('26');
          }}>
          <Text style={{fontSize: 18, color: 'black', marginRight: 25}}>
            26
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity
          onPress={() => {
            viewDate('27');
          }}>
          <Text style={{fontSize: 18, color: 'black', marginLeft: 28}}>27</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('28');
          }}>
          <Text style={{fontSize: 18, color: 'black'}}>28</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('29');
          }}>
          <Text style={{fontSize: 18, color: 'black'}}>29</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            viewDate('30');
          }}>
          <Text style={{fontSize: 18, color: 'black', marginRight: 86}}>
            30
          </Text>
        </TouchableOpacity>
        <Text style={{fontSize: 18, color: 'black'}} />
        <Text style={{fontSize: 18, color: 'black'}} />
        <Text style={{fontSize: 18, color: 'black'}} />
      </View>

      <Text
        style={{
          fontSize: 18,
          marginLeft: 15,
          color: 'black',
        }}>
        Event Name:
      </Text>
      <TextInput
        placeholder="Enter your event here"
        style={{borderBottomWidth: 1, margin: 10, padding: 5}}
        value={item}
        onChangeText={setItem}
      />
      <Text
        style={{
          fontSize: 18,
          marginLeft: 15,
          color: 'black',
        }}>
        Date/Day:
      </Text>

      <TextInput
        placeholder="Select the date/day from calendar"
        style={{borderBottomWidth: 1, margin: 10, padding: 5}}
        value={date}
      />

      <View style={{alignItems: 'center'}}>
        <Button
          disabled={disable}
          title="Add to Event"
          color="green"
          onPress={addItem}
        />
        <Text />
        <View style={[{width: '29%'}]}>
          <Button title="Remove all" color="orange" onPress={deleteAll} />
        </View>
      </View>

      <FlatList style={{width: '100%'}} data={list} renderItem={renderList} />
    </View>
  );
};

export default App;
