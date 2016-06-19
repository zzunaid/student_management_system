Rails.application.routes.draw do
  resources :rosters, only: [:index, :create, :destroy]
  resources :students, only: [:index, :show, :create, :update, :destroy]
end
