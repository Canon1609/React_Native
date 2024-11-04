import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './redux/taskSlice';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ddd' }}>
          <Text style={{ fontSize: 18 }}>{item.Title}</Text>
          <Text style={{ fontSize: 18 }}>{item.jobName}</Text>
        </View>
      )}
    />
  );
};

export default TaskList;
