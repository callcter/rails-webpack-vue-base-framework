require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module Todos
  class Application < Rails::Application
    config.webpack = {
      asset_manifest: {}
    }
  end
end
