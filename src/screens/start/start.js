import React, { memo, useEffect } from 'react'
import './start.css'
import plant from '../../images/plant.png'
import { RickAndMortyController } from '../../redux/controllers/RickAndMortyController'
import { SlackController } from '../../redux/controllers/slackController'
import { useCharacterImage } from '../../redux/selectors'

const Start = memo(({ text, button, title, subtitle }) => {
  const character_image = useCharacterImage()
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

  return (
    <div className="start">
      <div className="start_column">
        <h1 className="start_title">{title}</h1>
        <h4 className="start_subtitle">{subtitle}</h4>
        <p className="start_text">{text}</p>

        <div className="button">{button}</div>
      </div>
      <img src={character_image || plant} className="start_photo" alt="plant" />
    </div>
  )
})

export default Start
