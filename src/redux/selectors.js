import { useSelector } from 'react-redux'

export const useUsername = () => useSelector((state) => state.username)
export const useResponseType = () => useSelector((state) => state.response_type)
export const useCharacterName = () => useSelector((state) => state.name)
export const useCharacterLocation = () => useSelector((state) => state.location)
