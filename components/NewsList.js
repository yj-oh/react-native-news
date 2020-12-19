import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
	Pressable,
	Linking,
} from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
	loading: {
		marginTop: 10,
		paddingHorizontal: 30,
		paddingVertical: 20,
		fontSize: 18,
	},
	header: {
		flexDirection: 'row',
		paddingHorizontal: 20,
	},
	headerText: {
		flex: 1,
		fontWeight: 'bold',
		fontSize: 20,
	},
	headerDatetime: {
		flex: 1,
		lineHeight: 22,
		textAlign: 'right',
	},
	newsList: {
		flex: 1,
		backgroundColor: '#eaeaea',
	},
	newsItem: {
		marginVertical: 10,
		marginHorizontal: 15,
		paddingHorizontal: 20,
		paddingVertical: 20,
		backgroundColor: 'white',
		borderRadius: 3,
	},
	image: {
		height: 200,
	},
	title: {
		marginVertical: 15,
		fontWeight: 'bold',
		fontSize: 20,
	},
	content: {
		lineHeight: 22,
		fontSize: 15,
	},
});

const NewsList = ({ category }) => {
	const [datetime] = useState(new Date());
	const [articles, setArticles] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const query = category === 'all' ? '' : `&category=${category}`;
				const response = await axios.get(
					`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=28878c40f7874160af9a7113f65623aa`,
				);
				setArticles(response.data.articles);
			} catch (e) {
				console.log(e);
			}
			setLoading(false);
		};
		fetchData();
	}, [category]);

	return (
		<ScrollView style={styles.newsList}>
			<View style={styles.header}>
				<Text style={styles.headerText}>이 시각 주요 뉴스</Text>
				<Text style={styles.headerDatetime}>
					{datetime.toLocaleDateString('ko-KR') +
						'  ' +
						datetime.toLocaleTimeString()}
				</Text>
			</View>
			{loading ? (
				<Text style={styles.loading}>⏳ Loading...</Text>
			) : (
				articles &&
				articles.map((article, index) => (
					<Pressable
						key={index}
						style={styles.newsItem}
						onPress={() => {
							Linking.openURL(article.url);
						}}
					>
						<Image
							source={{ url: article.urlToImage }}
							style={styles.image}
						/>
						<Text style={styles.title}>{article.title}</Text>
						<Text style={styles.content}>
							{article.description}
						</Text>
					</Pressable>
				))
			)}
		</ScrollView>
	);
};

export default NewsList;
