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
function Drawer({
  isOpen,
  onClose,
  handleNavigateHome,
  handleNavigateCalendar,
  handleNavigateSetting,
  setIsDrawerOpen,
}) {
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
          {/* Drawer content */}
          <View style={styles.headingProfileContainer}>
            <View style={styles.headingView}>
              <Text style={styles.heading}>Expense </Text>
              <Text style={styles.headingTwo}>Tracker </Text>
            </View>
            <View></View>
          </View>
          <View style={styles.line} />
          <View style={styles.drawerContentView}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  handleNavigateCalendar();
                  setIsDrawerOpen(false);
                }}>
                <View style={styles.drawerContent}>
                  <CalendarIcon
                    height={hp('3%')}
                    width={wp('8%')}
                    color={'white'}
                  />

                  <Text style={styles.text}>Calendar</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  handleNavigateHome();
                  setIsDrawerOpen(false);
                }}>
                <View style={styles.drawerContent}>
                  <HomeIcon
                    height={hp('3%')}
                    width={wp('8%')}
                    color={'white'}
                  />

                  <Text style={styles.text}>Home</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  handleNavigateSetting();
                  setIsDrawerOpen(false);
                }}>
                <View style={styles.drawerContent}>
                  <SettingsIcon
                    height={hp('3%')}
                    width={wp('8%')}
                    color={'white'}
                  />

                  <Text style={styles.text}>Settings</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <View style={styles.drawerContent}>
                  <LogoutIcon
                    height={hp('3%')}
                    width={wp('8%')}
                    color={'white'}
                  />

                  <Text style={styles.text}>Log Out</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

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
    backgroundColor: 'black',
    padding: wp('5%'),
  },
  headingProfileContainer: {
    marginVertical: hp('1%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  heading: {
    fontSize: wp('5%'),
    color: 'white',
    fontWeight: 'bold',
  },
  headingTwo: {
    marginVertical: hp('1%'),
    fontSize: wp('5%'),
    color: 'lightgrey',
  },
  profilePic: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('3%'),
  },
  line: {
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginVertical: hp('1%'),
  },
  drawerContentView: {
    marginVertical: hp('3%'),
  },
  drawerContent: {
    flexDirection: 'row',
    gap: 8,
  },
  text: {
    fontSize: wp('5%'),
    marginBottom: hp('2%'),
    color: 'white',
  },
});

export default Drawer;
