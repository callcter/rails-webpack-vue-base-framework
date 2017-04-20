Rails.application.routes.draw do

  root 'home#index'

  scope :api do
    resources :todos, only: [:index, :create, :update, :destory]
  end

end
