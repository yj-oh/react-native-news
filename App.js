import React from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
	const [category, setCategory] = React.useState('all');

	return (
		<>
			<Categories category={category} setCategory={setCategory} />
			<NewsList category={category} />
		</>
	);
};

export default App;
