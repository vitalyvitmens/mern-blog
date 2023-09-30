import User from '../models'

// Register user
export const register = async (req, res) => {
  try {
    const { username, password } = req.body

    const isUsed = await User.findOne({ username })

    if (isUsed) {
      // return res.status(402).json({
      return res.json({
        message: 'Данный пользователь уже занят',
      })
    }
  } catch (error) {}
}
// Login user
export const login = async (req, res) => {
  try {
  } catch (error) {}
}
// Get Me
export const getMe = async (req, res) => {
  try {
  } catch (error) {}
}
