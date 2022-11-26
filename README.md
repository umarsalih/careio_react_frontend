**Table Of Contents**
1. [Useful Commands](#useful-commands): React, Sass
2. [Our Links](#our-links)
3. [Tasks](#tasks)
4. [Git Commands](#git-commands)
    4.1. [Apply your change to your branch](#apply-your-change-to-your-branch)
    4.2. [Getting the changes of everyone to show on ur file](#getting-the-changes-of-everyone-to-show-on-ur-file)
5. [Setup Sass](#setup-sass)

# Useful commands
**React:** `npm i && npm run start`
**Sass:** `sass --watch src/styles/care.scss src/styles/care.css`

# Our Links
[Figma](https://www.figma.com/file/GCVNIcSMJgxy3bP1ltM3Nx/Care.io-Draft-v1.0), [Notion](https://www.notion.so/webcrafterinc/Software-Engineering-Final-Project-3275-Care-io-bdce4811f6584ccfbfc9b516cfd98f55)


---
# Tasks
#### DEEPAK
[ ] test api.js using ApiTester component

#### AMAN:
[ ] my bookings frontend

#### SAL:
[ ] sass
[✓] navigation
    [ ] use <Link>
[ ] signup

#### MACCI:
[ ] setup ApiTest component
[ ] setup api.js
[ ] fix api booking timeStart and timeEnd datatype from string to date
[ ] data templates
    [ ] partners
    [ ] user
    [ ] bookings

---


# Git Commands

## Apply your change to your branch
1. `git add .` - This will stage all your changes
1.1. Check that files with the changes are in green `git status`
2. Commit message should be a statement that follows "This commit will...".
`git commit -m "add urls in tags"`
3. `git push`

## Getting the changes of everyone to show on ur file
1. Make sure the changes in your branch are saved, committed, and pushed. This is will ensure your changes are saved in the repository and that you won't lose it.
2. Go to main branch `git checkout main`
3. Pull the changes `git pull`
4. Go back to your branch `git branch <YOUR BRANCH NAME>`
5. Time to merge! `git merge main`

# Setup SASS

1. Check if you have node `node -v` and `npm -v`
    - Ensure you have node: https://nodejs.org/en/download/
2. Check if you have sass in system `sass -v`
    - If not, install sass `npm install -g sass`
3. In this directory run `sass --watch frontend/styles/main.scss frontend/styles/main.css`
4. Read this documenation for nesting with sass: https://www.w3schools.com/sass/sass_nesting.php

