class Api::TagsController < ApplicationController
  before_filter :require_sign_in!

  def index
    tags = Tag.includes(:notes)

    @tags_with_note_ids = []

    tags.each do |tag|
      current_tag = []
      current_tag_note_ids = []
      tag.notes.each do |note|
        if note.user_id == current_user.id
          current_tag_note_ids.push(note.id)
        end
      end

      if current_tag_note_ids.length != 0
        current_tag.push(tag)
        @tags_with_note_ids.push(current_tag.push(current_tag_note_ids))
      end
    end

    render :index
  end

  def create
    @tag = Tag.find_by_name(tags_params["name"])
    note = Note.find_by_id(tags_params["noteId"])
    if @tag
      @tag.notes.push(note)
      @note_id = []
      @tag.notes.each do |note|
        @note_id.push(note.id)
      end

      render :show
    else
      @tag = Tag.new(name: tags_params["name"])
      @tag.name = @tag.name.split.each(&:capitalize!).join
      if @tag.save
        @tag.notes.push(note)
        @note_id = [note.id]

        render :show
      else
        render json: @note.errors.full_messages, status: 422
      end

    end
  end

  def destroy
    @tag = Tag.find_by_id(params[:tag][:id])
    disassociate_note = Note.find_by_id(params[:tag][:noteId].to_i)
    @tag.notes.delete(disassociate_note)

    @note_id = []

    if(@tag.notes.empty?)
      @tag.destroy
    else
      @tag.notes.each do |note|
        @note_id.push(note.id)
      end
    end

    render :show
  end

  private
  def tags_params
    params.require(:tag).permit(:id, :name, :noteId)
  end
end
