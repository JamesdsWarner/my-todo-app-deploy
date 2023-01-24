import React from 'react';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import TodoPostit from '../Postit/TodoPostit/TodoPostit.component';
import PrePostit from '../Postit/PrePostit/PrePostit.component';
import toast from 'react-hot-toast';
import * as Styled from './TodoPostits.styles';

const TodoPostits = () => {
	const [postitsArray, setPostitsArray] = useState([]);
	const [colourNumber, setColourNumber] = useState(0);
	const [isAddingNew, setIsAddingNew] = useState(false);
	const [newTask, setNewTask] = useState('');
	const [newTaskColour, setNewTaskColour] = useState();
	const [newRotate, setNewRotate] = useState();

	function randomIntFromInterval(min, max) {
		// min and max included
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	const addNewTask = async e => {
		if (newTask.length <= 0) {
			toast.error('Task is empty');
			return;
		}
		try {
			const { data } = await axios.post('/api/tasks', {
				title: newTask,
				colour: newTaskColour,
				rotate: newRotate,
			});
			toast.success('New Task Created');
			setPostitsArray([{ ...data }, ...postitsArray]);
			setNewTask('');
			setIsAddingNew(false);
		} catch (err) {
			console.log(err);
		}
	};

	const { isGuest } = useContext(GlobalContext);

	const getTasks = async () => {
		try {
			const { data } = await axios.get('/api/tasks/myTasks');
			setPostitsArray(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
		} catch (err) {
			console.log(err);
		}
	};

	const addNewButtonClick = () => {
		setNewRotate(randomIntFromInterval(-3, 3));

		window.scroll({ top: 150, left: 150 });
		setNewTaskColour(colours[colourNumber]);
		setIsAddingNew(!isAddingNew);
		setNewTask('');
		if (colourNumber !== 4) {
			setColourNumber(colourNumber + 1);
		} else {
			setColourNumber(0);
		}
	};

	useEffect(() => {
		getTasks();
	}, []);

	const deleteTask = async id => {
		try {
			await axios.delete(`/api/tasks/${id}`);
			toast.success('Task Deleted');
			setPostitsArray(postitsArray.filter(task => task._id !== id));
		} catch (err) {
			console.log(err);
		}
	};

	const colours = {
		0: 'yellow',
		1: 'pink',
		2: 'blue',
		3: 'orange',
		4: 'green',
	};

	{
		return (
			<Styled.TodoPostitsWrapper>
				<Styled.TodoPostitsContainer>
					{isAddingNew && (
						<PrePostit
							addNewTask={addNewTask}
							setNewTask={setNewTask}
							newTask={newTask}
							new={true}
							newTaskColour={newTaskColour}
							setNewTaskColour={setNewTaskColour}
							addNewButtonClick={addNewButtonClick}
							rotateDeg={newRotate}
						/>
					)}
					{postitsArray.map(
						isGuest
							? (postit, i)
							: task => {
									return (
										<TodoPostit
											postitValue={isGuest ? postit : task.title}
											setPostitsArray={setPostitsArray}
											postitsArray={postitsArray}
											key={isGuest ? i : task._id}
											index={isGuest ? i : task._id}
											colour={isGuest ? postit.colour : task.colour}
											isGuest={isGuest}
											completed={task.completed}
											deleteTask={deleteTask}
											new={false}
											rotateDeg={task.rotate}
										/>
									);
							  }
					)}
				</Styled.TodoPostitsContainer>
				{postitsArray.length < 1 && !isAddingNew === true && (
					<Styled.AddPostitHeader>
						Click the &quot;+&quot; button below to add a postit note...
					</Styled.AddPostitHeader>
				)}
				<Styled.AddPostitButton
					onClick={addNewButtonClick}
					postitsArrayLength={postitsArray.length}
				>
					<Styled.AddRemoveIcon icon={isAddingNew ? faMinus : faPlus} />
				</Styled.AddPostitButton>
			</Styled.TodoPostitsWrapper>
		);
	}
};

export default TodoPostits;
