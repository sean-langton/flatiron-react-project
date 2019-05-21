Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :tournament, only: [:show, :new, :create, :destroy, :index]
    resources :hole, only: [:show, :new, :create, :destroy, :index]
    resources :player, only: [:show, :new, :create, :destroy, :index]
    resources :score, only: [:show, :new, :create, :destroy, :index]
    resources :team, only: [:show, :new, :create, :destroy, :index]
  end
end
