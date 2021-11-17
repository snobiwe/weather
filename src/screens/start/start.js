import React, { memo, useEffect } from 'react'
import './start.css'
import plant from '../../images/plant.png'
import { RickAndMortyController } from '../../redux/controllers/RickAndMortyController'
import { SlackController } from '../../redux/controllers/slackController'
import {
  useCharacterName,
  useCharacterLocation,
  useResponseType,
  useUsername,
} from '../../redux/selectors'
import store from '../../redux/store'

const Start = memo(({ title, subtitle, text, button }) => {
  const character_name = useCharacterName()
  const character_location = useCharacterLocation()
  const username = useUsername()
  const response_type = useResponseType()

  // const rickAndMortyController = new RickAndMortyController()

  // useEffect(() => {
  //   ;(async () => {
  //     await rickAndMortyController.getCharacter()
  //   })()
  // }, [])

  const slackController = new SlackController()

  useEffect(() => {
    ;(async () => {
      await slackController.getSlack()
    })()
  }, [])

  console.log(character_name)
  console.log(store.getState())
  console.log(username)
  console.log(response_type)

  return (
    <div className="start">
      <div className="start_column">
        <h1 className="start_title">{character_name}</h1>
        <h4 className="start_subtitle">{character_location}</h4>
        <p className="start_text">{text}</p>

        <div className="button">{button}</div>
      </div>
      <img src={plant} className="start_photo" alt="plant" />
    </div>
  )
})

export default Start

//<Start title={'All about plants'}
//subtitle={"We are plantters"}
//text={"Who are we? We are the ones who will tell you all about plants. " +
//"Take a look inside the site and see for yourself. You will learn only the secrets and secrets of your cactus from us." +
//"Even Wikipedia does not know so much."} button={<Button text={"Press me"} />} />,
