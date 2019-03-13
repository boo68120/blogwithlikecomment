class AddUserIdToPost < ActiveRecord::Migration[5.2]
  def self_up
    add_column :posts, :user_id, :integer
  end
end
