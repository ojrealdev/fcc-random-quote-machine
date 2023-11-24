import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store/store';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }) => (
	<>
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	</>
);

export default MyApp;
