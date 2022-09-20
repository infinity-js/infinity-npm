import { expect } from 'chai';
import { AlreadyExistsException } from '../../exceptions/already-exists.exception';

describe('AlreadyExistsException', () => {
  let exception: AlreadyExistsException;

  beforeEach(() => {
    exception = new AlreadyExistsException({
      message: 'Test Exception Message',
      portugueseMessage: 'Test Exception Message PT',
    });
  });

  it('should be defined', () => {
    expect(exception).to.be.instanceOf(AlreadyExistsException);
  });

  it('should have a name', () => {
    expect(exception.name).to.be.equal(
      'InfinityException: AlreadyExistsException',
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
    expect(exception.statusCode).to.be.equal(400);
  });

  it('should have a rpcCode', () => {
    expect(exception.rpcCode).to.be.equal(6);
  });

  it('should have a errorId', () => {
    expect(exception.errorId).to.exist;
  });
});
