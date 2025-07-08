# frozen_string_literal: true

# Abstract base class for all ActiveRecord models in the Trello Clone application
#
# This class serves as the foundation for all database models in the application.
# It inherits from ActiveRecord::Base and is marked as a primary abstract class,
# meaning it won't be instantiated directly but provides common functionality
# for all concrete model classes.
class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class
end
