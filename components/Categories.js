import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const categories = [
	{
		name: 'all',
		text: '전체',
	},
	{
		name: 'business',
		text: '비즈니스',
	},
	{
		name: 'health',
		text: '건강',
	},
	{
		name: 'science',
		text: '과학',
	},
	{
		name: 'technology',
		text: '기술',
	},
];

const styles = StyleSheet.create({
	categories: {
		flexDirection: 'row',
		marginTop: 50,
		paddingVertical: 10,
		backgroundColor: '#eaeaea',
		justifyContent: 'center',
	},
	category: {
		marginHorizontal: 3,
		paddingHorizontal: 5,
		paddingVertical: 15,
		width: '18.5%',
		backgroundColor: '#ffffff',
		borderRadius: 22,
		overflow: 'hidden',
	},
	text: {
		textAlign: 'center',
	},
	activeText: {
		textAlign: 'center',
		fontWeight: 'bold',
		color: '#ff4343',
	},
});

const Categories = ({ category, setCategory }) => {
	return (
		<View style={styles.categories}>
			{categories.map((c) => (
				<Pressable
					key={c.name}
					style={styles.category}
					activeClassName='active'
					onPress={() => setCategory(c.name)}
				>
					<Text
						style={
							category === c.name
								? styles.activeText
								: styles.text
						}
					>
						{c.text}
					</Text>
				</Pressable>
			))}
		</View>
	);
};

export default Categories;
