# frozen_string_literal: true

20.times do |i|
  Card.create(title: "Card #{i + 1}", description: "Description #{i + 1}")
end
