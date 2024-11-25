import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

export default function HomeScreen() {
  // Form state
  const [form, setForm] = useState({
    name: '',
    contact: '',
    date: '',
    signature: '',
  });

  // Handle input change
  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  // Submit form data
  const handleSubmit = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        Alert.alert('Success', 'Form submitted successfully!');
        setForm({ name: '', contact: '', date: '', signature: '' }); // Reset form
      } else {
        Alert.alert('Error', 'Failed to submit form.');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
      source={{ uri: 'https://img1.wsimg.com/isteam/ip/bb17b4e7-9648-4211-825a-ccf593c5210e/logo%201.png' }}
      style={styles.logo}
      />
      <Text style={styles.title}>Disclaimer Form</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={form.name}
        onChangeText={(text) => handleChange('name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        keyboardType="phone-pad"
        value={form.contact}
        onChangeText={(text) => handleChange('contact', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        value={form.date}
        onChangeText={(text) => handleChange('date', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Signature (Type your name)"
        value={form.signature}
        onChangeText={(text) => handleChange('signature', text)}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F9FAFB',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#D1D5DB',
    borderWidth: 1,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
