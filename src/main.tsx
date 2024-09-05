import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import store from './app/store.ts';
import { Provider } from 'react-redux';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			{/* <ReactReduxContext.Provider> */}
			<App />
			{/* </ReactReduxContext.Provider> */}
		</Provider>
	</StrictMode>,
);
