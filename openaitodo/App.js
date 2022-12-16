import React, { useState } from 'react';
import {StyleSheet, View, ScrollView, Text, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        setTodos([...todos, { text: newTodo, isCompleted: false }]);
        setNewTodo('');
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((todo, i) => i !== index));
    };

    const toggleCompleted = (index) => {
        setTodos(
            todos.map((todo, i) => {
                if (i === index) {
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted,
                    };
                }
                return todo;
            })
        );
    };

    return (
        <LinearGradient colors={['#ef32d9', '#89fffd']} style={styles.container}>
           <SafeAreaView>
               <View style={styles.header}>
                   <TextInput
                       style={styles.input}
                       placeholder="Add a new todo"
                       value={newTodo}
                       onChangeText={setNewTodo}
                   />
                   <TouchableOpacity style={styles.button} onPress={addTodo}>
                       <Text style={styles.buttonText}>ADD</Text>
                   </TouchableOpacity>
               </View>
               <ScrollView style={styles.todosContainer}>
                   {todos.map((todo, index) => (
                       <LinearGradient
                           key={index}
                           start={{ x: 0, y: 0 }}
                           end={{ x: 1, y: 0 }}
                           colors={['#ffb3ba', '#ffdfba']}
                           style={styles.todo}
                       >
                           <TouchableOpacity style={styles.checkButton} onPress={() => toggleCompleted(index)}>
                               {todo.isCompleted ? (
                                   <Text style={styles.checkText}>✓</Text>
                               ) : (
                                   <Text style={styles.checkText}> </Text>
                               )}
                           </TouchableOpacity>
                           <Text style={[styles.todoText, todo.isCompleted ? styles.completed : null]}>
                               {todo.text}
                           </Text>
                           <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTodo(index)}>
                               <Text style={styles.deleteText}>X</Text>
                           </TouchableOpacity>
                       </LinearGradient>
                   ))}
               </ScrollView>
           </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    input: {
        width: '70%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 5,
    },
    button: {
        width: '20%',
        height: 50,
        backgroundColor: '#333',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
    todosContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        shadowColor: '#333',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
    },
    checkButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkText: {
        fontSize: 20,
    },
    todoText: {
        fontSize: 20,
        marginHorizontal: 10,
    },
    completed: {
        color: '#aaa',
        textDecorationLine: 'line-through',
    },
    deleteButton: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteText: {
        fontSize: 20,
        color: 'red',
    },
});

export default TodoApp;

