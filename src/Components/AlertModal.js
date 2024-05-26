import React from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

function AlertModal({
  deleteModalVisible,
  setDeleteModalVisible,
  modalVisible,
  setModalVisible,
  handleDelete,
  id,
}) {
  function handleConfirmDeleteTransaction() {
    setDeleteModalVisible(!deleteModalVisible);
    setModalVisible(!modalVisible);
    handleDelete(id);
  }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        transparent={true}
        visible={deleteModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setDeleteModalVisible(!modalVisible);
        }}>
        <TouchableWithoutFeedback
          onPress={() => setDeleteModalVisible(!deleteModalVisible)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Are you sure, you want to delete this transaction?
              </Text>
              <View style={styles.buttonContainer}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setDeleteModalVisible(!deleteModalVisible)}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonYes]}
                  onPress={handleConfirmDeleteTransaction}>
                  <Text style={styles.textStyle}>Yes</Text>
                </Pressable>
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
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  buttonYes: {
    backgroundColor: 'darkred',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 60,
  },
});

export default AlertModal;
