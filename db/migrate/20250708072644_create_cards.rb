# frozen_string_literal: true

class CreateCards < ActiveRecord::Migration[7.1]
  def change
    create_table :cards do |t|
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end
