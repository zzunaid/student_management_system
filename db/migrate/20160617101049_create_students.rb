class CreateStudents < ActiveRecord::Migration
 def up
    create_table :students do |t|
      t.string :first_name, index: true, null: false
      t.string :last_name
      t.string :phone_number, index: true, null: false
      t.string :email_id, index: true, null: false
      t.float :average
      t.float :attendance
      t.integer :roster_id, index: true, null: false
      t.timestamps
    end
  end

  def down
    drop_table :students
  end
end
