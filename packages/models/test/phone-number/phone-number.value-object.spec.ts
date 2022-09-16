import { expect } from 'chai';
import { PhoneNumber } from '../../phone/phone-number/phone-number.value-object';

describe('Phone Number', () => {
  let phoneNumber: PhoneNumber;

  beforeEach(() => {
    phoneNumber = PhoneNumber.instantiate({
      ddi: '55',
      ddd: '11',
      number: '999999999',
    });
  });

  it('should be defined', () => {
    expect(phoneNumber).to.exist;
  });

  it('should have a ddi', () => {
    expect(phoneNumber.ddi).to.be.equal('55');
  });

  it('should have a ddd', () => {
    expect(phoneNumber.ddd).to.be.equal('11');
  });

  it('should have a number', () => {
    expect(phoneNumber.number).to.be.equal('999999999');
  });

  it('should have a toJSON method', () => {
    expect(phoneNumber.toJSON()).to.be.deep.equal({
      ddi: '55',
      ddd: '11',
      number: '999999999',
    });
  });

  describe('Validation', () => {
    it('should throw an error if ddi is not provided', () => {
      expect(() =>
        PhoneNumber.instantiate({
          ddi: undefined as any,
          ddd: '11',
          number: '999999999',
        }),
      ).to.throw();
    });

    it('should throw an error if ddd is not provided', () => {
      expect(() =>
        PhoneNumber.instantiate({
          ddi: '55',
          ddd: undefined as any,
          number: '999999999',
        }),
      ).to.throw();
    });

    it('should throw an error if number is not provided', () => {
      expect(() =>
        PhoneNumber.instantiate({
          ddi: '55',
          ddd: '11',
          number: undefined as any,
        }),
      ).to.throw();
    });
  });
});
