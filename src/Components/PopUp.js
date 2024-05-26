import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

function PopUp({
  modalVisible,
  setModalVisible,
  detailDescription,
  handleEdit,
  id,
  description,
  setDeleteModalVisible,
}) {
  function handleEditTransaction() {
    setModalVisible(!modalVisible);
    handleEdit(id);
  }

  function deleteTransaction() {
    setDeleteModalVisible(true);
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.centeredView}>
            <Text style={styles.heading}>Description</Text>
            <View style={styles.modalView}>
              <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.modalText}>
                  {detailDescription ? detailDescription : description}
                </Text>
              </ScrollView>
              <View style={styles.btnContainer}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
                <View style={styles.editDeleteConatiner}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={handleEditTransaction}>
                    <Text style={styles.textStyle}>Edit</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonDelete]}
                    onPress={deleteTransaction}>
                    <Text style={styles.textStyle}>Delete</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  heading: {
    color: 'white',
    fontSize: 18,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '30%',
    width: '90%',
  },
  scrollViewContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginTop: 15,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  buttonDelete: {
    backgroundColor: 'darkred',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 120,
  },
  editDeleteConatiner: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default PopUp;
