Rails.application.routes.draw do

  root to: 'static_pages#root'
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do

    resources :notebooks, only: [:index, :create, :update, :destroy] do
    end

    resources :notes, only: [:index, :show, :create, :update, :destroy]

    resources :notebooks, only: [:show] do
      resources :notes, only: [:index]
    end
  end


end
