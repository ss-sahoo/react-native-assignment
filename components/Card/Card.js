import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { BlurView } from "expo-blur";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "./style";

export default function Card({ data, onUpdate }) {
  const [expanded, setExpanded] = useState(false);
  const [name, setName] = useState(data.name || "");
  const [description, setDescription] = useState(data.description || "");
  const [date, setDate] = useState(data.date || null);
  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [dateError, setDateError] = useState("");
  const [savedData, setSavedData] = useState(data);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateCleared, setDateCleared] = useState(false);

  const handleSave = () => {
    if (name && description && date) {
      const newData = { name, description, date };
      setSavedData(newData);
      onUpdate(newData);
      clearErrors();
      setExpanded(false);
    } else {
      validateInputs();
    }
  };

  const handleClear = () => {
    clearErrors();
    setName("");
    setDescription("");
    setDate(null);
    setSavedData({});
    onUpdate({});
    setDateCleared(true);
  };

  const clearErrors = () => {
    setNameError("");
    setDescriptionError("");
    setDateError("");
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
    setDateCleared(false);
  };

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const validateInputs = () => {
    if (!name) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
    if (!description) {
      setDescriptionError("Description is required");
    } else {
      setDescriptionError("");
    }
    if (!date) {
      setDateError("Date is required");
    } else {
      setDateError("");
    }
  };

  const formatDate = (date) => {
    if (!date) return "";
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => setExpanded(!expanded)}
    >
      <BlurView intensity={90} style={styles.cardBlur}>
        {expanded ? (
          <View style={styles.expandedContent}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={(text) => setName(text)}
            />
            {nameError ? (
              <Text style={styles.errorText}>{nameError}</Text>
            ) : null}
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
            {descriptionError ? (
              <Text style={styles.errorText}>{descriptionError}</Text>
            ) : null}
            <TouchableOpacity style={styles.input} onPress={openDatePicker}>
              <Text>
                {date && date.toDateString()}
                {!date && "Enter date"}{" "}
              </Text>
            </TouchableOpacity>
            {dateError ? (
              <Text style={styles.errorText}>{dateError}</Text>
            ) : null}
            {showDatePicker && (
              <DateTimePicker
                value={date || new Date()}
                mode="date"
                display="default"
                onChange={onChangeDate}
              />
            )}
            <View style={styles.buttonContainer}>
              <View style={styles.buttonWrapper}>
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={handleSave}
                >
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonWrapper}>
                <TouchableOpacity
                  style={styles.clearButton}
                  onPress={handleClear}
                >
                  <Text style={styles.buttonText}>Clear</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : savedData && Object.keys(savedData).length > 0 ? (
          <View style={styles.detailsContent}>
            <Text style={styles.cardTitle}>
              Name: <Text style={styles.cardText}>{savedData.name}</Text>
            </Text>
            <Text style={styles.cardTitle}>
              Description:{" "}
              <Text style={styles.cardText}>{savedData.description}</Text>
            </Text>
            <Text style={styles.cardTitle}>
              Date:{" "}
              <Text style={styles.cardText}>
                {savedData.date ? formatDate(savedData.date) : "No date"}
              </Text>
            </Text>
            <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
              <Text style={styles.buttonText}>Clear</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.cardHeading}>Click to expand</Text>
        )}
      </BlurView>
    </TouchableOpacity>
  );
}
