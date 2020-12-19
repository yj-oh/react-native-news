import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#eaeaea',
	},
});

const App = () => {
	const [category, setCategory] = React.useState('all');

	return (
		<>
			<SafeAreaView style={styles.container}>
				<Categories category={category} setCategory={setCategory} />
			</SafeAreaView>
			<NewsList category={category} />
		</>
	);
};

export default App;
