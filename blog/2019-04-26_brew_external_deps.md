---
title: External Dependencies in Homebrew External Commands
authors: zach
tags: [development, homebrew, ruby]
---

# External Dependencies in Homebrew External Commands

The [Homebrew package manager](https://brew.sh) uses *[external commands](https://docs.brew.sh/External-Commands)* to
extend its functionality. These are either shell scripts or ruby scripts that can be added on top of the existing `brew`
infrastructure via the `brew tap` command.

When creating the [license](https://github.com/zachwick/homebrew-license) external command, I needed to add an external
ruby dependency of the `octokit` gem to facilitate attempting to fetch a formula's licensing information from the Github
API. It was obvious that I needed to add

```ruby
    require 'octokit'
```

to my `brew-license.rb` script, but it wasn't obvious how I could trigger that gem being installed on a user's machine
if it wasn't already present.

The solution that I settled on was to create a `Gemfile` where I defined my dependencies:

    source 'https://rubygems.org'
    gem 'octokit' 

Then, at the beginning of my `brew-license.rb` script, which is what is executed when a user types `brew license` in
their shell, I needed my ruby script to invoke `bundler` if the octokit gem wasn't installed locally on the user's
machine. This can be accomplished with the following:

```ruby
    REPO_ROOT = Pathname.new "#{File.dirname(__FILE__)}/.."
    VENDOR_RUBY = "#{REPO_ROOT}/vendor/ruby".freeze
    BUNDLER_SETUP = Pathname.new "#{VENDOR_RUBY}/bundler/setup.rb"
    unless BUNDLER_SETUP.exist?
	    Homebrew.install_gem_setup_path! "bundler"
	
      REPO_ROOT.cd do
        safe_system "bundle", "install", "--standalone", "--path", "vendor/ruby"
      end
    end
    require "rbconfig"
    ENV["GEM_HOME"] = ENV["GEM_PATH"] = "#{VENDOR_RUBY}/#{RUBY_ENGINE}/#{RbConfig::CONFIG["ruby_version"]}"
    Gem.clear_paths
    Gem::Specification.reset
    require_relative BUNDLER_SETUP
```

Now, the first time that a user executes `brew license`, this bit of code will ensure that the octokit gem is installed
locally.

You can see this in action
by [installing and using](https://github.com/zachwick/homebrew-license#install) `brew license`, and if you're interested
in adding licensing information for your favorite Homebrew formulae, please do feel free to submit issues or PRs!