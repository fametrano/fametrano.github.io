# Repo for Ferdinando M. Ametrano website

[ametrano.net](www.ametrano.net)

## Testing your GitHub Pages site locally with Jekyll

The first time setup requires Ruby and Jekyll installation, plus:

```shell
$ gem install bundler
$ bundle install
```

Then, every time:

```shell
$ bundle exec jekyll serve
Configuration file: C:/path/to/repo/checksig-custody.github.io/_config.yml
            Source: C:/path/to/repo/checksig-custody.github.io
       Destination: C:/path/to/repo/checksig-custody.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
       Jekyll Feed: Generating feed for posts
                    done in 25.31 seconds.
 Auto-regeneration: enabled for 'C:/path/to/repo/checksig-custody.github.io'
    Server address: 127.0.0.1:4000
  Server running... press ctrl-c to stop.
```

To preview your site, in your web browser, navigate to <127.0.0.1:4000>

From time to time you might want to update the GitHub Pages gem:

```shell
$ bundle update github-pages
Fetching gem metadata from rubygems.org/...........
Fetching gem metadata from rubygems.org/.
Resolving dependencies....
Using concurrent-ruby 1.1.5
Using i18n 0.9.5
Fetching minitest 5.14.0 (was 5.13.0)
Installing minitest 5.14.0 (was 5.13.0)
[...]
Using terminal-table 1.8.0
Fetching github-pages 204 (was 203)
Installing github-pages 204 (was 203)
Bundle updated!
```

See also:

- <jekyllrb.com/docs/installation/>
- <bundler.io/>
- <help.https://github.com/en/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll>
