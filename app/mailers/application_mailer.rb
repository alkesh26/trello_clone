# frozen_string_literal: true

# Base mailer class for the Trello Clone application
#
# This class provides the foundation for all email functionality in the application.
# It sets default configuration for outgoing emails and uses the 'mailer' layout.
class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'
end
