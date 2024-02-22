import { TruncatePipe } from './truncate.pipe';

describe('Given the pipe TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  describe('When I use the transform method', () => {
    it('Then, should truncate the string if it exceeds the max length', () => {
      const value = 'Lorem ipsum dolor sit amet';
      const maxLength = 10;
      const expectedResult = 'Lorem i...';

      const result = pipe.transform(value, maxLength);

      expect(result).toEqual(expectedResult);
    });

    it('Then, should return the original string if its length is less than or equal to the max length', () => {
      const value = 'Short text';
      const maxLength = 20;

      const result = pipe.transform(value, maxLength);

      expect(result).toEqual(value);
    });
  });
});
