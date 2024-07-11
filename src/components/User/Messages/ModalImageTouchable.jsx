import React from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from 'react-native';

function ModalImageTouchable({ visible, uri, onClose }) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.modalBackground} onPress={onClose}>
        <TouchableWithoutFeedback>
          <View style={styles.modalContent}>
            <Image
              source={{ uri: uri }}
              style={styles.modalImage}
            />
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

export default ModalImageTouchable;
