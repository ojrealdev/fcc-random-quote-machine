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

const ItemList = () => {
	return (
		<>
			<div
				id='quote-box'
				class='flex flex-col items-center justify-center h-screen'
			>
				<div id='quote-section'>
					When I stand before God at the end of my life, I would hope that I
					would not have a single bit of talent left and could say, I used
					everything you gave me.
				</div>
				<div>
					<p> - Stephen Ochieng</p>
				</div>
				<div id='btn-section'>
					<div id='icons-container'>
						<a
							href='twitter.com/intent/tweet'
							id='tweet-quote'
						>
							<FontAwesomeIcon icon={faTwitter} />
						</a>
						<a
							href='twitter.com/intent/tweet'
							id='tweet-quote'
						>
							tweet icon
						</a>
					</div>
					<div>
						<button id='quote-btn'>New Quote</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ItemList;
