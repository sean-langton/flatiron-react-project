class CreateScores < ActiveRecord::Migration[5.2]
  def change
    create_table :scores do |t|
      t.integer :score
      t.references :hole
      t.references :player

      t.timestamps
    end
  end
end
