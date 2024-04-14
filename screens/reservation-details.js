import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import NumberInput from 'react-native-input-spinner';
import DateTimePicker from '@react-native-community/datetimepicker';

const ReservationDetailsScreen = ({ route, navigation }) => {
	const [noOfPeople, setNoOfPeople] = useState(1);
	const [date, setDate] = useState(new Date());
	const [time, setTime] = useState(new Date());

	const { mealType } = route.params;

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>{mealType}</Text>
				<Text style={styles.description}>(8am to 11am)</Text>
			</View>
			<View style={styles.content}>
				<Text>
					A balanced breakfast can include a variety of foods like
					whole grains, protein, fruits, and dairy to fuel your body
					and improve cognitive function.
				</Text>

				<View style={styles.form}>
					<Text style={styles.label}>How many people?</Text>
					<NumberInput
						max={4}
						min={1}
						value={noOfPeople}
						onChange={(num) => setNoOfPeople(num)}
						colorMax='#FF0000'
						colorMin='#FF0000'
					/>

					<Text style={styles.label}>Date</Text>
					<DateTimePicker
						value={new Date()}
						// onChange={(_, date) => setDate(date)}
						style={{ marginRight: 'auto' }}
					/>

					<Text style={styles.label}>Time</Text>
					<DateTimePicker
						mode='time'
						value={new Date()}
						// onChange={(_, date) => setTime(date)}
						style={{ marginRight: 'auto' }}
					/>

					<Pressable
						style={styles.button}
						onPress={() =>
							navigation.navigate('ReservationSummary')
						}
					>
						<Text style={styles.btnText}>Select Table</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	header: {
		height: '30%',
		backgroundColor: '#FF0000',
		justifyContent: 'flex-end',
		padding: 16,
	},
	title: {
		color: '#FFFFFF',
		fontSize: 32,
		fontWeight: 'bold',
		marginVertical: 8,
	},
	description: {
		fontSize: 16,
		color: '#FFFFFF',
	},
	content: {
		padding: 16,
	},
	form: {
		marginVertical: 32,
	},
	button: {
		borderRadius: 16,
		paddingVertical: 16,
		paddingHorizontal: 24,
		marginVertical: 16,
		width: '100%',
		backgroundColor: '#FF0000',
		marginTop: 64,
	},
	btnText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontSize: 16,
		fontWeight: 'bold',
	},
	label: {
		marginVertical: 8,
		fontSize: 16,
	},
});

export default ReservationDetailsScreen;
