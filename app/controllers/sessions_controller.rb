class SessionsController < ApplicationController
  def new
    @landing_page = true
    render :new
  end

  def create
    @landing_page = true
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      sign_in(user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid username or password."]
      render :new
    end
  end

  def destroy
    sign_out
    if(params[:react])
      render json: {}
    else
      redirect_to new_user_url
    end
  end
end
