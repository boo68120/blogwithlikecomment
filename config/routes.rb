Rails.application.routes.draw do
  devise_for :users
  resources :posts do
  	member do
  		put "like" => "posts#vote"
  	end
  	resources :comments
  end
  root 'posts#index'
  root to: 'home#index'
end
