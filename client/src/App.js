import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
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
import { ToastContainer } from 'react-toastify'
import { getMe } from './redux/features/auth/authSlice'
import 'react-toastify/dist/ReactToastify.css'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getMe())
	}, [])

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

			<ToastContainer position="bottom-right" />
		</Layout>
	)
}

export default App
