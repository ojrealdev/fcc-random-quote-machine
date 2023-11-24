import SearchForm from '@/components/SearchForm';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import AddItemModal from '@/components/AddItemModal';
import AddEventModal from '@/components/AddEventModal';
import { getItems } from '../store/slices/itemSlice';
import { getCurrentEvent, getEvents } from '../store/slices/eventSlice';
import ListEventsModal from '@/components/ListItemEventsModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTumblr } from '@fortawesome/free-brands-svg-icons';

const quotes = [
	{
		quote: 'The only way to do great work is to love what you do.',
		author: 'Steve Jobs',
	},
	{
		quote:
			"In three words I can sum up everything I've learned about life: it goes on.",
		author: 'Robert Frost',
	},
	{
		quote: 'Be yourself; everyone else is already taken.',
		author: 'Oscar Wilde',
	},
	{
		quote:
			'You have within you right now, everything you need to deal with whatever the world can throw at you.',
		author: 'Brian Tracy',
	},
	{
		quote:
			'The future belongs to those who believe in the beauty of their dreams.',
		author: 'Eleanor Roosevelt',
	},
	{
		quote: "Life is what happens when you're busy making other plans.",
		author: 'John Lennon',
	},
	{
		quote:
			'Success is not final, failure is not fatal: It is the courage to continue that counts.',
		author: 'Winston Churchill',
	},
	{
		quote:
			'The only limit to our realization of tomorrow will be our doubts of today.',
		author: 'Franklin D. Roosevelt',
	},
	{
		quote: 'The best way to predict the future is to invent it.',
		author: 'Alan Kay',
	},
	{
		quote:
			'Do not wait to strike till the iron is hot, but make it hot by striking.',
		author: 'William Butler Yeats',
	},
];

const ItemList = () => {
	const [activeQuote, setActiveQuote] = useState('');
	const [quoteIndex, setQuoteIndex] = useState(0);

	const changeQuote = () => {
		const quote = Math.round(Math.random() * 10);
		setQuoteIndex(quote);
		console.log(Math.round(Math.random() * 10));
		setActiveQuote(quotes[quote]);
	};

	useEffect(() => {
		setActiveQuote(quotes[0]);
	}, []);
	return (
		<>
			<div
				id='quote-box'
				class='flex flex-col items-center justify-center h-screen'
			>
				<div id='quote-section'>{quotes[quoteIndex]['quote']}</div>
				<div id='author'>
					<p> - {quotes[quoteIndex]['author']}</p>
				</div>
				<br />
				<div id='btn-section'>
					<div id='tweet-quote'>
						<FontAwesomeIcon icon={faTwitter} />
					</div>
					<div id='tumblr-quote'>
						<FontAwesomeIcon icon={faTumblr} />
					</div>
					<div>
						<button
							id='quote-btn'
							onClick={changeQuote}
						>
							New Quote
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ItemList;
