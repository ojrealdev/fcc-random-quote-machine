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
	'When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.',
];

const ItemList = () => {
	const [activeQuote, setActiveQuote] = useState('');

	const changeQuote = () => {
		const quoteIndex = Math.round(Math.random() * 10);
		console.log(Math.round(Math.random() * 10));
		setActiveQuote(quotes[quoteIndex]);
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
				<div id='quote-section'>{activeQuote}</div>
				<div id='author'>
					<p> - Stephen Ochieng</p>
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
