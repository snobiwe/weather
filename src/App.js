import React, { memo } from 'react'
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Button from './components/button/button.js'
import Start from './screens/start/start'
import Page from './screens/page/page.js'
import store from './redux/store'
import { texts } from './text/text'
import { useCharacterName, useCharacterStatus } from './redux/selectors'
import { Provider } from 'react-redux'

const App = memo(() => {
  const character_name = useCharacterName()
  const character_status = useCharacterStatus()
  console.log(character_status)

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Start
              title={character_name || texts.start.title}
              subtitle={character_status || texts.start.subtitle}
              text={texts.start.text}
              button={<Button path="/page" text={'Press me'} />}
            />
          </Route>

          <Route path="/page">
            <Page
              button={<Button path="/" text={'click please'} />}
              title={texts.page.title}
              subtitle={texts.page.subtitle}
            />
            ,
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
})

export default App
