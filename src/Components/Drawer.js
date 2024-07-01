import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  CalendarIcon,
  HomeIcon,
  LogoutIcon,
  SettingsIcon,
} from '../Assets/Icons';
import {useUser} from '../Authentication/useUser';

function Drawer({
  isOpen,
  onClose,
  handleNavigateHome,
  handleNavigateCalendar,
  handleNavigateSetting,
  setIsDrawerOpen,
  logOut,
  isPending,
}) {
  const {user} = useUser();
  return (
    <Modal
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      transparent={true}
      visible={isOpen}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={onClose}
        />
        <View style={styles.drawerContainer}>
          <View style={styles.headingProfileContainer}>
            <View style={styles.headingView}>
              <Text style={styles.heading}>Expense</Text>
              <Text style={styles.headingTwo}>Tracker</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.drawerContentView}>
            <DrawerItem
              onPress={() => {
                handleNavigateCalendar();
                setIsDrawerOpen(false);
              }}
              icon={
                <CalendarIcon
                  height={hp('3%')}
                  width={wp('8%')}
                  color={'white'}
                />
              }
              text="Calendar"
            />
            <DrawerItem
              onPress={() => {
                handleNavigateHome();
                setIsDrawerOpen(false);
              }}
              icon={
                <HomeIcon height={hp('3%')} width={wp('8%')} color={'white'} />
              }
              text="Home"
            />
            <DrawerItem
              onPress={() => {
                handleNavigateSetting();
                setIsDrawerOpen(false);
              }}
              icon={
                <SettingsIcon
                  height={hp('3%')}
                  width={wp('8%')}
                  color={'white'}
                />
              }
              text="Settings"
            />
            <DrawerItem
              onPress={() => logOut(user?.id)}
              icon={
                <LogoutIcon
                  height={hp('3%')}
                  width={wp('8%')}
                  color={'white'}
                />
              }
              text="Log Out"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const DrawerItem = ({onPress, icon, text}) => (
  <TouchableOpacity onPress={onPress} style={styles.drawerItemContainer}>
    <View style={styles.drawerContent}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  drawerContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: wp('75%'),
    backgroundColor: '#1c1c1e',
    padding: wp('5%'),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  headingProfileContainer: {
    marginVertical: hp('1%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  headingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontSize: wp('6%'),
    color: 'white',
    fontWeight: 'bold',
  },
  headingTwo: {
    marginLeft: wp('2%'),
    fontSize: wp('6%'),
    color: '#ffa726',
  },
  line: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginVertical: hp('2%'),
  },
  drawerContentView: {
    marginTop: hp('3%'),
  },
  drawerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: wp('5%'),
    marginLeft: wp('3%'),
    color: 'white',
  },
  drawerItemContainer: {
    paddingVertical: hp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },
});

export default Drawer;
