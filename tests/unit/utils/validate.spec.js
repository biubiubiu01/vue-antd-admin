import { isPhone, isPassWord, isCode } from '@/utils/validate';

describe('Utils:validate', () => {
  it('value is or not phone', () => {
    const value = '13888888888';
    const notValue = '996';
    expect(isPhone(value)).toBe(true);
    expect(isPhone(notValue)).toBe(false);
  });

  it('value is or not password', () => {
    const value = '666666';
    const notValue = '//996*。';
    expect(isPassWord(value)).toBe(true);
    expect(isPassWord(notValue)).toBe(false);
  });

  it('value is or not code', () => {
    const value = '123456';
    const notValue = 'best php';
    expect(isCode(value)).toBe(true);
    expect(isCode(notValue)).toBe(false);
  });
});
