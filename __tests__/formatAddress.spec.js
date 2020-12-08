
import formatAddress from '../src/testing/formatAddress';

describe('formatAddress', () => {
  it('returns the formatted address', () => {
    const addressObject = {
      street1: '123 Main Street',
      street2: 'Apartment 456',
      city: 'Atlanta',
      state: 'GA',
      zip: '30307',
    };

    const result = formatAddress(addressObject)
    const expected = '123 Main Street\nApartment 456\nAtlanta, GA 30307'

    expect(result).toEqual(expected)
  })

  it('returns the formatted address without street2', () => {
    const addressObject = {
      street1: '123 Main Street',
      city: 'Atlanta',
      state: 'GA',
      zip: '30307',
    };

    const result = formatAddress(addressObject)
    const expected = '123 Main Street\nAtlanta, GA 30307'

    expect(result).toEqual(expected)
  })

  it('returns the formatted address without street1', () => {
    const addressObject = {
      street2: 'Apartment 456',
      city: 'Atlanta',
      state: 'GA',
      zip: '30307',
    };

    const result = formatAddress(addressObject)
    const expected = '\nApartment 456\nAtlanta, GA 30307'

    expect(result).toEqual(expected)
  })
})