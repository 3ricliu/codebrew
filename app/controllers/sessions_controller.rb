class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      sign_in(user)
      # TODO: redirect_to user homepage
    else
      flash.now[:errors] = ["Invalid username or password."]
      render :new
    end
  end

  def destroy
    sign_out
    redirect_to root
  end
end
