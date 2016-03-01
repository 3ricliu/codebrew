unless current_user.nil?
  json.current_user current_user.username
end
