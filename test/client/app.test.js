
import './setup-dom'
import test from 'ava'
import React from 'react'
import { shallow, mount } from 'enzyme'

import App from '../../client/components/App'
import Nav from '../../client/components/Nav'
import Add_Recipe from '../../client/components/Add_Recipe'

App.prototype.componentDidMount = () => {}

test.cb('<App />', (t) => {
  const wrapper = shallow(<App />)
  t.is(wrapper.contains('get baked'), true, 'displays logo link')
  t.end()
})


test.cb('<Nav />', (t) => {
  const wrapper = shallow(<Nav />)
  t.is(wrapper.contains('Home'), true, 'displays navbar')
  t.end()
})

test.cb('<Add_Recipe />', (t) => {
  const wrapper = shallow(<Add_Recipe />)
  t.is(wrapper.contains('Add Recipe'), true, 'displays Add Recipe component')
  t.end()
})
