import Articles from './components/Articles';
import User from './components/User';

function App() {
	return (
		<section className="skeleton-page">
			<header className="header">
				<h1>React Skeletons</h1>
			</header>

			<div className="content">
				<Articles />
				<User />
			</div>
		</section>
	);
}

export default App;
