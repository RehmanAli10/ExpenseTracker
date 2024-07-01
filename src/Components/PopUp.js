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
            <View style={styles.modalView}>
              <Text style={styles.heading}>Description</Text>
              <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.modalText}>
                  {detailDescription ? detailDescription : description}
                </Text>
              </ScrollView>
              <View style={styles.btnContainer}>
                <Pressable
                  style={({pressed}) => [
                    styles.button,
                    styles.buttonClose,
                    pressed && styles.buttonPressed,
                  ]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
                <View style={styles.editDeleteContainer}>
                  <Pressable
                    style={({pressed}) => [
                      styles.button,
                      styles.buttonClose,
                      pressed && styles.buttonPressed,
                    ]}
                    onPress={handleEditTransaction}>
                    <Text style={styles.textStyle}>Edit</Text>
                  </Pressable>
                  <Pressable
                    style={({pressed}) => [
                      styles.button,
                      styles.buttonDelete,
                      pressed && styles.buttonPressed,
                    ]}
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
    width: '90%',
  },
  heading: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
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
  buttonPressed: {
    opacity: 0.8,
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
    marginVertical: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  editDeleteContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default PopUp;
