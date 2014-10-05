class CreateWish < ActiveRecord::Migration
  def change
    create_table :wishes do |t|
      t.text :message

      t.timestamps
    end
  end
end
