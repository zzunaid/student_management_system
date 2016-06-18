Rails.application.routes.draw do
  resources :rosters, only: [:index, :create, :destroy]
  resources :students, only: [:index, :create, :update, :destroy]
end
