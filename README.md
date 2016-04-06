# Gitinou

## Beautiful GitHub user activity visualization

So actually this isn't a serious super big project like [Soft CSS](https://github.com/Rominou34/soft-css), I just wanted to put a summary on my GitHub activity on my portfolio, and then I thought about extending it using the GitHub API in order to display commits infos.

This serves me as a good way to train about parsers, as I have to parse the patch's content in order to display the additions / deletions.

## What does it do ?

Currently, it parses the data in `data.js`, which is a commit I downloaded from the API ( in order to work locally ), and it puts additions in green, and deletions in red.
