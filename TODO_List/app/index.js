import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	FlatList,
	StyleSheet,
} from "react-native";

export default function App() {
	// contient la valeur de l'input //
	const [task, setTask] = useState("");
	// contient l'ensemble de tasks crées //
	const [tasks, setTasks] = useState([]);
	// permet de retrouver la task ciblée lors d'une édition //
	const [editIndex, setEditIndex] = useState(-1);

	// @click add task //
	function handleAddTask() {
		if (task) {
			// ajouter une nouvelle tache //
			if (editIndex === -1) {
				setTasks([...tasks, task]);
				setTask("");
			}
			// éditer une tache existante //
			if (editIndex !== -1) {
				const copy = [...tasks];
				copy[editIndex] = task;
				setTasks([...copy]);
				setTask("");
				setEditIndex(-1);
			}
		}
	}

	// @click edit //
	function handleEditTask(index) {
		setTask(tasks[index]);
		setEditIndex(index);
	}

	// @click delete //
	function handleDeleteTask(index) {
		const copy = [...tasks];
		setTasks(copy.filter((element, i) => i !== index));
	}

	// display all tasks //
	function getListELement({ item, index }) {
		return (
			<View style={style.task_container}>
				<Text style={style.task_text}>{item}</Text>

				<View style={style.task_buttons}>
					<TouchableOpacity
						style={style.edit_button}
						onPress={() => handleEditTask(index)}>
						<Text style={style.edit_button_text}>Editer</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={style.delete_button}
						onPress={() => handleDeleteTask(index)}>
						<Text style={style.delete_button_text}>Supprimer</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}

	// display component //
	return (
		<View style={style.container}>
			{/* HEADER */}
			<View style={style.title_container}>
				<Text style={style.title}>Todo List</Text>
			</View>

			{/* input + button */}
			<View style={style.form_container}>
				<TextInput
					style={style.input}
					value={task}
					onChangeText={(value) => setTask(value)}
				/>
				<TouchableOpacity style={style.button} onPress={handleAddTask}>
					<Text style={style.button_text}>Ajouter</Text>
				</TouchableOpacity>
			</View>

			{/* Iteration rendering */}
			<FlatList data={tasks} renderItem={getListELement} />
		</View>
	);
}

// Feuille de style //
const style = StyleSheet.create({
	container: {
		flex: 1,
	},
	title_container: {
		flexDirection: "row",
		justifyContent: "center",
		paddingVertical: 12,
		backgroundColor: "#eee",
		marginBottom: 40,
	},
	title: {
		fontSize: 32,
		color: "#333",
	},
	form_container: {
		paddingHorizontal: 20,
	},
	input: {
		width: "100%",
		height: 40,
		borderWidth: 2,
		borderColor: "#333",
		marginBottom: 20,
		borderRadius: 12,
		paddingHorizontal: 12,
		fontSize: 16,
		fontWeight: "bold",
	},
	button: {
		width: "100%",
		height: 40,
		justifyContent: "center",
		backgroundColor: "#eee",
		borderRadius: 12,
		marginBottom: 40,
		backgroundColor: "brown",
	},
	button_text: {
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
		color: "white",
	},
	task_container: {
		width: "100%",
		height: 40,
		paddingHorizontal: 28,
		flexDirection: "row",
	},
	task_text: {
		fontSize: 22,
		flex: 1,
	},
	task_buttons: {
		flexDirection: "row",
		gap: 20,
	},
	edit_button: {
		height: "100%",
		justifyContent: "center",
	},
	delete_button: {
		height: "100%",
		justifyContent: "center",
	},
	edit_button_text: {
		fontSize: 10,
		color: "green",
	},
	delete_button_text: {
		fontSize: 10,
		color: "crimson",
	},
});
