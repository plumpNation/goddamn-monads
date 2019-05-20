# Monads in javascript

## Why? Aren't monads better left as a mystery?

Can you explain a monad *to a junior* so they can actually write one themselves?

I can't.

I've decided that finally I want to be able to use the Feynman technique to
explain them, and am starting again at the beginning to see, what have I missed?

Why am I unable to explain them clearly? As Richard Feynman rightly points out,
**I must not understand them well enough**.

https://mattyford.com/blog/2014/1/23/the-feynman-technique-model

SPOILER: I found this while I was working, and found it to be extraordinarily
easy to understand. https://dev.to/theodesp/explain-monads-like-im-five

> A monad acts as a container that abstracts away those quirks in the computations,
> and let[s] us focus more on what we want to do with the contained values.

Sweet christmas. What a fantastic explanation.

## An article to follow along

Starting by running though this article:
https://curiosity-driven.org/monads-in-javascript.

It should be noted that this example uses `bind` as the name of the function that
applies the transform function. I see this as detrimental to the learning process,
and have instead used the function name `transform`. In this way, anybody reading
the code will not need to consider at all if this is in fact the native js bind.

Additionally, looking at the excellent Rambda library we see that bind is used
as a provider of context, similar to only using the first parameter of the
native js bind. So it is certainly not standard to use bind in js as the
transformation function in functional programming.
