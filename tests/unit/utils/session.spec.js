import { getCache, setCache, removeCache } from '@/utils/session';

describe('Utils:session', () => {
  const key = 'testToken';
  beforeEach(() => {
    removeCache(key);
  });
  it('setCache and getCache Number', () => {
    const num = 985;
    setCache(key, num);
    expect(getCache(key)).toBe(985);
  });

  it('setCache and getCache String', () => {
    const str = 'PHP是世界上最好的语言';
    setCache(key, str);
    expect(getCache(key)).toBe('PHP是世界上最好的语言');
  });

  it('setCache and getCache Boolean', () => {
    const bool = false;
    setCache(key, bool);
    expect(getCache(key)).toBeFalsy();
  });

  it('setCache and getCache Null', () => {
    setCache(key, null);
    expect(getCache(key)).toBeNull();
  });

  it('setCache and getCache Undefined', () => {
    setCache(key, undefined);
    expect(getCache(key)).toBeUndefined();
  });

  it('setCache and getCache Object', () => {
    const obj = {
      name: 'luck'
    };
    setCache(key, obj);
    expect(getCache(key).name).toBe('luck');
  });

  it('setCache and getCache Array', () => {
    const arr = [1, 2, 3, 4, 5];
    setCache(key, arr);
    expect(getCache(key).length).toBe(5);
  });

  it('removeCache', () => {
    setCache(key, '123456');
    expect(getCache(key)).toBe('123456');
    removeCache(key);
    expect(getCache(key)).toBeUndefined();
  });
});
