class ApplicationController < ActionController::Base
	before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def authenticate_user
  if session[:user_id]
     # set current user object to @current_user object variable
    @current_user = User.find session[:user_id] 
    return true 
  else
    redirect_to(:controller => 'sessions', :action => 'login')
    return false
  end
end

  def configure_permitted_parameters
    added_attrs = [:username, :email, :password, :password_confirmation, :remember_me]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end
end
