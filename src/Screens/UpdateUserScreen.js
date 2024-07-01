// import {
//   StyleSheet,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import React, {useState} from 'react';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import {useUpdateUser} from '../Container/UpdateUserContainer/useUpdateUser';
// import CustomSpinner from '../Components/CustomSpinner';

// import {useUser} from '../Authentication/useUser';
// import HeaderComponent from '../Components/HeaderComponent';
// import {BackIcon} from '../Assets/Icons';

// function UpdateUserScreen({handleNavigateBack}) {
//   const {user} = useUser();

//   const [email, setEmail] = useState(user?.email || '');
//   const [password, setPassword] = useState('');

//   const {updateUser, isPending} = useUpdateUser();

//   function handleUpdate() {
//     if (!email || !password) return;

//     updateUser({email, password});
//   }

//   return (
//     <View style={styles.container}>
//       <HeaderComponent
//         newIcon={
//           <TouchableOpacity onPress={handleNavigateBack}>
//             <BackIcon />
//           </TouchableOpacity>
//         }
//         headingText={'Profile'}
//       />
//       <View style={styles.formContainer}>
//         <View style={styles.inputContainer}>
//           <Text style={styles.usernameInputText}>Email</Text>
//           <TextInput
//             style={[styles.input, {backgroundColor: 'lightgrey'}]}
//             value={email}
//             placeholder="Enter a Email"
//             placeholderTextColor="gray"
//             onChangeText={text => setEmail(text)}
//             editable={false}
//           />

//           <Text style={styles.passwordInputText}>Password</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter Password"
//             placeholderTextColor="gray"
//             secureTextEntry
//             value={password}
//             onChangeText={text => setPassword(text)}
//           />
//         </View>
//       </View>

//       <View style={styles.buttonView}>
//         <TouchableOpacity
//           style={styles.loginButton}
//           activeOpacity={0.8}
//           onPress={handleUpdate}>
//           <Text style={styles.loginButtonText}>
//             {isPending ? (
//               <CustomSpinner color={'grey'} size={'small'} />
//             ) : (
//               <Text>Update password</Text>
//             )}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// export default UpdateUserScreen;

// const styles = StyleSheet.create({
//   formContainer: {
//     paddingHorizontal: wp('5%'),
//     backgroundColor: 'white',
//   },
//   usernameInputText: {
//     marginRight: wp('75%'),
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   passwordInputText: {
//     marginRight: wp('70%'),
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   inputContainer: {
//     width: '100%',
//     marginVertical: hp('5%'),
//     alignItems: 'center',
//   },
//   input: {
//     height: hp('7%'),
//     width: wp('85%'),
//     marginTop: hp('1%'),
//     borderColor: 'black',
//     borderWidth: 1,
//     paddingHorizontal: wp('4%'),
//     marginBottom: hp('1%'),
//     borderRadius: wp('4%'),
//     color: 'black',
//   },
//   registerButtonView: {
//     marginTop: hp('5%'),
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//     gap: wp('1%'),
//   },
//   registerButtonText: {
//     color: 'black',
//     fontWeight: 'bold',
//   },

//   buttonView: {
//     alignItems: 'center',
//     marginVertical: hp('1%'),
//   },
//   loginButton: {
//     backgroundColor: 'black',
//     paddingVertical: hp('2%'),
//     width: wp('80%'),
//     borderRadius: wp('4%'),
//   },
//   loginButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useUpdateUser} from '../Container/UpdateUserContainer/useUpdateUser';
import CustomSpinner from '../Components/CustomSpinner';
import {useUser} from '../Authentication/useUser';
import HeaderComponent from '../Components/HeaderComponent';
import {BackIcon} from '../Assets/Icons';

function UpdateUserScreen({handleNavigateBack}) {
  const {user} = useUser();
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const {updateUser, isPending} = useUpdateUser();

  function handleUpdate() {
    if (!email || !password) return;
    updateUser({email, password});
  }

  return (
    <View style={styles.container}>
      <HeaderComponent
        newIcon={
          <TouchableOpacity onPress={handleNavigateBack}>
            <BackIcon color="white" height={30} width={30} />
          </TouchableOpacity>
        }
        headingText={'Profile'}
      />
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, styles.disabledInput]}
            value={email}
            placeholder="Enter Email"
            placeholderTextColor="gray"
            onChangeText={text => setEmail(text)}
            editable={false}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor="gray"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.updateButton}
          activeOpacity={0.8}
          onPress={handleUpdate}>
          {isPending ? (
            <CustomSpinner color={'white'} size={'small'} />
          ) : (
            <Text style={styles.updateButtonText}>Update Password</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default UpdateUserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: wp('5%'),
    backgroundColor: '#f9f9f9',
    paddingTop: hp('5%'),
  },
  inputContainer: {
    marginVertical: hp('2%'),
  },
  label: {
    marginBottom: hp('1%'),
    color: '#333',
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },
  input: {
    height: hp('7%'),
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: wp('4%'),
    marginBottom: hp('2%'),
    borderRadius: wp('2%'),
    backgroundColor: '#f0f0f0',
    fontSize: wp('4%'),
    color: '#333',
  },
  disabledInput: {
    backgroundColor: '#e0e0e0',
  },
  buttonView: {
    alignItems: 'center',
    marginVertical: hp('2%'),
  },
  updateButton: {
    backgroundColor: 'black',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('10%'),
    borderRadius: wp('2%'),
  },
  updateButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: wp('4.5%'),
  },
});
