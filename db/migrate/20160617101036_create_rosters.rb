class CreateRosters < ActiveRecord::Migration
def up
    create_table :rosters do |t|
      t.string :name, index: true, null: false
      t.boolean :is_active, default: true
      t.timestamps
    end
  end

  def down
    drop_table :rosters
  end
end
