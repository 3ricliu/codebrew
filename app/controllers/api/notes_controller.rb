class Api::NotesController < ApplicationController
  before_filter :require_sign_in!
  def index
    # what if we wanted to show all notes in all notebooks?
    # for now i'll just nest all notes under notebooks since that seems logical
    @notebook = Notebook.find_by_id(params[:notebook_id])
    # this might not be necessary long term
    @notes = Note.where(notebook_id: @notebook.id, user_id: current_user.id)
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
    @note.user_id = current_user.id

    if @note.save
      render :show
    else
      render :json @note.errors.full_messages, status 422
    end
  end

  def update
    @note = Note.find_by_id(params[:id])
    if @note.update_attributes(note_params)
      render :show
    else
      render :json @note.errors.full_messages, status 422
    end
  end

  def destroy
    @note = Note.find_by_id(params[:id])
    @note.destroy
    render :show # does this need to be changed later?
  end

  def notes_params
    params.require(:note).permit(:title, :body, :notebook_id)
  end
end
