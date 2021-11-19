import { useSelector } from 'react-redux'

export const useUsername = () => useSelector((state) => state.user.username)
export const useResponseType = () =>
  useSelector((state) => state.user.response_type)
export const useCharacterName = () =>
  useSelector((state) => state.rickAndMorty.name)
export const useCharacterStatus = () =>
  useSelector((state) => state.rickAndMorty.status)
export const useCharacterImage = () =>
  useSelector((state) => state.rickAndMorty.image)
