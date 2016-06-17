Rails.application.routes.draw do
  resources :rosters, only: [:show, :destroy]
  resources :students, only: [:index, :create, :update, :destroy]
end
