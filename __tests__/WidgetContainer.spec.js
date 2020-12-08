import React from 'react';
import {render} from 'react-native-testing-library';
import WidgetContainer from '../src/testing/WidgetContainer';
import api from '../src/testing/api'

jest.mock('../src/testing/api')

describe.only('WidgetContainer', () => {
  it.only('loads widget upon mount', async() => {
    api.get.mockResolvedValue({
      data: [
        {id: 1, name: 'Widget 1'},
        {id: 2, name: 'Widget 2'},
      ]
    });
    const {findByText} = render(<WidgetContainer />)

    // expect(queryByText('Widget 1')).not.toBeNull()
    // expect(queryByText('Widget 2')).not.toBeNull()
    await findByText('Widget 1');
    await findByText('Widget 2');
  })
})