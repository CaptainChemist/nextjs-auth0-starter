# Nextjs Auth0 Starter

This is a starter project that integrates Auth0 with Next.js so that you can have a solid base to build your web application from.

If you are just interested in the code, feel free to just use the latest commit. If you'd like to see how we get to this point, I posted a Youtube video that shows step-by-step how to add Auth0 to a new Next.js application:

[How to add Auth0 to Nextjs- the Ultimate Guide](https://www.youtube.com/watch?v=vrj9gCSjzw0)

**Features:**

- Next.js 9.3
- Ant Design
- Auth0 using the nextjs-auth0 library
- Typescript

We start with a Typescript Next.js App and add Ant Design so that we have a nice UI layout to work with.

Next we add a layout and a navbar with login, logout, home, and profile buttons.

We utilize the nextjs-auth0 and the wonderful examples that they provide over on their [github page](https://github.com/auth0/nextjs-auth0) to create Next.js api endpoints for login, logout, redirect, and profile (thanks so much auth0!).

Finally, we utilize a react.js provider component to house the user state information which allows us to access whether the user is logged in or not and their profile information.

# How to use this repo

1. Clone this repo onto your computer and check out the `start-here` tag.
2. Check out the [How to add Auth0 to Nextjs- the Ultimate Guide](https://www.youtube.com/watch?v=vrj9gCSjzw0) youtube video that shows how to add Auth0 to a starter Next.js application. Once finished you'll have a fully working Next.js app with user login and profile management all set up.
3. ???
4. Profit!

Check out more related blog posts, courses and videos over at [Codemochi](https://codemochi.com).
