---
title: Setting up Travis-CI and GitHub for Swift packages
authors: zach
tags: [development, swift, github, travis-ci ]
---

This set of steps is the result of a weekend poking at how to get Travis-CI and GitHub configured to provide a CI
pipeline for Swift packages. It is mostly for future reference for when I next start another Swift project.

# Steps

1. Create a new directory and navigate to it

```bash
mkdir Hello
cd Hello
```

2. Every package must have a manifest file called `Package.swift` in its root directory. You can create a minimal
   package named `Hello` using:

```bash
swift package init
```

3. Build your library with:

```bash
swift build
```

4. Run your tests with:

```bash
swift test
```

5. Initialize your package as a git repo

```bash
git init
```

6. Create a new repository in your GitHub account

7. Commit your local changes

```bash
git add *
git add .gitignore
git commit -sm "Initial Commit"
```

8. Add your GitHub repo as a remote repo

```bash
git remote add origin git@github.com:zachwick/SwiftHello.git
git push -u origin master
```

9. Navigate to https://travis-ci.org/ and connect it to your GitHub account

10. Activate your new repo in Travis-CI (https://travis-ci.org/zachwick/SwiftHello)

11. Create `.travis.yml` and populate it as below:

```yaml
if: tag IS blank
branches:
  only:
    - master
env:
  global:
    - SWIFT_BRANCH=swift-5.0.1-release
    - SWIFT_VERSION=swift-5.0.1-RELEASE
    - PACKAGE_VERSION=0.0.1
jobs:
  include:
    - stage: Linux test
      os: linux
      language: generic
      dist: xenial
      sudo: required
      install:
        - sudo apt-get install clang libcurl3 libcurl4-openssl-dev libpython2.7 libpython2.7-dev
          libicu-dev libstdc++6
        - curl https://swift.org/builds/$SWIFT_BRANCH/ubuntu1604/$SWIFT_VERSION/$SWIFT_VERSION-ubuntu16.04.tar.gz
          > $SWIFT_VERSION-ubuntu16.04.tar.gz
        - tar xzf $SWIFT_VERSION-ubuntu16.04.tar.gz
        - export PATH="$(pwd)/$SWIFT_VERSION-ubuntu16.04/usr/bin:$PATH"
      script:
        - swift package update
        - swift test
    - stage: OSX test
      os: osx
      osx_image: xcode10.2
      language: swift
      sudo: required
      install:
        - wget https://swift.org/builds/$SWIFT_BRANCH/xcode/$SWIFT_VERSION/$SWIFT_VERSION-osx.pkg
        - sudo installer -pkg $SWIFT_VERSION-osx.pkg -target /
        - export PATH="/Library/Developer/Toolchains/$SWIFT_VERSION.xctoolchain/usr/bin:$PATH"
      script:
        - swift package update
        - swift test
    - stage: Set tag
      script:
        - git config --global user.email "builds@travis-ci.com"
        - git config --global user.name "Travis CI"
        - git tag $PACKAGE_VERSION
        - git push --quiet https://$GH_TOKEN@github.com/zachwick/SwiftHello --tag > /dev/null 2>&1
```

12. Commit `.travis.yml` and push to GitHub

13. Create a [Personal Access Token](https://github.com) in your GitHub account

14. Install the [Travis CLI tools](https://github.com/travis-ci/travis.rb) by either

```bash
brew install travis
```

or

```bash
gem install travis -v 1.8.9 --no-rdoc --no-ri
```

15. Set up and configure the travis CLI tool

```bash
travis login --auto
travis branches
```

The first command authenticates your CLI tool with your Travis-CI account using your local GitHub credentials. The
second command ensures that the travis CLI tool is using your Swift project as its current project.

16. Use the Travis CLI to add your GitHub Personal Access Token as an encrypted environment variable

```bash
echo GH_TOKEN=<YOUR TOKEN> | travis encrypt --add
```

17. Add a Travis-CI build status badge to your project's README file by following the steps
    at https://docs.travis-ci.com/user/status-images/.

Now, everytime that you want to push a new version of your Swift project if all of your tests pass, you simply need to
bump the version defined as `PACKAGE_VERSION`, in `.travis.yml` and them commit and push your changes.