import operate from '../../logic/operate';

describe('performs operations of a calculator', () => {
  it('adds 2 numbers', () => {
    expect(operate(1, 3, '+')).toBe('4');
  });
  it('subtracts 1 number from another', () => {
    expect(operate(5, 4, '-')).toBe('1');
  });

  it('multiplies 2 numbers', () => {
    expect(operate(1, 1, 'x')).toBe('1');
  });

  it('divides 1 number from another', () => {
    expect(operate(12, 4, '÷')).toBe('3');
  });
});
