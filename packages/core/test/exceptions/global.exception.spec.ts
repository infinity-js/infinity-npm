import { expect } from 'chai';
import { InfinityGlobalException } from '../../exceptions/global.exception';
describe('GlobalException', () => {
  let exception: InfinityGlobalException;

  beforeEach(() => {
    exception = new InfinityGlobalException({
      name: 'Test Exception',
      message: 'Test Exception Message',
      portugueseMessage: 'Test Exception Message PT',
      rpcCode: 1,
      statusCode: 1,
    });
  });

  it('should be defined', () => {
    expect(exception).to.be.instanceOf(InfinityGlobalException);
  });

  it('should have a name', () => {
    expect(exception.name).to.be.equal(
      'InfinityGlobalException: Test Exception',
    );
  });

  it('should have a message', () => {
    expect(exception.message).to.be.equal('Test Exception Message');
  });

  it('should have a portugueseMessage', () => {
    expect(exception.portugueseMessage).to.be.equal(
      'Test Exception Message PT',
    );
  });

  it('should have a statusCode', () => {
    expect(exception.statusCode).to.be.equal(1);
  });

  it('should have a rpcCode', () => {
    expect(exception.rpcCode).to.be.equal(1);
  });

  it('should have a errorId', () => {
    expect(exception.errorId).to.exist;
  });
});
