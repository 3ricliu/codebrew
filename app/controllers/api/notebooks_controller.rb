class Api::NotebooksController < ApplicationController
  before_filter :require_sign_in!

  def index
    @notebooks = Notebook.where(user_id: current_user.id)
    render :index
  end

  def show
    @notebook = Notebook.find_by_id(params[:id])
    if @notebook
      @notebook = nil unless @notebook.user_id == current_user.id
    end
    render :show
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.user_id = current_user.id
    @notebook.title.capitalize!

    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def update
    @notebook = Notebook.find_by_id(params[:id])
    if @notebook.update_attributes(notebook_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @notebook = Notebook.find_by_id(params[:id])
    @notebook.destroy
    render :show
  end

  private
  def notebook_params
    params.require(:notebook).permit(:title, :id)
  end
end
