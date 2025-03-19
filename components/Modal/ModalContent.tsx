import React, { ReactNode, useEffect, useRef } from "react";
import { Modal, Animated, TouchableOpacity, StyleSheet, View } from "react-native";

interface Props {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalContent = ({ isVisible, onClose, children }: Props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    if (isVisible) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 4,
          useNativeDriver: true
        })
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.8,
          duration: 200,
          useNativeDriver: true
        })
      ]).start();
    }
  }, [isVisible, fadeAnim, scaleAnim]);

  return (
    <Modal transparent={true} visible={isVisible} onRequestClose={onClose}>
      <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={onClose}></TouchableOpacity>
      <View style={styles.modalWrapper}>
        <Animated.View style={[styles.modalContainer, { opacity: fadeAnim }]}>
          <Animated.View style={[styles.modalContent, { transform: [{ scale: scaleAnim }] }]}>{children}</Animated.View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    height: "100%",
    top: 0,
    width: "100%",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  modalWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center"
  },
  modalContent: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    flexGrow: 1,
    flexShrink: 1
  }
});

export default ModalContent;
