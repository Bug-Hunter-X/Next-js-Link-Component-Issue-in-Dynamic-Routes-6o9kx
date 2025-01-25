# Next.js Link Component Issue in Dynamic Routes

This repository demonstrates a common issue encountered when using Next.js's Link component within dynamic routes. The problem arises when the `href` prop of the Link component is not properly resolved, leading to incorrect routing behavior.

## Problem

The provided `bug.js` file contains a Link component that should navigate to different pages within a Next.js application. However, when the component is rendered within a dynamic route segment, the links may not behave as intended. For example, the links might fail to resolve or lead to unexpected page redirects.

## Solution

The `bugSolution.js` file provides a solution using `useRouter` to access the current route and construct the correct href dynamically for links. This ensures the Link component consistently works across different routes.