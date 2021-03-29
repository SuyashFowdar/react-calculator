import calculate from '../../logic/calculate';

describe('an object', () => {
  it("updates the properties of the object, for buttonName '+/-'", () => {
    const obj = {
      total: 0,
      next: 0,
      operation: '+/-',
    };
    const { total, next } = calculate(obj, '+/-');
    expect(total).toEqual(0);
    expect(next).toEqual(0);
  });

  it("updates the properties of the object, for buttonName '+'", () => {
    const obj = {
      total: 2,
      next: 3,
      operation: '+',
    };
    const { total } = calculate(obj, '+');
    expect(total).toEqual('5');
  });

  it("updates the properties of the object, for buttonName 'x'", () => {
    const obj = {
      total: 2,
      next: 3,
      operation: 'x',
    };
    const { total } = calculate(obj, 'x');
    expect(total).toEqual('6');
  });

  it("updates the properties of the object, for buttonName '-'", () => {
    const obj = {
      total: 5,
      next: 3,
      operation: '-',
    };
    const { total } = calculate(obj, '-');
    expect(total).toEqual('2');
  });

  it("updates the properties of the object, for buttonName '÷'", () => {
    const obj = {
      total: 6,
      next: 3,
      operation: '÷',
    };
    const { total } = calculate(obj, '÷');
    expect(total).toEqual('2');
  });

  it("updates the properties of the object, for buttonName '%'", () => {
    const obj = {
      total: 6,
      operation: '%',
    };
    const { total } = calculate(obj, '%');
    expect(total).toEqual('0.06');
  });
});
