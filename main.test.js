const {
  isItColin,
  isHot,
  helloThere,
  goodbyeYou,
  darkAndStormyNight,
} = require('./main.js')

describe('isItColin', () => {
  it("returns `Yes, that is Colin.` if passed the string `Colin`.", () => {
    expect(isItColin('Colin')).toBe('Yes, that is Colin.');
  })

  it("returns `No, that is not Colin.` if passed a value that is NOT the string `Colin`.", () => {
    expect(isItColin('Anthony')).toBe('No, that is not Colin.');
    expect(isItColin('Mesuara')).toBe('No, that is not Colin.');
    expect(isItColin('still not Colin')).toBe('No, that is not Colin.');
  })
})

describe('isHot', () => {
  it("returns `Yes, it is indeed hot.` if passed a temperature above 80.", () => {
    expect(isHot(81)).toBe('Yes, it is indeed hot.');
  })

  it("returns `Yes, it is indeed hot.` if passed a temperature of 80.", () => {
    expect(isHot(80)).toBe('Yes, it is indeed hot.');
  })
  
  it("returns `No, it is not hot.` if passed a temperature below 80.", () => {
    expect(isHot(79)).toBe(`No, it is not hot.`);
  })
})

describe('helloThere', () => {
  it("given a name shorter than 6 characters, returns a longer greeting", () => {
    const name = 'Colin';
    expect(helloThere(name)).toBe('Hello, Colin')
  })

  it("given a name of at least 6 characters, returns a shorter greeting", () => {
    const name = 'Mesuara';
    expect(helloThere(name)).toBe('Hi, Mesuara')
  })
})

describe('goodbyeYou', () => {
  it("given a name, returns a goodbye", () => {
    const name = 'Colin';
    expect(goodbyeYou(name)).toBe('Goodbye, Colin')
  })

  it("given no name, returns a generic goodbye", () => {
    expect(goodbyeYou()).toBe('Goodbye, stranger')
  })
})

describe('darkAndStormyNight', () => {
  it("returns the string 'It was a dark and stormy night.' if given a string that is exactly 'dark' and a rainfall that is aboe `0.5`.", () => {
    const brightness1 = 'dark';
    const rainfall1 = 1;
    const brightness2 = 'dark';
    const rainfall2 = 0.6;
    const brightness3 = 'dark';
    const rainfall3 = 0.51;
    expect(darkAndStormyNight(brightness1, rainfall1)).toBe('It was a dark and stormy night.')
    expect(darkAndStormyNight(brightness2, rainfall2)).toBe('It was a dark and stormy night.')
    expect(darkAndStormyNight(brightness3, rainfall3)).toBe('It was a dark and stormy night.')
  })

  it("return `My usual opening doesn't apply, I guess.` if the string isn't `dark` and the rainfall is less than or equal to `0.5`", () => {
    const brightness1 = 'bright';
    const rainfall1 = -1;
    const brightness2 = 'darker';
    const rainfall2 = 0.4;
    const brightness3 = 'darkest';
    const rainfall3 = 0.49;
    expect(darkAndStormyNight(brightness1, rainfall1)).toBe(`My usual opening doesn't apply, I guess.`)
    expect(darkAndStormyNight(brightness2, rainfall2)).toBe(`My usual opening doesn't apply, I guess.`)
    expect(darkAndStormyNight(brightness3, rainfall3)).toBe(`My usual opening doesn't apply, I guess.`)
  })

  it("return `My usual opening doesn't apply, I guess.` if the string isn't `dark` OR the rainfall is less than or equal to `0.5`", () => {
    const brightness1 = 'dark';
    const rainfall1 = -1;
    const brightness2 = 'darker';
    const rainfall2 = 0.6;
    expect(darkAndStormyNight(brightness1, rainfall1)).toBe(`My usual opening doesn't apply, I guess.`)
    expect(darkAndStormyNight(brightness2, rainfall2)).toBe(`My usual opening doesn't apply, I guess.`)
  })
})
