Rails.application.routes.draw do

  root to: 'static_pages#root'
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    get 'current_user', to: 'sessions#current'

    get 'tagged_notes', to: 'notes#tagged'

    resources :notebooks, only: [:index, :create, :update, :destroy]

    resources :notes, only: [:index, :show, :create, :update, :destroy]

    resources :tags, only: [:index, :show, :create, :destroy]

    resources :notebooks, only: [:show] do
      resources :notes, only: [:index]
    end

  end


end
