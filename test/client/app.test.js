
import './setup-dom'
import test from 'ava'
import React from 'react'
import { shallow, mount } from 'enzyme'

import App from '../../client/components/App'

App.prototype.componentDidMount = () => {}

test.cb('<App />', (t) => {
  const wrapper = shallow(<App />)
  t.is(wrapper.contains('get baked'), true, 'displays logo link')
  t.end()
})
