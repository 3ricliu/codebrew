class RenameAuthorColumns < ActiveRecord::Migration
  def change
    rename_column :notes, :author_id, :user_id
    rename_column :notebooks, :author_id, :user_id
  end
end
