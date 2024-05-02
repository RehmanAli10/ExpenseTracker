import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import CustomButton from '../Components/CustomButton';

import {
  CalendarIcon,
  ExpenseIcon,
  HamBurgerIcon,
  IncomeIcon,
  ReportIcon,
  Transaction,
} from '../Assets/Icons';
import CustomContent from '../Components/CustomContent';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderComponent from '../Components/HeaderComponent';
import Drawer from '../Components/Drawer';

function HomeScreen({
  handleNavigate,
  handleNavigateTransactions,
  handleNavigateHome,
  handleNavigateCalendar,
  handleNavigateSetting,
  isDrawerOpen,
  setIsDrawerOpen,
  handleNavigateLogin,
}) {
  return (
    <View style={styles.container}>
      <HeaderComponent
        headerFirstIcon={
          <HamBurgerIcon
            color={'white'}
            height={25}
            width={25}
            handleClick={() => setIsDrawerOpen(true)}
          />
        }
        text={'Expense Tracker'}
        headerSecondIcon={
          <CalendarIcon
            color={'white'}
            height={25}
            width={25}
            handleClick={() => {
              handleNavigateCalendar();
            }}
          />
        }
      />

      {/* logo view */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        handleNavigateHome={handleNavigateHome}
        handleNavigateCalendar={handleNavigateCalendar}
        setIsDrawerOpen={setIsDrawerOpen}
        handleNavigateSetting={handleNavigateSetting}
        handleNavigateLogin={handleNavigateLogin}
      />
      <View style={styles.logoView}>
        <Image
          source={require('../Assets/Images/Expenselogo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.innerContainer}>
        <View style={styles.columnButton}>
          <CustomButton
            buttonLabel="Add Income/Expense"
            onPress={handleNavigate}
            buttonWidth={wp('86%')}
            buttonHeight={hp('13%')}
            labelStyle={{
              fontWeight: 'bold',
              fontSize: wp('5%'),
              color: 'white',
              textAlign: 'center',
            }}
            backgroundImageSource={require('../Assets/Images/incomeExpense.png')}
            borderRadius={wp('5%')}
            overlayColor="rgba(0, 0, 0, 0.3)"
            addIcon={
              <IncomeIcon
                height={hp('8%')}
                width={wp('10%')}
                color="lightgreen"
              />
            }
            addIconTwo={
              <ExpenseIcon height={hp('8%')} width={wp('10%')} color="red" />
            }
          />
        </View>

        <View style={styles.rowButtons}>
          <CustomButton
            buttonLabel="Report"
            buttonWidth={wp('86%')}
            buttonHeight={hp('13%')}
            buttonMargin={hp('2%')}
            backgroundImageSource={require('../Assets/Images/report.png')}
            borderRadius={wp('5%')}
            overlayColor="rgba(0, 0, 0, 0.3)"
            addIcon={
              <ReportIcon height={hp('8%')} width={wp('10%')} color="#CFF6FF" />
            }
            labelStyle={{
              fontWeight: 'bold',
              fontSize: wp('5%'),
              color: 'white',
              textAlign: 'center',
            }}
          />
          <CustomButton
            buttonLabel="All Transactions"
            buttonWidth={wp('86%')}
            buttonHeight={hp('13%')}
            onPress={handleNavigateTransactions}
            backgroundImageSource={require('../Assets/Images/transactions.png')}
            borderRadius={wp('5%')}
            overlayColor="rgba(0, 0, 0, 0.3)"
            addIcon={
              <Transaction
                height={hp('8%')}
                width={wp('10%')}
                color="#0090C4"
              />
            }
            labelStyle={{
              fontWeight: 'bold',
              fontSize: wp('5%'),
              color: 'white',
              textAlign: 'center',
            }}
          />
        </View>
      </View>
      {/* custom content component */}
      <View style={styles.customContentView}>
        <CustomContent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    width: wp('45%'),
    height: hp('22%'),
  },
  logoView: {
    position: 'relative',
    alignItems: 'center',
    marginTop: hp('5%'),
  },
  innerContainer: {
    flex: 2,
    marginTop: hp('10%'),
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  columnButton: {
    marginTop: hp('5%'),
    marginBottom: hp('2%'),
    alignItems: 'center',
  },
  rowButtons: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  customContentView: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: hp('36%'),
    left: wp('11%'),
  },
});

export default HomeScreen;
