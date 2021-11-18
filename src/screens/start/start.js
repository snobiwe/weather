import React, { memo, useEffect } from 'react'
import './start.css'
import plant from '../../images/plant.png'
import { RickAndMortyController } from '../../redux/controllers/RickAndMortyController'
import { SlackController } from '../../redux/controllers/slackController'
import { useCharacterName, useCharacterStatus } from '../../redux/selectors'
import store from '../../redux/store'

const Start = memo(({ text, button }) => {
  const character_name = useCharacterName()
  const character_status = useCharacterStatus()

  const rickAndMortyController = new RickAndMortyController()

  useEffect(() => {
    ;(async () => {
      await rickAndMortyController.getCharacter()
    })()
  }, [])

  const slackController = new SlackController()

  useEffect(() => {
    ;(async () => {
      await slackController.getSlack()
    })()
  }, [])

  console.log(store.getState())

  return (
    <div className="start">
      <div className="start_column">
        <h1 className="start_title">{character_name}</h1>
        <h4 className="start_subtitle">{character_status}</h4>
        <p className="start_text">{text}</p>

        <div className="button">{button}</div>
      </div>
      <img src={plant} className="start_photo" alt="plant" />
    </div>
  )
})

export default Start
