# frozen_string_literal: true

require 'test_helper'

module Api
  module V1
    class CardsControllerTest < ActionDispatch::IntegrationTest
      setup do
        @card = cards(:one)
      end

      test 'should get index' do
        get cards_url, as: :json
        assert_response :success
      end

      test 'should create card' do
        assert_difference('Card.count') do
          post cards_url, params: { card: { description: @card.description, title: @card.title } }, as: :json
        end

        assert_response :created
      end

      test 'should show card' do
        get card_url(@card), as: :json
        assert_response :success
      end

      test 'should update card' do
        patch card_url(@card), params: { card: { description: @card.description, title: @card.title } }, as: :json
        assert_response :success
      end

      test 'should destroy card' do
        assert_difference('Card.count', -1) do
          delete card_url(@card), as: :json
        end

        assert_response :no_content
      end
    end
  end
end
