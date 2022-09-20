import { expect } from 'chai';
import { InternalException } from '../../exceptions/internal.exception';

describe('InternalException', () => {
  let exception: InternalException;

  beforeEach(() => {
    exception = new InternalException({
      message: 'Test Exception Message',
      portugueseMessage: 'Test Exception Message PT',
    });
  });

  it('should be defined', () => {
    expect(exception).to.be.instanceOf(InternalException);
  });

  it('should have a name', () => {
    expect(exception.name).to.be.equal('InfinityException: InternalException');
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
    expect(exception.statusCode).to.be.equal(500);
  });

  it('should have a rpcCode', () => {
    expect(exception.rpcCode).to.be.equal(13);
  });

  it('should have a errorId', () => {
    expect(exception.errorId).to.exist;
  });
});
