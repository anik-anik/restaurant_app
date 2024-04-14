import { Pressable, FlatList, Text, Dimensions } from 'react-native';

const TypeSelectionScreen = ({ navigation }) => {
	const numOfColumns = 2;
	const size = Dimensions.get('window').width / numOfColumns;

	const data = [
		{
			title: 'Breakfast',
			image: '',
		},
		{
			title: 'Lunch',
			image: '',
		},
		{
			title: 'Dinner',
			image: '',
		},
		{
			title: 'Snacks',
			image: '',
		},
	];

	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.title}
			numColumns={numOfColumns}
			renderItem={({ item }) => (
				<Pressable
					onPress={() => {
						navigation.navigate('ReservationDetails', {
							mealType: item.title,
						});
					}}
					style={{ height: size, width: size }}
				>
					<Text>{item.title}</Text>
				</Pressable>
			)}
			style={{ flex: 1, backgroundColor: '#FFFFFF', padding: 16 }}
		/>
	);
};

export default TypeSelectionScreen;
