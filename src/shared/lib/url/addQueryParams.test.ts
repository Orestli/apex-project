import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
  it('test with one param', () => {
    const params = getQueryParams({
      test: 'value',
    });

    expect(params).toBe('?test=value');
  });

  it('test with multiple params', () => {
    const params = getQueryParams({
      test: 'value',
      query: 'value',
    });

    expect(params).toBe('?test=value&query=value');
  });

  it('test with undefined', () => {
    const params = getQueryParams({
      test: 'value',
      query: undefined,
    });

    expect(params).toBe('?test=value');
  });
});
