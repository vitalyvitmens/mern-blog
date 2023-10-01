import { Layout } from './components'
import { Routes, Route } from 'react-router-dom'
import {
	AddPostPage,
	EditPostPage,
	LoginPage,
	MainPage,
	PostPage,
	PostsPage,
	RegisterPage,
} from './pages'

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/posts" element={<PostsPage />} />
				<Route path=":id" element={<PostPage />} />
				<Route path=":id/edit" element={<EditPostPage />} />
				<Route path="new" element={<AddPostPage />} />
				<Route path="register" element={<RegisterPage />} />
				<Route path="login" element={<LoginPage />} />
			</Routes>
		</Layout>
	)
}

export default App
