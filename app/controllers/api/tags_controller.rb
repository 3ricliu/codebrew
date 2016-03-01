class Api::TagsController < ApplicationController
  before_filter :require_sign_in!

  def index
    @tags = Tag.includes(:notes);
    render :index
    debugger
    #
  end

  def show
  end

  def create
  end

  def destroy
  end

end
