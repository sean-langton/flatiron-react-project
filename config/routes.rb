Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :tournament, only: [:show, :new, :create, :destroy, :index] do
      resources :hole, only: [:show, :new, :create, :destroy, :index]
      resources :team, only: [:show, :new, :create, :destroy, :index]
    end
    resources :player, only: [:show, :new, :create, :destroy, :index]
    resources :score, only: [:show, :new, :create, :destroy, :index]
    resources :hole, only: [:destroy]
    resources :team, only: [:destroy]
  end
end
