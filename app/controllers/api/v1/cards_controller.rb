# frozen_string_literal: true

module Api
  module V1
    # API controller for managing Trello cards
    #
    # This controller provides RESTful endpoints for creating, reading, updating, and deleting
    # Trello cards. Cards are the fundamental units of work in a Trello board, representing
    # individual tasks, ideas, or items that can be moved between lists.
    class CardsController < ApplicationController
      before_action :set_card, only: %i[show update destroy]

      def index
        @cards = Card.order(created_at: :asc)

        render json: @cards
      end

      def show
        render json: @card
      end

      def create
        @card = Card.new(card_params)

        if @card.save
          render json: @card, status: :created, location: @card
        else
          render json: @card.errors, status: :unprocessable_entity
        end
      end

      def update
        if @card.update(card_params)
          render json: @card
        else
          render json: @card.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @card.destroy!
      end

      private

      def set_card
        @card = Card.find(params[:id])
      end

      def card_params
        params.require(:card).permit(:title, :description, :status)
      end
    end
  end
end
