# Ornery Ternary

### Ternary Basics

A ternary can be split into three parts:

``` javascript
const result = weight > 100 ? 'very heavy' : 'fairly light';
//            |  condition  |     value 1    |    value 2    |
```

(Some learners put parens around each of the three, or even a set around the entire ternary to make it clear that it's all going to be one value. The parens are rarely syntactically necessary, but they can be helpful to reasoning about the three parts.)

So let's break it down:

1. **The conditon.** This part should evaluate to a boolean, a `true` or `false`.
2. **Value 1.** This is the value that the entire thing will evaluate to IF the condition evaluated to `true`. Otherwise, this value gets thrown away.
3. **Value 2.** This is the value that the entire thing will evaluate to IF the condition evaluated to `false`. Otherwise, this value gets thrown away.

It helps to think of this in terms of its translation from an `if/else` statment:

``` javascript
let result;
if (weight > 100) {
    result = 'very heavy';
} else {
    result = 'pretty light';
}
```

These two examples will give you the exact same result (although the ternary does allow you to use `const`!), but, of course, the `if` takes many more lines.

Another useful comparison is the binary math operators:

``` javascript
const sum = 5 + 3;
const product = 8 * 6;
const mod = 11 % 2;
```

Like the ternary operator, these binary operators always resolve to one value. It's easier for us to see that with operators we're used to, but you'll get used to that takeaway about ternaries soon enough!

The things to keep in mind about ternaries, in order of how often you'll forget when learning them:

1. They always resolve to one value.
2. Because they're resolving to a value, you have to DO something with that value for them to mean anything.
3. You do NOT want to do anything in a ternary BESIDES resolve to values.

### How Not To Ternary

* Forgetting To USE The Value

``` javascript
// BAD
weight > 100 ? 'very heavy' : 'fairly light';
```

This example doesn't do anything with the value we're resolving to. Besides putting that value in a variable, we might do one of the following with it:

``` javascript
// GOOD
console.log(weight > 100 ? 'very heavy' : 'fairly light');
someArr.push(weight > 100 ? 'very heavy' : 'fairly light');
return weight > 100 ? 'very heavy' : 'fairly light';
```

In each of these cases, you're doing something not with the ternary itself, but with the one value it evaluates to, depending on the condition at the start.

* Performing A Side Effect

``` javascript
weight > 100 ? writeToDB() : readFromDB();
weight > 100 ? console.log('very heavy') : console.log('fairly light');
weight > 100 ? someArr.push('very heavy') : someArr.push('fairly light');
weight > 100 ? return 'very heavy' : return 'fairly light';
```

If you're doing the first example there, running different functions in different cases, what you really want to do is an `if/else`. Yes, it would be slightly longer, but it's a more clear way to write it, and anyone reading a ternary written this way (including yourself a week later!) is going to at best waste a moment re-reading your code to understand its non-standard ternary use, and at worst NOT take that moment, and instead misunderstand what the code does.

The next three examples up there have the exact same result as the three examples in the previous section, but do it with one clear action at the start of the line, performed on the value the ternary evaluates to, as opposed to two actions, one for each value the ternary could evaluate to, and hidden in the middle of the line.

**What it boils down to** is that there are standards to making an easy-to-read ternary--well, easy to read once you get used to the syntax and concept!--and if you don't follow them, you'll end up with a hard-to-read ternary.

* Nested Ternaries

Just don't do them! They can be very difficult to read.

``` javascript
// BAD please don't do this
const result1 = weight > 100 ? 'very heavy' : weight > 50 ? 'kind of heavy' : 'fairly light';
const result2 = weight < 100 ? weight > 50 ? 'kind of heavy' : 'fairly light' : 'very heavy';
```

It's generally accepted that nested ternaries are very difficult to read. Both of these examples do the same thing as this, clearer version using `if/else`:

``` javascript
let result;
if (weight > 100) {
    result = 'very heavy';
} else if (weight > 50) {
    result = 'kind of heavy';
} else {
    result = 'fairly light';
}
```

There are other alternatives to nested ternaries. Just... not nested ternaries.

Just... no. Please.


### And Finally, Your Tasks

Do not use `if` for any of the below. Only ternaries!

1.  Write a function called `isItColin` that, given the string `Colin`, returns the string `Yes, that is Colin.` and otherwise returns the string `No, that is not Colin.`.
2. Write a function called `isHot` that returns the string `Yes, it is indeed hot.` if the temperature is at or above 80, and the string `No, it is not hot.` otherwise.
3. Write a function called `helloThere` that returns a short greeting given a name with more than 5 characters and a longer greeting given a name of 5 characters or fewer. The short greeting should be the string `Hi` and the given name, separated by a comma and a space. The long greeting should be the string `Hello` and the given name, separated by a comma and a space.
4. Write a function called `goodbyeYou` that, given a name, returns the string `Goodbye` followed by the name, with a comma and space in between. If no parameter is given, substitute the string `stranger` for their name.
5.  Write a function called `darkAndStormyNight` that returns the string `It was a dark and stormy night.` only if the first parameter is the string `dark` AND the second parameter, representing the rainfall in inches, is greater than `0.5`. If either isn't true, return the string `My usual opening doesn't apply, I guess.`
