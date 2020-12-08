import React from 'react'
import { Text } from 'react-native'
import { render } from 'react-native-testing-library'

const Hello = () => <Text>Hello, world</Text>

describe('Hello Component', () => {
  it('renders the correct message', () => {
    const {queryByText} = render(<Hello />)
    expect(queryByText('Hello, world')).not.toBeNull()
  })
})