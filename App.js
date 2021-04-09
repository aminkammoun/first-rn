import React, { useState } from "react";
import GoalItem from "./components/goalItem";
import GoalInput from "./components/goalInput";
import { StyleSheet, View, Button, FlatList } from "react-native";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModal, setIsModal] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
    setIsModal(false);
    console.log(isModal);
  };
  const removeGoal = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };
  const onCancel = () => {
    setIsModal(false);
  };
  return (
    <View style={styles.screen}>
      <Button title="add Goal" onPress={() => setIsModal(true)} />
      <GoalInput
        onCancel={onCancel}
        isModal={isModal}
        addGoalHandler={addGoalHandler}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={courseGoals}
        renderItem={({ item, index }) => (
          <GoalItem onDelete={removeGoal} item={item.value} index={item.id} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
