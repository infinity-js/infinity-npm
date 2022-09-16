import { expect } from 'chai';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { validateEntity } from '../../validation/validate-entity';

class Foo {
  @IsString()
  //@ts-ignore
  bar!: string;
}

class EntityToValidateData {
  @IsString()
  //@ts-ignore
  name!: string;

  @IsNumber()
  //@ts-ignore
  age!: number;

  @IsBoolean()
  //@ts-ignore
  isAlive!: boolean;

  @IsString({ each: true })
  //@ts-ignore
  hobbies!: string[];

  @Type(() => Foo)
  @ValidateNested()
  //@ts-ignore
  foo!: Foo;

  @Type(() => Foo)
  @ValidateNested()
  @IsArray()
  //@ts-ignore
  foos!: Foo[];
}

describe('ValidateEntity', () => {
  let entity: EntityToValidateData;

  beforeEach(() => {
    entity = {
      name: 'Test',
      age: 10,
      foo: {
        bar: 'Test',
      },
      foos: [
        {
          bar: 'Test',
        },
      ],
      hobbies: ['Test'],
      isAlive: true,
    };
  });

  it('should validate entity', async () => {
    expect(() => validateEntity(EntityToValidateData, entity)).to.not.throw();
  });

  describe('should throw error', () => {
    it('when object is undefined', async () => {
      expect(() => validateEntity(EntityToValidateData, undefined)).to.throw();
    });
    it('when name is not a string', async () => {
      entity.name = 10 as any;
      expect(() => validateEntity(EntityToValidateData, entity)).to.throw(
        `[{"field":"name","message":"name must be a string"}]`,
      );
    });

    it('when age is not a number', async () => {
      entity.age = '10' as any;
      expect(() => validateEntity(EntityToValidateData, entity)).to.throw(
        `[{"field":"age","message":"age must be a number conforming to the specified constraints"}]`,
      );
    });

    it('when isAlive is not a boolean', async () => {
      entity.isAlive = 'true' as any;
      expect(() => validateEntity(EntityToValidateData, entity)).to.throw(
        `[{"field":"isAlive","message":"isAlive must be a boolean value"}]`,
      );
    });

    it('when hobbies is not an array of strings', async () => {
      entity.hobbies = [10] as any;
      expect(() => validateEntity(EntityToValidateData, entity)).to.throw(
        `[{"field":"hobbies","message":"each value in hobbies must be a string"}]`,
      );
    });

    it('when foo is not a Foo', async () => {
      entity.foo = {} as any;
      expect(() => validateEntity(EntityToValidateData, entity)).to.throw(
        `[{"field":"foo.bar","message":"bar must be a string"}]`,
      );
    });

    it('when foo is not a correct foo', async () => {
      entity.foo = {
        bar: 10,
      } as any;
      expect(() => validateEntity(EntityToValidateData, entity)).to.throw(
        `[{"field":"foo.bar","message":"bar must be a string"}]`,
      );
    });

    it('when foos is not an array of Foos', async () => {
      entity.foos = [{}] as any;
      expect(() => validateEntity(EntityToValidateData, entity)).to.throw(
        `[{"field":"foos[0].bar","message":"bar must be a string"}]`,
      );
    });
  });
});
