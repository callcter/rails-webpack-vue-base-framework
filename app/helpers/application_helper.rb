module ApplicationHelper

  def webpack_javascript_include_tag(name)
    filename = "#{name}-bundle.js"
    asset_url = Rails.application.config.asset_host
    src = "#{asset_url}/assets/js/#{filename}"
    
    if Rails.env.development?
    elsif Rails.configuration.webpack[:manifest]
      asset_name = Rails.configuration.webpack[:manifest]["#{name}.js"]
      if asset_name
        src = "#{asset_url}/assets/js/#{asset_name}"
      end
    end
    "<script src=\"#{src}\"></script>".html_safe
  end

  def webpack_stylesheet_link_tag(name)
    filename = "#{name}-bundle.css"
    asset_url = Rails.application.config.asset_host
    src = "#{asset_url}/assets/css/#{filename}"

    if Rails.env.development?
    elsif Rails.configuration.webpack[:manifest]
      asset_name = Rails.configuration.webpack[:manifest]["#{name}.css"]
      if asset_name
        src = "#{asset_url}/assets/css/#{asset_name}"
      end
    end
    "<link rel=\"stylesheet\" href=\"#{src}\">".html_safe
  end

end
