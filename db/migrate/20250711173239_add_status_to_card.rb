# frozen_string_literal: true

class AddStatusToCard < ActiveRecord::Migration[7.1]
  def change
    add_column :cards, :status, :string
  end
end
