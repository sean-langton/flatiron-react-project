class CreateHoles < ActiveRecord::Migration[5.2]
  def change
    create_table :holes do |t|
      t.string :name
      t.time :start_time
      t.integer :duration
      t.references :tournament

      t.timestamps
    end
  end
end
