class Api::NotesController < ApplicationController

  before_filter :require_sign_in!

  def index
    @notebook = Notebook.find_by_id(params[:notebook_id])
    if(@notebook.nil?)
      @notes = Note.where(user_id: current_user.id) #render all the notes
    else
      @notes = Note.where(notebook_id: @notebook.id, user_id: current_user.id)
    end

    render :index
  end

  def tagged
    @notes = []
    tags = Tag.includes(:notes);
    @notes = tags.find_by_name(params[:tag_name]).notes.where(user_id: current_user.id)

    render :index
  end

  def show
    @note = Note.find_by_id(params[:id])
    @note = nil unless @note.user_id == current_user.id
    # other users can't access API to pull up other user's notes

    render :show
  end

  def create
    @note = Note.new(notes_params)
    @note.title = "Untitled" if @note.title.empty?
    @note.user_id = current_user.id
    @note.notebook_id = params[:note][:notebookId];

    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    @note = Note.find_by_id(params[:id])
    if @note.update_attributes(notes_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = Note.find_by_id(params[:id])
    @note.destroy
    
    render :show
  end

  def notes_params
    params.require(:note).permit(:title, :body)
  end
end
