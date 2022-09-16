import { expect } from 'chai';
import { UnprocessableEntityException } from '../../exceptions/unprocessable-entity.exception';

describe('UnprocessableEntityException', () => {
  let exception: UnprocessableEntityException;

  beforeEach(() => {
    exception = new UnprocessableEntityException({
      entity: 'Test',
      message: 'Test Exception Message',
      portugueseMessage: 'Test Exception Message PT',
    });
  });

  it('should be defined', () => {
    expect(exception).to.be.instanceOf(UnprocessableEntityException);
  });

  it('should have a name', () => {
    expect(exception.name).to.be.equal(
      'InfinityGlobalException: UnprocessableEntityException (Test)',
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
    expect(exception.statusCode).to.be.equal(422);
  });

  it('should have a rpcCode', () => {
    expect(exception.rpcCode).to.be.equal(3);
  });

  it('should have a errorId', () => {
    expect(exception.errorId).to.exist;
  });
});
