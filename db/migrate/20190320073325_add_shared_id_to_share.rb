class AddSharedIdToShare < ActiveRecord::Migration[5.2]
  def change
    add_column :shares, :shared_id, :integer
  end
end
