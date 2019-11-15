---
key: the_freedom_of_static_typing
title: The Freedom of Static Typing
id: RhWn82dKmICiQulwcVJF
language: English
format: conference
tags:
  - _languages
level: intermediate
speakers:
  - andrew_radev
videoId: qfyhzwYWVn8
presentation: https://speakerdeck.com/andrewradev/the-freedom-of-static-typing
draft: false
---
It's a common idea: Dynamic typing gives you freedom to do whatever you want, but then you suffer mistakes and runtime errors. Static typing limits your freedom, but it leads to fewer bugs, even if it's harder to actually write code.

This isn't entirely false. Yes, it can be quite hard to write a Rust or Haskell program that compiles, enough that it's a running gag in their communities. "But once you get it to compile, it's probably correct!", the joke goes. On the other hand, when writing Ruby or Javascript, you're free to call functions with all sorts of things, and then runtime errors can easily slip into production. That said, it's not as simple as a sliding scale between "freedom" and "safety". Neither of these terms is one-dimensional -- a language feature that restricts your freedom in one way can actually free you in different ways.

I'd like to demonstrate some interesting language features in Rust that make it easier to write code and to express concepts compared to dynamic languages. Features that don't just protect you from shooting your foot, but give you power that's only available within the rules and "limitations" of a statically typed language. Even if you're not familiar with Rust, I hope to focus the examples on the features themselves rather than on the specifics of the language, so come by and let's talk about being (type-safely) free.
